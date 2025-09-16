import type { Buffer } from 'node:buffer';
import type {
  AsrPort,
  LlmPort,
  GitContentPort,
  NotifierPort,
  Clock,
  IdempotencyStore,
} from '../../domain/ports.js';

export interface HandleVoiceInput {
  chatId: string;
  fileUniqueId: string;
  audio: Buffer;
  mimeType: string;
}

export class HandleVoice {
  readonly asr: AsrPort;
  readonly llm: LlmPort;
  readonly git: GitContentPort;
  readonly notifier: NotifierPort;
  readonly clock: Clock;
  readonly idem: IdempotencyStore;

  constructor(
    asr: AsrPort,
    llm: LlmPort,
    git: GitContentPort,
    notifier: NotifierPort,
    clock: Clock,
    idem: IdempotencyStore,
  ) {
    this.asr = asr;
    this.llm = llm;
    this.git = git;
    this.notifier = notifier;
    this.clock = clock;
    this.idem = idem;
  }

  // TODO: implement full voice handling flow
  async execute(_input: HandleVoiceInput): Promise<void> {
    // Placeholder implementation
    return Promise.resolve();
  }
}
