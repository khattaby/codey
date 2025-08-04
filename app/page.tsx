"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome back, {session.user?.name}!
          </h1>
          <p className="text-gray-600 mb-6">
            You're successfully signed in to your Codey account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white-900 mb-4">
          Welcome to Codey
        </h1>
        <p className="text-gray-500">
          Please use the navigation above to sign in or create an account.
        </p>
      </div>
    </div>
  );
}
