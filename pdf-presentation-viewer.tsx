"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MoreHorizontal,
  User,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RotateCcw,
  TrendingUp,
  Paperclip,
  Send,
  Plus,
  Cloud,
  Clock,
  X,
} from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [zoomLevel, setZoomLevel] = useState(100)
  const [chatMessage, setChatMessage] = useState("")

  // Dummy slide data
  const slides = [
    {
      id: 1,
      title: "Paid Search - Recent Projects For Training",
      thumbnail: "/placeholder.svg?height=120&width=160",
    },
    {
      id: 2,
      title: "Paid Search Content Overview",
      thumbnail: "/placeholder.svg?height=120&width=160",
    },
    {
      id: 3,
      title: "UK Advertising Market Analysis",
      thumbnail: "/placeholder.svg?height=120&width=160",
    },
    {
      id: 4,
      title: "Digital Marketing Overview",
      thumbnail: "/placeholder.svg?height=120&width=160",
    },
    {
      id: 5,
      title: "Brand Paid Search Example",
      thumbnail: "/placeholder.svg?height=120&width=160",
    },
    {
      id: 6,
      title: "Brand Paid Search User Journey",
      thumbnail: "/placeholder.svg?height=120&width=160",
    },
  ]

  const handleSlideChange = (slideId: number) => {
    setCurrentSlide(slideId)
  }

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 25, 50))
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b bg-background">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-sm font-bold">
            v0
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Chat Sidebar */}
        <div className="w-80 border-r bg-background flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b bg-muted/50">
            <h2 className="text-sm font-medium truncate flex-1">PDF Presentation Viewer Discussion</h2>
            <div className="flex items-center gap-1 ml-2">
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Plus className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Cloud className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Clock className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {/* User Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    Make a ui as per the attached screenshot. in the viewing pane on the right, I want this to be for
                    viewing pdf presentations, with a vertically laid out page thumbnails for navigation, like the
                    second screenshot. Except thumbnails should be on the right hand side. Use dummy pictures for now
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                  v0
                </div>
                <div className="flex-1">
                  <p className="text-sm mb-3">
                    I'll create a PDF presentation viewer interface based on your screenshots. The layout will have a
                    main viewing area on the left and thumbnail navigation on the right side, similar to the v0
                    interface structure but adapted for PDF presentations.
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ThumbsUp className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ThumbsDown className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Follow-up Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    Ok good start, but you forgot the chat sidebar on the left hand side of the screenshot!
                  </p>
                </div>
              </div>
            </div>
          </ScrollArea>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2 p-2 border rounded-lg">
              <input
                type="text"
                placeholder="Ask a follow-up..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <TrendingUp className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Paperclip className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Send className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSlideChange(Math.max(1, currentSlide - 1))}
                disabled={currentSlide === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSlideChange(Math.min(slides.length, currentSlide + 1))}
                disabled={currentSlide === slides.length}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm text-muted-foreground">
                {currentSlide} / {slides.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Maximize2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Main Slide View */}
          <div className="flex-1 flex items-center justify-center p-8 bg-muted/20">
            <Card className="w-full max-w-4xl aspect-[16/9] flex items-center justify-center bg-white shadow-lg">
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ transform: `scale(${zoomLevel / 100})` }}
              >
                <Image
                  src={slides[currentSlide - 1]?.thumbnail || "/placeholder.svg?height=600&width=800"}
                  alt={`Slide ${currentSlide}`}
                  width={800}
                  height={600}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Right Sidebar - Thumbnails */}
        <div className="w-64 border-l bg-background flex flex-col">
          <div className="p-4 border-b">
            <h3 className="font-semibold text-sm">Slides</h3>
            <p className="text-xs text-muted-foreground mt-1">{slides.length} slides total</p>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-2 space-y-2">
              {slides.map((slide) => (
                <Card
                  key={slide.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    currentSlide === slide.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50"
                  }`}
                  onClick={() => handleSlideChange(slide.id)}
                >
                  <div className="p-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-9 bg-muted rounded border flex items-center justify-center text-xs font-medium">
                          {slide.id}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <Image
                          src={slide.thumbnail || "/placeholder.svg"}
                          alt={`Slide ${slide.id} thumbnail`}
                          width={120}
                          height={90}
                          className="w-full h-auto rounded border"
                        />
                        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{slide.title}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
