import type { Buffer } from 'node:buffer';

export type Topic =
  | 'dev-notes'
  | 'product'
  | 'edu'
  | 'research'
  | 'personal'
  | 'inbox';

export interface AsrPort {
  transcribe(params: {
    bytes: Buffer;
    lang: 'ru-RU';
    sampleRateHz: 48000;
  }): Promise<{ text: string }>;
}

export interface LlmPort {
  classify(params: { text: string; topics: Topic[] }): Promise<{
    topic: Topic;
    confidence: number;
  }>;
  generateTitle(params: { text: string }): Promise<{ title: string }>;
}

export interface GitContentPort {
  putMarkdown(params: {
    path: string;
    content: string;
    message: string;
    author?: { name: string; email: string };
    expectedSha?: string;
  }): Promise<{ sha: string; commitSha: string; htmlUrl?: string }>;
}

export interface NotifierPort {
  notify(chatId: string, message: string, options?: unknown): void | Promise<void>;
}

export interface Clock {
  now(): Date;
}

export interface IdempotencyStore {
  withKey<T>(key: string, fn: () => Promise<T>): Promise<{
    status: 'fresh' | 'duplicate';
    result: T;
  }>;
}

export const ASR_PORT = Symbol('AsrPort');
export const LLM_PORT = Symbol('LlmPort');
export const GIT_CONTENT_PORT = Symbol('GitContentPort');
export const NOTIFIER_PORT = Symbol('NotifierPort');
export const CLOCK = Symbol('Clock');
export const IDEMPOTENCY_STORE = Symbol('IdempotencyStore');
