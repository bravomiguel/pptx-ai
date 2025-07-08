"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Plus,
  Cloud,
  Clock,
  MoreHorizontal,
  X,
  User,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RotateCcw,
  TrendingUp,
  Paperclip,
  Send,
} from "lucide-react"

export default function ChatSidebar() {
  const [chatMessage, setChatMessage] = useState("")
  return (
    <div className="w-full md:w-80 border-b md:border-b-0 md:border-r bg-background flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <h2 className="text-sm font-medium truncate flex-1">Presentation Viewer Discussion</h2>
        <div className="flex items-center gap-1 ml-2">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Plus className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Clock className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <MoreHorizontal className="w-4 h-4" />
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
  )
} 