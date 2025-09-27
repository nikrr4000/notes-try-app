import type { VoiceFileData } from "./types";
import { getGetFileUrl } from "./endpoints";

export async function downloadVoiceOgg(
  token: string,
  fileData: VoiceFileData,
  getBuffer: boolean
) {
  const file_path = fileData.file_path;
  const url = getGetFileUrl(token, file_path);

  const fileRespo = await fetch(url);
  const fileBuffer = await fileRespo.arrayBuffer();

  if (getBuffer) return fileBuffer;

  //   const writer = require("fs").createWriteStream("voice.ogg");
  //   resp.data.pipe(writer);
  //   await new Promise((r, e) => writer.on("finish", r).on("error", e));
  //   console.log("saved voice.ogg");
}
