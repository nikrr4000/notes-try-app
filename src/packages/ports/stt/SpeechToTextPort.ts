import type { SttRequest, SttResult, SttPartial } from "./types";

export interface SpeechToTextPort {
  /** Разовая транскрибация (batch). */
  transcribe(req: SttRequest): Promise<SttResult>;

  transcribeStream?(
    req: Omit<SttRequest, "audio"> & { audio: AsyncIterable<Uint8Array> }
  ): AsyncIterable<SttPartial>;

  /** Возможности провайдера (для graceful деградации UI/UX). */
  //   getCapabilities(): {
  //     streaming: boolean;
  //     diarization: boolean;
  //     timestamps: boolean;
  //     maxDurationSec?: number;
  //     supportedFormats?: ReadonlyArray<string>;
  //   };
}
