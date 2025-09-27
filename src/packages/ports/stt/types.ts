export type SttAudioInput =
  | { kind: "filePath"; path: string } // локальный файл
  | { kind: "buffer"; buffer: Uint8Array } // байты
  | { kind: "url"; url: string }; // если вы сами качаете

export type SttFormat = "ogg" | "mp3" | "wav" | "m4a" | "webm";

export type SttRequest = {
  audio: SttAudioInput;
  formatHint?: SttFormat; // подсказка контейнера/кодека
  languageHint?: string; // 'ru', 'en', 'ru-RU'
  timestamps?: boolean; // нужны ли таймкоды
  diarization?: boolean; // нужен ли спикер-диаризация
  prompt?: string; // подсказка / доменный контекст
  targetPunctuate?: boolean; // пунктуация/нормализация
  // расширяемые поля:
  maxDurationSec?: number;
};

export type SttWord = {
  text: string;
  startSec?: number;
  endSec?: number;
  speaker?: string | number;
  confidence?: number;
};

export type SttResult = {
  text: string;
  words?: SttWord[];
  durationSec?: number;
  confidenceMean?: number; // усреднённая уверенность (если есть)
  language?: string; // распознанный язык
  raw?: unknown; // опционально — сырые данные под дебаг
};

export type SttPartial = {
  text: string;
  isFinal: boolean;
  words?: SttWord[];
};
