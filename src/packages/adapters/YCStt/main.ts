import type { SpeechToTextPort, SttRequest, SttResult } from "../../ports";

export function YCStt (cfg: string): SpeechToTextPort {
    function transcribe(req: SttRequest): Promise<SttResult> {

    }

    return {
        transcribe(req: SttRequest): Promise<SttResult>
        getCapabilities(): {
            streaming: boolean;
            diarization: boolean;
            timestamps: boolean;
            maxDurationSec?: number | undefined;
            supportedFormats?: readonly string[] | undefined;
        };
    }
} 