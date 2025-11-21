import { GoogleGenAI } from "@google/genai";
import { ResumeData } from "../types";

// We don't need the generator anymore, but we'll keep a chat service
// to allow visitors to "talk" to the portfolio.

export const chatWithPortfolio = async (
  message: string, 
  context: ResumeData,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key missing");
    return "I'm currently offline (API Key missing). Please email Sooin directly!";
  }

  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `
    You are an AI assistant living on Sooin Jung's portfolio website.
    Your goal is to represent Sooin professionally and answer questions about her experience, skills, and projects.
    
    Here is Sooin's Resume Data:
    ${JSON.stringify(context)}

    Tone: Professional, enthusiastic, helpful, and concise.
    If asked about contact info, provide her email: ${context.email}.
    If asked something not in the resume, say you don't know but suggest contacting her.
    Keep answers short (under 3 sentences if possible) unless asked for details.
  `;

  // We use a fresh chat session for simplicity in this stateless service wrapper,
  // but in a real app you'd persist the chat object.
  // For now, we just send the history + new message as a single generation or use the chat helper if we persisted it.
  // To keep it simple for this specific React implementation without complex state management:
  
  try {
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Chat Error", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};
