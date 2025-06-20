"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ArrowRight, Play, ArrowLeft, ImageIcon, Calendar, Clock, Linkedin, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import LoadingScreen from "./loading-screen"
import SplashScreen from "./splash-screen"

export default function Component() {
  const [currentPage, setCurrentPage] = useState("ABOUT")
  const [isLoading, setIsLoading] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const projects = [
    {
      id: "lilys-odyssey",
      title: "LILY'S ODYSSEY",
      subtitle: "Narrative Stealth Puzzle Adventure",
      shortDesc: "A time-travelling adventure set in ancient Greece with stealth and puzzle mechanics.",
      description: "Lily's Odyssey is a narrative-driven stealth puzzle adventure set in ancient Greece.",
      fullDescription:
        "Lily's Odyssey is a narrative-driven stealth puzzle adventure set in ancient Greece. Players take on the role of Lily, a time-travelling explorer, and her loyal bird companion, Apollo, as they journey across the cursed island of Serifos. Guided by the goddess Athena, Lily must solve puzzles, evade mythological enemies, and retrieve five hidden Gorgon heads to lift a divine curse and restore peace to the land.",
      tech: ["UNREAL ENGINE 4", "BLUEPRINT", "MIXAMO", "PHOTOSHOP"],
      features: ["Bird Companion", "Puzzle Mechanics", "Stealth Gameplay"],
      role: ["Programmer", "Level Designer"],
      status: "COMPLETED",
      year: "2024",
      featured: true,
      youtubeId: "KLzY4mQmpY0",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lily-menu-j3He1bcnS92zLTvxURN2Cwx9YNQCNI.webp",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lily-gameplay-UVJrOvJuisY1zwOXBBli8TtCgFQ3f4.webp",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lily-night-Zrg0UT4kA9WwkEDYE9qVfJsEQrBQAa.webp",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lily-credits-aQ355bHRFER0tw3hvWiX2L8R9yIVgt.webp",
      ],
      duration: "6 months",
    },
    {
      id: "ravens-lament",
      title: "RAVEN'S LAMENT",
      subtitle: "Open-World Action Adventure",
      shortDesc: "An action-adventure game set in a fictional land inspired by Japanese and Spanish architecture.",
      description: "Raven's Lament is an open-world action-adventure game set in Shinagimikoku.",
      fullDescription:
        "Raven's Lament is an open-world action-adventure game set in Shinagimikoku — a fictional land inspired by Japanese and Spanish architecture. Players take on the role of Raven, a skilled warrior wrongfully accused of a crime. To clear her name, Raven must complete quests, gather intelligence, and battle supernatural enemies. Developed as part of university coursework, this project showcases my skills in level design, enemy AI, and modular mission structure using Unreal Engine 4.",
      tech: ["UNREAL ENGINE 4", "BLUEPRINT", "MIXAMO", "PHOTOSHOP", "GIT", "BLENDER"],
      features: ["Quest System", "Enemy AI", "Boss AI", "Grapple System", "Wall Climb System"],
      role: ["Programmer", "Level Designer", "Game Designer"],
      status: "COMPLETED",
      year: "2024",
      featured: false,
      youtubeId: "5P49OL_qorQ",
      youtubeVideos: [
        { id: "5P49OL_qorQ", title: "Main Menu & UI" },
        { id: "9RAsy7_Y6c8", title: "World Overview" },
        { id: "fNyQjBLhcqo", title: "Gameplay Demo" },
      ],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raven-menu-V4e510JEbrTNPU8tL32DdAqKLbZjys.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raven-overview-o6jlty4ydfcv4cAOoO3eNpVu0xxiNb.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raven-gate-LsoYcdj6T1gziWoXuF2Mw7lr7CdOmJ.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raven-dragon-6mq3j6DjdH6xbAnMeUhvp2eD20TDlj.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raven-dungeon-XURd7Dp1uS4b9BR3XbzYboos0YVlsd.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raven-boss-MlUqFE9yOdtrpd1Knq47xDX4OJyhGa.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raven-combat-EuRdJ8EkS6on7MVGzsnch5SsqvYjkF.png",
      ],
      duration: "4 months",
    },
    {
      id: "fablefront",
      title: "FABLEFRONT",
      subtitle: "Direct3D Procedural Terrain Engine",
      shortDesc: "A custom Direct3D project featuring procedurally generated terrain and atmospheric ghost entities.",
      description: "FableFront is a custom Direct3D project showcasing advanced 3D graphics programming.",
      fullDescription:
        "FableFront is a custom Direct3D project that features procedurally generated terrain using Perlin noise, dynamic skybox lighting, and shader-based rendering. Ghost entities float through the environment to create a mysterious, atmospheric tone. The project showcases core skills in terrain generation, real-time rendering, and low-level 3D graphics programming.",
      tech: ["DIRECT3D", "BLENDER", "PHOTOSHOP", "HLSL SHADERS"],
      features: [
        "Landscape Generation",
        "Shader Programming",
        "3D Import Custom Rendering",
        "Enemy AI",
        "Bird Companion",
      ],
      role: ["Programmer"],
      status: "COMPLETED",
      year: "2024",
      featured: false,
      youtubeId: "I1ZeAzWaclA",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fablefront-menu-y8Eani1LNvuxpyK2YpJkTSZPh7XIEg.webp",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fablefront-terrain1-RAeBLqZmKxZZkyK7YPmj1eRfkfZgAg.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fablefront-terrain2-nYn5Hnc0JcaO0DLTF5gz0C34tKCzVL.png",
      ],
      duration: "5 months",
    },
    {
      id: "embers-echo",
      title: "EMBER'S ECHO",
      subtitle: "Mystical Forest Adventure",
      shortDesc: "A story-driven adventure where Kai and his fox companion search for his missing sister.",
      description: "Ember's Echo is a mystical forest adventure focused on moral choices and puzzle-solving.",
      fullDescription:
        "In a mystical forest, Kai and his fox companion Ember search for his missing sister, Elara. Guided by riddles from magical creatures, players must solve puzzles and make moral choices that test their integrity. Will Kai sacrifice his values to save his sister, or stay true to his principles—even at great cost?",
      tech: ["UNREAL ENGINE 4", "BLENDER", "PHOTOSHOP", "GIT", "MIXAMO"],
      features: ["Puzzle", "Quest", "Item Exploration", "Enemy AI"],
      role: ["Programmer", "Level Designer", "Group Leader"],
      status: "COMPLETED",
      year: "2023",
      featured: false,
      youtubeId: "obT_6tPjKNI",
      itchioUrl: "https://paradox-gameworks.itch.io/embers-echo",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ember-menu-LfRtiK3HiuCotgwYl32ZWTiTIrsWxw.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ember-gameplay-uAUowu7ORfURew1CgleqtSBkhRyVko.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ember-fox-nsbnm1UF8JXRHqeEV9WVCB6LlxbEfi.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ember-village-uKLkdCThsLLB554PJDBMPxAKOvfuQf.png",
      ],
      duration: "4 months",
    },
  ]

  useEffect(() => {
    // Show splash screen on first load
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash")
    if (hasSeenSplash) {
      setShowSplash(false)
    }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    sessionStorage.setItem("hasSeenSplash", "true")
  }

  const navigateToProject = (projectId: string) => {
    setIsLoading(true)
    setTimeout(() => {
      const project = projects.find((p) => p.id === projectId)
      setSelectedProject(project)
      setCurrentPage("PROJECT_DETAIL")
      setSelectedImage(0)
      setIsLoading(false)
    }, 1500)
  }

  const navigateToPage = (page: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentPage(page)
      setSelectedProject(null)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <SplashScreen isVisible={showSplash} onComplete={handleSplashComplete} />
      <LoadingScreen isVisible={isLoading} />

      {/* Navigation */}
      <nav className="relative z-50 bg-black/40 backdrop-blur-sm border-b-2 border-red-500">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigateToPage("ABOUT")}
                className="text-2xl font-bold text-red-500 transform -skew-x-12 hover:scale-105 transition-transform"
              >
                JOSHUA
              </button>
            </div>
            <div className="flex space-x-0">
              {["ABOUT", "PROJECTS", "CONTACT"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => navigateToPage(tab)}
                  className={`px-6 py-3 font-bold text-sm transform transition-all duration-300 ${
                    currentPage === tab
                      ? "bg-red-500 text-black -skew-x-12 scale-105"
                      : "text-white hover:text-red-500 hover:-skew-x-6"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* About Page */}
      {currentPage === "ABOUT" && (
        <div className="relative min-h-screen">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/josh-background.png')",
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <section className="relative min-h-screen flex items-center justify-center py-20">
            <div className="relative z-20 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-red-500/30 shadow-2xl shadow-red-500/20">
                <div className="space-y-6">
                  <div className="text-red-500 font-bold text-lg transform -skew-x-12 inline-block">GAME DEVELOPER</div>
                  <h1 className="text-5xl md:text-7xl font-black leading-tight">
                    JOSHUA
                    <span className="block text-red-500 transform skew-x-12 mt-2">FERNANDES</span>
                  </h1>
                  <div className="text-lg text-gray-200 leading-relaxed">
                    I'm a recent Computer Games Development graduate from the University of Westminster, passionate
                    about building immersive and interactive experiences. I love combining creativity and code to craft
                    engaging gameplay and memorable stories.
                  </div>
                  <div className="text-lg text-gray-200 leading-relaxed">
                    Skilled in Unreal Engine, Unity, C++, and Blueprints, I've worked on team projects and game jams
                    focused on gameplay systems, level design, and storytelling.
                  </div>
                  <div className="text-lg text-gray-200 leading-relaxed">
                    I'm now ready to grow with a creative team and contribute to meaningful, player-first games.
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    onClick={() => navigateToPage("PROJECTS")}
                    className="bg-red-500 hover:bg-red-600 text-black font-bold px-8 py-3 transform -skew-x-12 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30"
                  >
                    VIEW MY GAMES
                  </Button>
                  <Button
                    onClick={() => navigateToPage("CONTACT")}
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold px-8 py-3 transition-all duration-300 bg-black/20 backdrop-blur-sm"
                  >
                    GET IN TOUCH
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="relative z-20 bg-gradient-to-br from-red-500/20 to-black/50 backdrop-blur-sm border-2 border-red-500/40 p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 rounded-lg shadow-2xl shadow-red-500/30">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-image-yBKgEMux2A5n3UZeOtGScZ62SB3eyI.png"
                      alt="Joshua Fernandes Profile"
                      className="w-80 h-80 object-cover rounded-lg hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-red-500/30 transform -rotate-3 border-2 border-red-500/60 rounded-lg shadow-xl"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Projects List Page */}
      {currentPage === "PROJECTS" && (
        <section className="py-20 min-h-screen relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 bg-black/15 backdrop-blur-sm p-8 rounded-lg border border-red-500/20">
              <h2 className="text-5xl font-black mb-4">
                MY <span className="text-red-500 transform skew-x-12 inline-block">GAMES</span>
              </h2>
              <div className="text-xl text-gray-300 mb-8">Projects showcasing my game development journey</div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 hover:scale-105 cursor-pointer bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-sm animate-fade-in ${
                    project.featured
                      ? "border-2 border-red-500 shadow-red-500/20 shadow-xl hover:shadow-red-500/40 hover:shadow-2xl"
                      : "border-2 border-gray-700 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20"
                  }`}
                  onClick={() => navigateToProject(project.id)}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-red-500 text-black px-3 py-1 text-xs font-bold transform -skew-x-12 z-10">
                      FEATURED
                    </div>
                  )}

                  <div className="absolute top-4 left-4 z-10">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        project.status === "COMPLETED"
                          ? "bg-green-400"
                          : project.status === "IN PROGRESS"
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                      }`}
                    ></div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="w-4 h-4 text-red-500" />
                          <div className="text-red-500 text-sm font-bold">{project.year}</div>
                          <div className="text-gray-500">•</div>
                          <div className="text-gray-400 text-sm">{project.status}</div>
                        </div>
                        <h3 className="text-3xl font-black mb-2 group-hover:text-red-500 transition-all duration-500 transform group-hover:scale-110 group-hover:-skew-x-3">
                          {project.title}
                        </h3>
                        <div className="text-red-400 font-medium mb-4 text-lg">{project.subtitle}</div>
                        <p className="text-gray-300 leading-relaxed">{project.shortDesc}</p>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-black/50 border border-red-500/50 text-red-400 text-xs font-bold transform -skew-x-6 hover:skew-x-0 hover:scale-110 transition-all duration-300 hover:bg-red-500/20 hover:border-red-400"
                            style={{ animationDelay: `${techIndex * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <Button className="bg-red-500 hover:bg-red-600 text-black font-bold flex items-center space-x-2 transform -skew-x-6 hover:skew-x-0 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50">
                          <span>VIEW DETAILS</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Detail Page */}
      {currentPage === "PROJECT_DETAIL" && selectedProject && (
        <section className="py-20 min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-red-900/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-r from-red-500/20 to-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-red-500/40 mb-8 shadow-lg shadow-red-500/10">
              <Button
                onClick={() => navigateToPage("PROJECTS")}
                variant="outline"
                className="border-red-400 text-red-400 hover:bg-red-500 hover:text-black font-bold transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                BACK TO PROJECTS
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {/* Project Header */}
                <div className="space-y-4 bg-gradient-to-r from-red-500/30 via-red-500/20 to-transparent p-8 border-l-4 border-red-400 backdrop-blur-sm rounded-xl shadow-lg shadow-red-500/10">
                  <div className="flex items-center space-x-4 mb-4">
                    <Calendar className="w-6 h-6 text-red-400" />
                    <div className="text-red-400 text-lg font-bold">{selectedProject.year}</div>
                    <div className="text-gray-400">•</div>
                    <div
                      className={`text-lg font-bold ${
                        selectedProject.status === "COMPLETED"
                          ? "text-green-400"
                          : selectedProject.status === "IN PROGRESS"
                            ? "text-yellow-400"
                            : "text-blue-400"
                      }`}
                    >
                      {selectedProject.status}
                    </div>
                  </div>
                  <h1 className="text-6xl font-black text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text transform -skew-x-3">
                    {selectedProject.title}
                  </h1>
                  <div className="text-3xl text-gray-200 font-medium">{selectedProject.subtitle}</div>
                </div>

                {/* Video Section */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-black border-2 border-red-400/60 overflow-hidden rounded-xl shadow-2xl shadow-red-500/20">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                    title={selectedProject.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 text-sm font-bold transform -skew-x-3 rounded shadow-lg">
                    GAMEPLAY VIDEO
                  </div>
                </div>

                {/* Additional Videos for Raven's Lament */}
                {selectedProject.youtubeVideos && (
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-red-400 flex items-center bg-gradient-to-r from-gray-800/80 to-black/60 backdrop-blur-sm p-6 rounded-xl border border-red-400/30 shadow-lg">
                      <Play className="w-8 h-8 mr-4" />
                      ADDITIONAL VIDEOS
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedProject.youtubeVideos.slice(1).map((video, index) => (
                        <div
                          key={index}
                          className="relative aspect-video bg-gradient-to-br from-gray-800 to-black border-2 border-red-400/40 overflow-hidden rounded-xl shadow-lg shadow-red-500/10"
                        >
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            className="w-full h-full"
                            allowFullScreen
                          />
                          <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500/90 to-red-600/90 text-white px-3 py-1 text-xs font-bold rounded shadow-lg">
                            {video.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* About Project */}
                <div className="space-y-6 bg-gradient-to-br from-gray-800/60 to-black/80 backdrop-blur-sm p-8 border border-red-400/30 rounded-xl shadow-lg shadow-red-500/10">
                  <h3 className="text-3xl font-bold text-red-400 flex items-center">
                    <span className="w-2 h-8 bg-red-500 mr-4 rounded"></span>
                    ABOUT THIS PROJECT
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-xl">{selectedProject.description}</p>
                  <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.fullDescription}</p>
                </div>

                {/* Gameplay Features */}
                {selectedProject.features && (
                  <div className="space-y-6 bg-gradient-to-br from-red-500/20 to-black/80 backdrop-blur-sm p-8 border border-red-400/40 rounded-xl shadow-lg shadow-red-500/10">
                    <h3 className="text-2xl font-bold text-red-400 flex items-center">
                      <span className="w-2 h-6 bg-red-500 mr-4 rounded"></span>
                      GAMEPLAY FEATURES
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedProject.features.map((feature, index) => (
                        <div
                          key={index}
                          className="px-6 py-4 bg-gradient-to-r from-red-500/30 to-red-600/20 border border-red-400/50 text-red-200 text-sm font-bold text-center transform -skew-x-2 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Screenshots */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-red-400 flex items-center bg-gradient-to-r from-gray-800/80 to-black/60 backdrop-blur-sm p-6 rounded-xl border border-red-400/30 shadow-lg">
                    <ImageIcon className="w-8 h-8 mr-4" />
                    SCREENSHOTS
                  </h3>

                  <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-black border-2 border-red-400/60 overflow-hidden rounded-xl shadow-2xl shadow-red-500/20">
                    <img
                      src={selectedProject.images[selectedImage] || "/placeholder.svg"}
                      alt={`${selectedProject.title} Screenshot ${selectedImage + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-gradient-to-r from-black/90 to-gray-900/90 text-white px-4 py-2 text-sm rounded-lg backdrop-blur-sm">
                      {selectedImage + 1} / {selectedProject.images.length}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-video border-2 overflow-hidden transition-all rounded-lg shadow-lg ${
                          selectedImage === index
                            ? "border-red-400 scale-105 shadow-red-500/30"
                            : "border-gray-600 hover:border-red-400/70 hover:scale-102"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Info */}
                <Card className="bg-gradient-to-br from-red-500/25 to-black/70 backdrop-blur-sm border-2 border-red-400/50 shadow-xl shadow-red-500/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                      <span className="w-2 h-6 bg-red-500 mr-3 rounded"></span>
                      PROJECT INFO
                    </h3>
                    <div className="space-y-4 text-base">
                      <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                        <span className="text-gray-300 font-medium">DURATION:</span>
                        <span className="text-white font-bold">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                        <span className="text-gray-300 font-medium">STATUS:</span>
                        <span
                          className={`font-bold ${
                            selectedProject.status === "COMPLETED"
                              ? "text-green-400"
                              : selectedProject.status === "IN PROGRESS"
                                ? "text-yellow-400"
                                : "text-blue-400"
                          }`}
                        >
                          {selectedProject.status}
                        </span>
                      </div>
                      {selectedProject.role && (
                        <div className="p-3 bg-black/30 rounded-lg">
                          <div className="text-gray-300 font-medium mb-3">MY ROLE:</div>
                          {selectedProject.role.map((role, index) => (
                            <div key={index} className="text-white font-medium mb-1 flex items-center">
                              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                              {role}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="space-y-4">
                  {selectedProject.itchioUrl && (
                    <Button
                      onClick={() => window.open(selectedProject.itchioUrl, "_blank")}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 text-lg shadow-lg shadow-orange-500/30 transform hover:scale-105 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 0v1.5l1.5 1.5v3l-1.5 1.5v1.5l1.5 1.5v3l-1.5 1.5v1.5l1.5 1.5v3l-1.5 1.5V24h18v-1.5l-1.5-1.5v-3l1.5-1.5v-1.5l-1.5-1.5v-3l1.5-1.5v-1.5l-1.5-1.5v-3l1.5-1.5V0H3zm9 4.5c3.75 0 6.75 1.5 6.75 3.75S15.75 12 12 12s-6.75-1.5-6.75-3.75V6zm0 9c3.75 0 6.75 1.5 6.75 3.75S15.75 18 12 18s-6.75-1.5-6.75-3.75v-3z" />
                      </svg>
                      PLAY ON ITCH.IO
                    </Button>
                  )}
                </div>

                {/* Tools & Technologies */}
                <Card className="bg-gradient-to-br from-gray-800/60 to-black/80 backdrop-blur-sm border-2 border-gray-600/50 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                      <span className="w-2 h-6 bg-red-500 mr-3 rounded"></span>
                      TOOLS & TECH
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.tech.map((tech, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 bg-gradient-to-r from-red-500/20 to-red-600/10 border border-red-400/40 text-red-200 text-sm font-bold transform -skew-x-2 text-center rounded-lg hover:scale-105 transition-all duration-300 shadow-md"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Page */}
      {currentPage === "CONTACT" && (
        <section className="py-20 min-h-screen relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 bg-black/15 backdrop-blur-sm p-8 rounded-lg border border-red-500/20">
              <h2 className="text-5xl font-black mb-4">
                GET IN <span className="text-red-500 transform -skew-x-12 inline-block">TOUCH</span>
              </h2>
              <div className="text-xl text-gray-300">Let's connect and talk about games!</div>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <div className="space-y-8">
                {/* Email */}
                <Card className="bg-gradient-to-br from-red-500/15 to-black/30 backdrop-blur-sm border-2 border-red-500 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Mail className="w-8 h-8 text-red-500" />
                      <div>
                        <div className="font-bold text-lg text-red-400">EMAIL</div>
                        <a
                          href="mailto:Joshfernandes28@gmail.com"
                          className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                        >
                          Joshfernandes28@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* LinkedIn */}
                <Card className="bg-gradient-to-br from-blue-500/15 to-black/30 backdrop-blur-sm border-2 border-blue-500 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Linkedin className="w-8 h-8 text-blue-500" />
                      <div>
                        <div className="font-bold text-lg text-blue-400">LINKEDIN</div>
                        <a
                          href="https://www.linkedin.com/in/joshlinkdin/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                        >
                          linkedin.com/in/joshlinkdin
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="bg-gradient-to-br from-green-500/15 to-black/30 backdrop-blur-sm border-2 border-green-500 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <MapPin className="w-8 h-8 text-green-500" />
                      <div>
                        <div className="font-bold text-lg text-green-400">LOCATION</div>
                        <div className="text-gray-300">
                          2 Renfrew Rd
                          <br />
                          Hounslow TW4 7RN
                          <br />
                          London, UK
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Availability Status */}
                <div className="bg-gradient-to-r from-red-500/10 to-transparent p-6 border-l-4 border-red-500 backdrop-blur-sm rounded-lg">
                  <h4 className="font-bold text-lg mb-4 text-red-500">AVAILABILITY</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>STATUS:</span>
                      <span className="text-green-400 font-bold">OPEN TO OPPORTUNITIES</span>
                    </div>
                    <div className="flex justify-between">
                      <span>RESPONSE TIME:</span>
                      <span className="text-red-400 font-bold">{"< 24H"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PREFERRED CONTACT:</span>
                      <span className="text-gray-300">EMAIL / LINKEDIN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-black/50 backdrop-blur-sm border-t-2 border-red-500 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-gray-400">© 2024 JOSHUA FERNANDES - GAME DEVELOPER</div>
            <div className="text-red-500 font-bold transform -skew-x-12">CRAFTING EXPERIENCES</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
