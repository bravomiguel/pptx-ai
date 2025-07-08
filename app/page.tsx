"use client"

import { useState } from "react"
import Header from "@/components/header"
import ChatSidebar from "@/components/chat-sidebar"
import MainView from "@/components/main-view"
import Thumbnails from "@/components/thumbnails"

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

export default function Viewer() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [zoomLevel, setZoomLevel] = useState(100)

  const handleSlideChange = (slideId: number) => {
    setCurrentSlide(slideId)
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar />
        <MainView
          slides={slides}
          currentSlide={currentSlide}
          onSlideChange={handleSlideChange}
          zoomLevel={zoomLevel}
        />
        <Thumbnails
          slides={slides}
          currentSlide={currentSlide}
          onSlideChange={handleSlideChange}
        />
      </div>
    </div>
  )
} 