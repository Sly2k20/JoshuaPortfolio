"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  isVisible: boolean
  onComplete?: () => void
}

export default function LoadingScreen({ isVisible, onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("INITIALIZING")
  const [glitchText, setGlitchText] = useState("")

  const loadingTexts = [
    "INITIALIZING JOSHUA'S PORTFOLIO",
    "LOADING GAME PROJECTS",
    "COMPILING SHADER PROGRAMS",
    "ESTABLISHING NETWORK CONNECTION",
    "PREPARING DEVELOPER INTERFACE",
    "READY TO SHOWCASE GAMES",
  ]

  useEffect(() => {
    if (isVisible) {
      setProgress(0)
      setCurrentText(loadingTexts[0])

      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 8 + 2

          // Update text based on progress
          const textIndex = Math.floor((newProgress / 100) * loadingTexts.length)
          if (textIndex < loadingTexts.length) {
            setCurrentText(loadingTexts[textIndex])
          }

          if (newProgress >= 100) {
            clearInterval(progressInterval)
            setTimeout(() => onComplete?.(), 500)
            return 100
          }
          return newProgress
        })
      }, 80)

      // Glitch effect
      const glitchInterval = setInterval(() => {
        const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
        const randomGlitch = Array.from(
          { length: 3 },
          () => glitchChars[Math.floor(Math.random() * glitchChars.length)],
        ).join("")

        setGlitchText(randomGlitch)
        setTimeout(() => setGlitchText(""), 100)
      }, 300)

      return () => {
        clearInterval(progressInterval)
        clearInterval(glitchInterval)
      }
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-900/10"></div>

        {/* Moving red lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-full h-1 bg-red-500 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute left-0 top-0 w-1 h-full bg-red-500 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute right-0 top-0 w-1 h-full bg-red-500 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto px-6">
        {/* Logo/Title */}
        <div className="space-y-4">
          <div className="text-6xl font-black text-red-500 transform -skew-x-12 animate-pulse">JOSHUA</div>
          <div className="text-2xl font-bold text-white">GAME DEVELOPER</div>
          <div className="text-sm text-gray-400">PORTFOLIO SYSTEM v2.0</div>
        </div>

        {/* Progress section */}
        <div className="space-y-6">
          {/* Progress bar */}
          <div className="relative">
            <div className="w-full h-3 bg-gray-800 border-2 border-red-500/50 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-200 ease-out relative"
                style={{ width: `${Math.min(100, progress)}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <div className="absolute -top-8 right-0 text-red-500 font-bold text-lg">
              {Math.floor(Math.min(100, progress))}%
            </div>
          </div>

          {/* Loading text */}
          <div className="space-y-2">
            <div className="text-white font-bold text-lg">
              {currentText}
              <span className="text-red-500 ml-2">{glitchText}</span>
            </div>
            <div className="flex justify-center space-x-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* System info */}
        <div className="grid grid-cols-2 gap-4 text-xs text-gray-400 border-t border-red-500/30 pt-4">
          <div>
            <div className="font-bold text-red-400 mb-1">SYSTEM STATUS</div>
            <div>CPU: {Math.floor(60 + Math.random() * 30)}%</div>
            <div>GPU: {Math.floor(70 + Math.random() * 25)}%</div>
            <div>RAM: {Math.floor(40 + Math.random() * 20)}%</div>
          </div>
          <div>
            <div className="font-bold text-red-400 mb-1">NETWORK</div>
            <div>STATUS: CONNECTED</div>
            <div>PING: {Math.floor(10 + Math.random() * 40)}ms</div>
            <div>BANDWIDTH: OPTIMAL</div>
          </div>
        </div>
      </div>
    </div>
  )
}
