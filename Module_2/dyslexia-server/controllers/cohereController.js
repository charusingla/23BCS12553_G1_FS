import cohere from '@cohere-ai/cohere';
import dotenv from 'dotenv';

dotenv.config();
cohere.apiKey = process.env.COHERE_API_KEY;

export const simplifyText = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
  }

  try {
    const response = await cohere.generate({
      model: 'command-r-plus',
      prompt: `Simplify this text so a child can understand it:\n\n"${text}"\n\nSimplified version:`,
      max_tokens: 200,
      temperature: 0.5,
    });

    const simplified = response.generations[0].text.trim();
    res.json({ simplifiedText: simplified });
  } catch (err) {
    console.error('Cohere Error:', err);
    res.status(500).json({ error: 'Simplification failed' });
  }
};
