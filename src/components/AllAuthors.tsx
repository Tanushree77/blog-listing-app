import React from 'react';

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface BlogUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface BlogUserProps {
  users: BlogUser[];
}

export default function AllAuthors({ users }: BlogUserProps) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Authors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center text-2xl font-bold rounded-full">
              {user.name.charAt(0)}
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">{user.company.name}</p>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-blue-500 hover:underline"
            >
              {user.website}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
