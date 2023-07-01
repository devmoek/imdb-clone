"use client";
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = `/search/${search}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        className="w-full h-14 rounded-sm placeholder-gray-500 flex-1"
      />
      <button disabled={!search} type="submit" className="text-abmber-600 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
}
