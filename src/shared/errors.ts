export type AppErrorKind =
  | 'Validation'
  | 'Auth'
  | 'RateLimit'
  | 'Transient'
  | 'External'
  | 'Conflict'
  | 'NotFound';

export type AppService =
  | 'telegram'
  | 'speechkit'
  | 'yandexgpt'
  | 'github'
  | 'app';

export interface AppErrorOptions {
  kind: AppErrorKind;
  service: AppService;
  code: string;
  message: string;
  retryable: boolean;
  details?: unknown;
  cause?: unknown;
}

export class AppError extends Error {
  kind: AppErrorKind;
  service: AppService;
  code: string;
  retryable: boolean;
  details?: unknown;
  cause?: unknown;

  constructor(opts: AppErrorOptions) {
    super(opts.message);
    this.name = 'AppError';
    this.kind = opts.kind;
    this.service = opts.service;
    this.code = opts.code;
    this.retryable = opts.retryable;
    this.details = opts.details;
    this.cause = opts.cause;
  }
}

export function isAppError(err: unknown): err is AppError {
  return err instanceof AppError;
}
