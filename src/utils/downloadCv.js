const CV_CHUNKS = Array.from(
  { length: 8 },
  (_, index) => `/cv/part-${String(index + 1).padStart(2, "0")}.txt`
);

export const downloadCv = async () => {
  const responses = await Promise.all(
    CV_CHUNKS.map((path) => fetch(path, { cache: "force-cache" }))
  );

  if (responses.some((response) => !response.ok)) {
    throw new Error("Unable to load CV files.");
  }

  const parts = await Promise.all(responses.map((response) => response.text()));
  const base64 = parts.join("").replace(/\s+/g, "");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "CV_GILAR_WAHIDITYA.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
