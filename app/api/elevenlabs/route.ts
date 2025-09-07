import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    const apiKey = process.env.ELEVENLABS_API_KEY || "sk_8248ff460e2ba27a6ce31039b276655b9180b94f4a3f2770"

    if (!apiKey) {
      return NextResponse.json({ error: "ElevenLabs API key not configured" }, { status: 500 })
    }

    const response = await fetch("https://api.elevenlabs.io/v1/convai/conversation", {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model_id: "eleven_turbo_v2_5",
        agent_id: "jamie_spa_reception", // You'll need to create this agent in ElevenLabs
        conversation_config: {
          agent: {
            prompt: {
              prompt: `You are Jamie, a friendly and professional AI receptionist for Serenity Spa & Salon. You help customers with:
              
              - Booking appointments for spa treatments, massages, facials, and salon services
              - Providing information about our services and pricing
              - Answering questions about our location, hours, and policies
              - Collecting customer contact information for bookings
              
              Our services include:
              - Relaxation & Deep Tissue Massages
              - Rejuvenating Facials & Skincare
              - Hair Styling & Coloring
              - Manicures & Pedicures
              - Body Treatments & Wraps
              
              Always be warm, welcoming, and professional. If you need to book an appointment, collect the customer's name, phone number, preferred service, and preferred date/time. Our hours are Monday-Saturday 9AM-7PM, Sunday 10AM-5PM.`,
            },
          },
        },
        conversation_config_override: {
          agent: {
            first_message:
              "Hello! I'm Jamie, your virtual receptionist at Serenity Spa & Salon. How can I help you today? Are you looking to book an appointment or do you have questions about our services?",
          },
        },
        conversation_history: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("ElevenLabs API error:", errorText)
      throw new Error(`ElevenLabs API request failed: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json({
      response: data.agent_response || data.message || "I'm here to help with your spa and salon needs!",
      audio_url: data.audio_url,
    })
  } catch (error) {
    console.error("ElevenLabs API error:", error)
    return NextResponse.json(
      {
        error: "I'm having trouble connecting right now. Please try again or call us directly at (555) 123-SPA.",
        fallback: true,
      },
      { status: 500 },
    )
  }
}
