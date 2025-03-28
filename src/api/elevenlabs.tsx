import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient();        
await client.textToSpeech.convert(
	"CwhRBWXzGAHq8TQ4Fs17",
	{
		output_format: "mp3_44100_128",
		text: "The first move is what sets everything in motion.",
		model_id: "eleven_multilingual_v2"
	}
)
