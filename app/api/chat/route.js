import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI with API key from environment variables
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your environment
});

export async function POST(req) {
  // Extract the prompt and messages from the request body
  const { prompt, messages } = await req.json();

  // Build the conversation history for context in the chat
  const conversation = messages.map((msg) => ({
    role: msg.sender === 'user' ? 'user' : 'assistant',
    content: msg.text,
  }));

  try {
    // Call the OpenAI API's chat completion method
    const response = await openai.chat.completions.create({
      model: 'gpt-4o', // Specify the GPT-4 model
      messages: [
        { role: 'system', content: prompt }, // Initial system message with the prompt
        ...conversation, // Append the conversation messages
      ],
      max_tokens: 1500, // Limit the number of tokens in the response
      temperature: 0.7, // Set temperature for creativity in responses
    });

    // Extract the assistant's reply from the API response
    const reply = response.choices[0].message.content.trim();
    return NextResponse.json({ reply });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error generating response:", error);
    
    // Return a 500 error response if something goes wrong
    return NextResponse.json({ error: 'Error generating response' }, { status: 500 });
  }
}
