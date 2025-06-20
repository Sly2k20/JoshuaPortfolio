"use client"

import { useEffect, useState } from "react"

interface SplashScreenProps {
  isVisible: boolean
  onComplete?: () => void
}

export default function SplashScreen({ isVisible, onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [showLogo, setShowLogo] = useState(false)
  const [showSubtext, setShowSubtext] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const splashTexts = [
    "INITIALIZING...",
    "LOADING ASSETS...",
    "COMPILING SHADERS...",
    "PREPARING INTERFACE...",
    "WELCOME TO JOSHUA'S PORTFOLIO",
  ]

  useEffect(() => {
    if (isVisible) {
      setProgress(0)
      setShowLogo(false)
      setShowSubtext(false)
      setFadeOut(false)

      // Logo animation
      const logoTimer = setTimeout(() => {
        setShowLogo(true)
      }, 500)

      // Subtext animation
      const subtextTimer = setTimeout(() => {
        setShowSubtext(true)
      }, 1500)

      // Progress and text animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 12 + 3

          // Update text based on progress
          const textIndex = Math.floor((newProgress / 100) * splashTexts.length)
          if (textIndex < splashTexts.length) {
            setCurrentText(splashTexts[textIndex])
          }

          if (newProgress >= 100) {
            clearInterval(progressInterval)
            setCurrentText("READY")

            // Start fade out
            setTimeout(() => {
              setFadeOut(true)
              setTimeout(() => onComplete?.(), 800)
            }, 2000)

            return 100
          }
          return newProgress
        })
      }, 150)

      return () => {
        clearTimeout(logoTimer)
        clearTimeout(subtextTimer)
        clearInterval(progressInterval)
      }
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden transition-opacity duration-800 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Red gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-red-900/20"></div>

        {/* Animated red lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Floating red particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Scanning effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-70 animate-pulse"
            style={{
              top: `${(progress / 100) * 100}%`,
              transition: "top 0.3s ease-out",
            }}
          ></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-12 max-w-2xl mx-auto px-6">
        {/* Logo animation */}
        <div
          className={`space-y-6 transition-all duration-1000 ${showLogo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative">
            {/* Glitch effect background */}
            <div className="absolute inset-0 text-6xl md:text-7xl font-black text-red-500/20 transform -skew-x-12 animate-pulse">
              JOSHUA FERNANDES
            </div>
            <div
              className="absolute inset-0 text-6xl md:text-7xl font-black text-red-500/10 transform skew-x-6 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            >
              JOSHUA FERNANDES
            </div>

            {/* Main logo */}
            <h1 className="relative text-6xl md:text-7xl font-black text-red-500 transform -skew-x-12 animate-pulse">
              JOSHUA FERNANDES
            </h1>
          </div>

          {/* Subtitle with typewriter effect */}
          <div
            className={`transition-all duration-1000 delay-500 ${showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">GAME DEVELOPER</div>
            <div className="text-lg text-gray-400">PORTFOLIO SYSTEM</div>
          </div>
        </div>

        {/* Progress section */}
        <div
          className={`space-y-8 transition-all duration-1000 delay-1000 ${showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Progress bar */}
          <div className="relative">
            <div className="w-full h-4 bg-gray-800 border-2 border-red-500/50 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-300 ease-out relative"
                style={{ width: `${Math.min(100, progress)}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>

                {/* Moving highlight */}
                <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-r from-transparent to-white/50 animate-pulse"></div>
              </div>
            </div>

            {/* Progress percentage */}
            <div className="absolute -top-8 right-0 text-red-500 font-bold text-xl">
              {Math.floor(Math.min(100, progress))}%
            </div>
          </div>

          {/* Loading text with glitch effect */}
          <div className="space-y-4">
            <div className="text-white font-bold text-xl relative">
              <span className="relative z-10">{currentText}</span>

              {/* Glitch overlay */}
              <span className="absolute inset-0 text-red-500/50 animate-pulse" style={{ animationDelay: "0.1s" }}>
                {currentText}
              </span>
            </div>

            {/* Animated dots */}
            <div className="flex justify-center space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* System info */}
        <div
          className={`grid grid-cols-2 gap-8 text-xs text-gray-500 border-t border-red-500/30 pt-6 transition-all duration-1000 delay-1500 ${showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div>
            <div className="font-bold text-red-400 mb-2">SYSTEM STATUS</div>
            <div>RENDERER: WebGL 2.0</div>
            <div>MEMORY: {Math.floor(40 + Math.random() * 20)}MB</div>
            <div>FPS: 60</div>
          </div>
          <div>
            <div className="font-bold text-red-400 mb-2">NETWORK</div>
            <div>STATUS: CONNECTED</div>
            <div>LATENCY: {Math.floor(10 + Math.random() * 30)}ms</div>
            <div>PROTOCOL: HTTPS</div>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-red-500 animate-pulse"></div>
      <div
        className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-red-500 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-red-500 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-red-500 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  )
}
