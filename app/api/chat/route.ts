import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages,
    functions: [
      {
        name: 'get_budget',
        description: 'Get current budget limits',
        parameters: { type: 'object', properties: {} }
      }
    ]
  })

  return NextResponse.json(response)
}
