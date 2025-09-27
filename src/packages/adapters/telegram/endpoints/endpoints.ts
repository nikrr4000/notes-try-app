export const getGetFileUrl = (token: string, file_path: string) =>
  `https://api.telegram.org/file/bot${token}/${file_path}`;
