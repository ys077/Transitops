// backend/src/modules/ai/services/llmClient.ts

/**
 * A lightweight LLM client using fetch for Gemini API.
 */
export async function callLLM(prompt: string, systemPrompt?: string): Promise<string> {
  const apiKey = process.env.LLM_API_KEY;
  if (!apiKey || apiKey === 'dummy_key') {
    return 'LLM_API_KEY is not configured in the environment variables. Please add your actual API key to backend/.env';
  }

  const model = 'gemini-1.5-flash';
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  const body: any = {
    contents,
    generationConfig: {
      temperature: 0.2, // Low temp for more deterministic Ops answers
    },
  };

  if (systemPrompt) {
    body.systemInstruction = {
      parts: [{ text: systemPrompt }],
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('LLM API Error:', response.status, errText);
      return `LLM API Error: ${response.statusText}`;
    }

    const data = await response.json() as any;
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from LLM';
  } catch (error: any) {
    console.error('LLM Fetch Error:', error.message);
    return `Failed to connect to LLM: ${error.message}`;
  }
}
