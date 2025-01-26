"use server";

import OpenAI from "openai";

const openai = new OpenAI();

export const getAiCompletion = async (messages, mock: boolean = true) => {
  if (mock) {
    return "This is a mock response from the AI.";
  }

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-4o-mini",
    temperature: 0.1,
  });
  const aiMessage = completion.choices[0].message.content;

  return aiMessage || "An error occurred while generating the AI response.";
};
