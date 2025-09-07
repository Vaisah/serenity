"use client"
import { Conversation } from "@elevenlabs/client"
import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mic, MicOff, PhoneOff } from "lucide-react"

export function JamieAgent() {
  const [isConnected, setIsConnected] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [status, setStatus] = useState<string>("Ready to connect")
  const conversationRef = useRef<any>(null)

  const startConversation = async () => {
    try {
      console.log("[v0] Starting conversation with Jamie...")
      setStatus("Connecting...")

      const conversation = await Conversation.startSession({
        agentId: "agent_0101k4jc4d4kexfbm58tw3pj5cz4",
        onConnect: () => {
          console.log("[v0] Connected to Jamie")
          setIsConnected(true)
          setStatus("Connected - Jamie is ready to help!")
        },
        onDisconnect: () => {
          console.log("[v0] Disconnected from Jamie")
          setIsConnected(false)
          setStatus("Disconnected")
          conversationRef.current = null
        },
        onError: (error) => {
          console.error("[v0] Conversation error:", error)
          setStatus("Connection error - please try again")
          setIsConnected(false)
        },
        onStatusChange: (newStatus) => {
          console.log("[v0] Status changed:", newStatus)
          const statusText =
            typeof newStatus === "string"
              ? newStatus
              : typeof newStatus === "object" && newStatus?.status
                ? newStatus.status
                : "Status updated"
          setStatus(statusText)
        },
        onMessage: (message) => {
          console.log("[v0] Message received:", message)
        },
      })

      conversationRef.current = conversation
    } catch (error) {
      console.error("[v0] Failed to start conversation:", error)
      setStatus("Failed to connect - check microphone permissions")
    }
  }

  const endConversation = () => {
    if (conversationRef.current) {
      conversationRef.current.endSession()
      conversationRef.current = null
    }
    setIsConnected(false)
    setStatus("Ready to connect")
  }

  const toggleMute = () => {
    if (conversationRef.current) {
      conversationRef.current.setMicMuted(!isMuted)
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">Meet Jamie</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our AI-powered reception assistant is here 24/7 to help you book appointments, answer questions, and guide
            you through our services.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-background border-border shadow-lg">
            <CardContent className="p-8">
              {/* Jamie Avatar */}
              <div className="text-center mb-8">
                <div
                  className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isConnected
                      ? "bg-gradient-to-br from-green-500 to-emerald-600 animate-pulse"
                      : "bg-gradient-to-br from-primary to-accent"
                  }`}
                >
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2">Jamie - AI Reception</h3>
                <p className="text-muted-foreground text-sm">{status}</p>
              </div>

              {/* Conversation Controls */}
              <div className="flex justify-center gap-4 mb-8">
                {!isConnected ? (
                  <Button
                    onClick={startConversation}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Talk to Jamie
                  </Button>
                ) : (
                  <div className="flex gap-3">
                    <Button
                      onClick={toggleMute}
                      variant="outline"
                      size="lg"
                      className={isMuted ? "bg-red-50 border-red-200" : ""}
                    >
                      {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </Button>
                    <Button onClick={endConversation} variant="destructive" size="lg">
                      <PhoneOff className="w-5 h-5 mr-2" />
                      End Call
                    </Button>
                  </div>
                )}
              </div>

              {/* Conversation Status Display */}
              {isConnected && (
                <div className="text-center mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    🎙️ You're now talking with Jamie! Ask about our services, book appointments, or get spa information.
                  </p>
                </div>
              )}

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Book Appointments</h4>
                  <p className="text-sm text-muted-foreground">Schedule your treatments instantly</p>
                </div>

                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Ask Questions</h4>
                  <p className="text-sm text-muted-foreground">Get instant answers about services</p>
                </div>

                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Natural Voice</h4>
                  <p className="text-sm text-muted-foreground">Speak naturally, just like calling</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
