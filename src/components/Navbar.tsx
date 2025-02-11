"use client"

import Link from "next/link"
import { useStore } from "@/store/useStore"
import { useEffect, useState } from "react"
import { LayoutList, Moon, Sun } from "lucide-react"

export default function Header() {
  const { theme, setTheme, searchTerm, setSearchTerm } = useStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      
        <Link href="/" className="flex items-center text-2xl font-bold text-gray-800 dark:text-white">
        <LayoutList className="mr-2" />Blog Listing App
        </Link>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 text-gray-900 border rounded-md dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </header>
  )
}

