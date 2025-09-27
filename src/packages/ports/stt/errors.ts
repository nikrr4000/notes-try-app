export class SttError extends Error {
  constructor(
    message: string,
    public readonly code:
      | "RATE_LIMIT"
      | "AUDIO_UNSUPPORTED"
      | "AUDIO_TOO_LONG"
      | "BAD_REQUEST"
      | "PROVIDER_ERROR"
      | "NETWORK"
      | "INTERNAL"
  ) {
    super(message);
  }
}
