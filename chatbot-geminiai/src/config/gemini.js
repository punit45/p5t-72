import { GoogleGenerativeAI } from "@google/generative-ai";

async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI("ENter your Api KEy Here");

    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
    });

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2000,
        responseMimeType: "text/plain",
    };

    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });

    const result = await chatSession.sendMessage(prompt);
    // console.log(result.response.text());
    return result.response.text();
}

export default runChat;