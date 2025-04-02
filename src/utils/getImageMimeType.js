const MimeTypes = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    webp: "image/webp",
    gif: "image/gif",
    svg: "image/svg+xml",
  };
export function getMimeTypeFromFilePath(fileName) {
    const suffix = fileName.split(".");
    // @ts-ignore
    const mimeType = MimeTypes[suffix[(suffix.length - 1)]];
    if (!mimeType) {
      throw Error(`Unsupported Media Type: ${filePath}`);
    }
   
    return mimeType;
  }

export default getMimeTypeFromFilePath;