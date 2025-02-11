import { getUsers } from "@/app/actions/users"
import { Mail, Phone, Globe, MapPin, Building } from "lucide-react"

interface Params {
    id: string
  }
export default async function AuthorPage({ params }: { params: Params }) {
    console.log(params)

    
  const users = await getUsers()
  const author = users.find((user: { id: number }) => user.id === parseInt(params.id))

  if (!author) {
    return <div className="text-center text-gray-600">Author not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            {author.name.charAt(0)}
          </span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{author.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">@{author.username}</p>
        </div>
      </div>

      <div className="space-y-4 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <Mail className="text-gray-600 dark:text-gray-400" size={18} />
          <p className="text-gray-800 dark:text-gray-300">{author.email}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="text-gray-600 dark:text-gray-400" size={18} />
          <p className="text-gray-800 dark:text-gray-300">{author.phone}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Globe className="text-gray-600 dark:text-gray-400" size={18} />
          <a href={`https://${author.website}`} target="_blank" className="text-blue-600 hover:underline">
            {author.website}
          </a>
        </div>
      </div>

      {/* <div className="mt-6 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
        <h2 className="text-lg text-gray-700 font-semibold flex items-center space-x-2">
          <MapPin className="text-gray-600 dark:text-gray-400" size={18} />
          <span>Address</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{author.address.street}, {author.address.suite}</p>
        <p className="text-gray-700 dark:text-gray-300">{author.address.city}, {author.address.zipcode}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Geo: {author.address.geo.lat}, {author.address.geo.lng}</p>
      </div> */}

      <div className="mt-6 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
        <h2 className="text-lg text-gray-700 font-semibold flex items-center space-x-2">
          <Building className="text-gray-600 dark:text-gray-400" size={18} />
          <span>Company</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2"><strong>{author.company.name}</strong></p>
        <p className="text-gray-600 dark:text-gray-400 italic">{author.company.catchPhrase}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{author.company.bs}</p>
      </div>
    </div>
  )
}
