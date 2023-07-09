import React from 'react'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>
      <p>
        This project uses{" "}
        <a
          className="text-blue-600 visited:text-purple-600"
          href="https://www.themoviedb.org/"
          target='_blank'
        >
          TMDB
        </a>{" "}
        API to fetch movies.{" "}
      </p>
    </div>
  );
}
