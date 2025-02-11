"use client"

import Link from "next/link"
import { useStore } from "@/store/useStore"

interface BlogPost {
  id: number
  title: string
  body: string
  userId: number
}

interface User {
  id: number
  name: string
  avatar?: string
}

interface BlogListProps {
  initialPosts: BlogPost[]
  users: User[]
}

export default function BlogList({ initialPosts, users }: BlogListProps) {
  const { searchTerm } = useStore()

  const filteredPosts = initialPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {filteredPosts.map((post) => {
        const author = users.find((user) => user.id === post.userId)

        return (
            <div key={post.id} className="flex flex-col p-5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg dark:rounded-lg shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1">
              

              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {post.title}
              </h2>
              
              <div className="flex items-center mb-3 italic">
                
                <Link href={`/author/${author?.id}`}>
                <p className="text-sm font-i font-semibold text-blue-700 dark:text-blue-700">
                  {author ? author.name : "Unknown Author"}
                </p>
                </Link>
                
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {post.body}
              </p>

              
            </div>
        
        )
      })}
    </div>
  )
}
