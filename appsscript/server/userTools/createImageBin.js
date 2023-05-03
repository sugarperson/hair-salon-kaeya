/**
 * Googleドライブ内の画像をbase64形式のデータに変換してファイルとして保存する関数。
 */
function createImageBin(){
  const folderId = MY_DRIVE_FOLDER_ID;
  const fileId = CREATION_TARGET_IMAGE_FILE_ID;
  const fileName = "something file name";
  const bin = getImage(fileId);
  DriveApp.getFolderById(folderId).createFile(fileName, bin);
}