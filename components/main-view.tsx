"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import Image from "next/image"

type Slide = {
  id: number
  title: string
  thumbnail: string
}

type Props = {
  slides: Slide[]
  currentSlide: number
  onSlideChange: (slideId: number) => void
  zoomLevel: number
}

export default function MainView({ slides, currentSlide, onSlideChange, zoomLevel }: Props) {
  return (
    <div className="flex-1 flex flex-col">
      {/* Navigation Controls */}
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onSlideChange(Math.max(1, currentSlide - 1))}
            disabled={currentSlide === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onSlideChange(Math.min(slides.length, currentSlide + 1))}
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
  )
} 