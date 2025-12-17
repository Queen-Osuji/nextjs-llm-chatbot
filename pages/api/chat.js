import { openai } from "../../lib/openaiClient";
import { systemPrompt } from "../../lib/systemPrompt";

export default async function handler(req, res) {
  const { message } = req.body;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: message }
    ],
  });

  res.status(200).json({ reply: completion.choices[0].message.content });
}

