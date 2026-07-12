// backend/src/modules/ai/services/llmClient.ts

/**
 * A lightweight LLM client using fetch.
 * Assumes the LLM_API_KEY is for Groq since it's recommended in the blueprint for speed,
 * but it uses the standard OpenAI-compatible API shape so it can easily be swapped.
 */
export async function callLLM(prompt: string, systemPrompt?: string): Promise<string> {
  const apiKey = process.env.LLM_API_KEY;
  if (!apiKey || apiKey === 'your-llm-api-key-here') {
    return 'LLM_API_KEY is not configured in the environment variables. Please add your API key to backend/.env';
  }

  // Default to Groq for fast inference (OpenAI compatible)
  // If you want to use OpenAI, change to 'https://api.openai.com/v1/chat/completions'
  // and model to 'gpt-4o-mini'
  const endpoint = 'https://api.groq.com/openai/v1/chat/completions';
  const model = 'llama-3.1-8b-instant';

  const messages = [];
  if (systemPrompt) {
    messages.push({ role: 'system', content: systemPrompt });
  }
  messages.push({ role: 'user', content: prompt });

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.2, // Low temp for more deterministic Ops answers
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('LLM API Error:', response.status, errText);
      return `LLM API Error: ${response.statusText}`;
    }

    const data = await response.json() as any;
    return data.choices?.[0]?.message?.content || 'No response from LLM';
  } catch (error: any) {
    console.error('LLM Fetch Error:', error.message);
    return `Failed to connect to LLM: ${error.message}`;
  }
}
