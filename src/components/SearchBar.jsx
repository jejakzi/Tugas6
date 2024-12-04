import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ query, setQuery }) => (
  <div className="flex flex-col">
    <div className="flex items-center w-full max-w-sm gap-4 px-6 py-2 my-8 bg-transparent border rounded-full outline-none border-white/20">
      <IoSearchOutline className="text-lg" />
      <input
        type="text"
        placeholder="Temukan Film..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full font-light tracking-wide bg-transparent border-none outline-none"
      />
    </div>
    {query.length < 3 && query.length > 0 && (
      <p className="ml-2 text-xs text-red-500 -mt-[24px] mb-6">
        * Masukan minimal 3 karakter
      </p>
    )}
  </div>
);

export default SearchBar;
