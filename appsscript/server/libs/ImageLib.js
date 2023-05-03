function getImage(fileId) {
  const file = DriveApp.getFileById(fileId);
  const data = file.getBlob().getBytes();
  return Utilities.base64Encode(data);
}