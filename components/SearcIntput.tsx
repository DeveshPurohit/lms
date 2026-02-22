"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDebounce } from "@/hooks/use-debounce";

const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("topic") || "";

  const [searchQuery, setSearchQuery] = useState(query || "");
  const debouceQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
      if (debouceQuery) {
        if(searchParams.has("subject")){
            const subject = searchParams.get("subject");
            router.push(`?subject=${subject}&topic=${debouceQuery}`, { scroll: false });
            return;
        }
        else router.push(`?topic=${debouceQuery}`, { scroll: false }); 
      } else {
        if(searchParams.has("subject")){
            const subject = searchParams.get("subject");
            router.push(`?subject=${subject}`, { scroll: false });
            return;
        }
        else{
            router.push(pathname, { scroll: false });
      }}
  }, [debouceQuery]);

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image src="/icons/search.svg" alt="search" width={15} height={15} />
      <input
        placeholder="Search companions..."
        className="outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
