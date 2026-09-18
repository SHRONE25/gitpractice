import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AIzaSyAnnW63pfHhYJeI0M9R7iUSbMoxKVcyhOQ"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: "how are you",
  });
  console.log(response.text);
}

await main();