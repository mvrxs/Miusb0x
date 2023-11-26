import React, { useState } from "react";
import { connectToDatabase } from "@/lib/db";
import SearchPage from "@/pages/searchPage.astro";

const SearchPageScript = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (term) => {
    setSearchQuery(term);

    try {
      const db = await connectToDatabase();
      const songsCollection = db.collection("songs");

      const results = await songsCollection
        .find({ title: { $regex: new RegExp(term, "i") } })
        .toArray();
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SearchPage
      searchQuery={searchQuery}
      onSearch={handleSearch}
      searchResults={searchResults}
    />
  );
};

export default SearchPageScript;
