import { GoogleGenerativeAI } from "@google/generative-ai";
import { PRODUCTS } from '../constants';

const ai = new GoogleGenerativeAI(process.env.API_KEY!);

const systemInstruction = `
You are Lumina AI, a helpful and sophisticated shopping assistant for a minimalist e-commerce store called "Lumina".
Your tone should be polite, concise, and helpful.

Here is our current product catalog:
${JSON.stringify(PRODUCTS.map(p => ({ name: p.name, price: p.price, category: p.category, description: p.description })))}

Rules:
1. Answer questions about products based ONLY on the catalog above.
2. If a user asks for recommendations, suggest items from the catalog based on their needs.
3. If asked about shipping, say "We offer free worldwide shipping on orders over $100."
4. If asked about returns, say "We have a 30-day no-questions-asked return policy."
5. Keep answers brief (under 3 sentences) unless detailed comparison is requested.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: "user" | "model"; text: string }[]
): Promise<string> => {
  try {
    const model = ai.getGenerativeModel({
      model: "gemini-1.5-flash", // use a valid model
      systemInstruction,
    });

    // Convert history to the new message format
    const chat = model.startChat({
      history: history.map(h => ({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.text }],
      })),
    });

    const response = await chat.sendMessage(message);

    return response.response.text() ||
      "I'm sorry, could you rephrase that?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};
