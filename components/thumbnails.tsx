"use client"

import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
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
}

export default function Thumbnails({ slides, currentSlide, onSlideChange }: Props) {
  return (
    <div className="w-64 border-l bg-background flex flex-col">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-sm">Slides</h3>
        <p className="text-xs text-muted-foreground mt-1">{slides.length} slides total.</p>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-2">
          {slides.map((slide) => (
            <Card
              key={slide.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                currentSlide === slide.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50"
              }`}
              onClick={() => onSlideChange(slide.id)}
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
  )
} 