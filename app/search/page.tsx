"use client";

import { useSearchParams } from "next/navigation";
import SearchPage from "./_components/SearchPage";

export default function SearchPageWrapper() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";

  return <SearchPage search={search} />;
}
