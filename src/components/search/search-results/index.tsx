import { useEffect, useMemo, useRef, memo } from "react";
import { SearchItem } from "../search-item";
import { SearchItemSkeleton } from "../search-item-skeleton";
import { Button } from "@mui/material";
import styles from "./search-results.module.css";

import useSWRInfinite from "swr/infinite";
// import useInfiniteScroll from "react-infinite-scroll-hook";
import { Hit, Response } from "../../../types/response";
import { fetcher } from "../../../api/fetcher";

const getKey = (
  pageIndex: number,
  previousPageData: any,
  searchValue: string
) => {
  if (previousPageData && !previousPageData.hits.length) return null; // reached the end
  if (searchValue === "") return null;
  return `search?page=${pageIndex}&query=${searchValue}`; // SWR key
};

interface SearchResultProps {
  searchValue: string;
}

export const SearchResult = memo<SearchResultProps>(({ searchValue }) => {
  // -----SWR Infinite-----

  const totalResultPageRef = useRef<number>(0);

  const {
    data: pagedResult,
    isValidating,
    size,
    setSize,
    error,
  } = useSWRInfinite<Response, any>(
    (pageIndex, previousPageData) =>
      getKey(pageIndex, previousPageData, searchValue),
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
    }
  );

  useEffect(() => {
    if (pagedResult) {
      totalResultPageRef.current =
        pagedResult[pagedResult.length - 1]?.nbPages ?? 0;
    }
  }, [pagedResult]);

  const hasNextPage = useMemo(
    () => size !== totalResultPageRef.current,
    [size]
  );

  const onLoadMore = () => {
    setSize(size + 1);
  };

  // If you want infinite scroll:

  //   const [resultLoadingRef] = useInfiniteScroll({
  //     loading: isValidating,
  //     disabled: !!error,
  //     onLoadMore,
  //     hasNextPage,
  //   });

  const results = useMemo(
    () =>
      pagedResult
        ? pagedResult.reduce((arr: Hit[], curr) => [...arr, ...curr.hits], [])
        : [],
    [pagedResult]
  );

  // -----SWR Infinite-----

  if (error) return "Oops! Something wrong...";

  return (
    <div className={styles.search__searchResults__wrapper}>
      {results.map((hit) => (
        <SearchItem key={hit.objectID} hit={hit} />
      ))}
      {isValidating &&
        Array(10)
          .fill(0)
          .map((_, index) => <SearchItemSkeleton key={index} />)}
      {hasNextPage && results.length !== 0 && (
        <Button onClick={onLoadMore}>Load More...</Button>
      )}
      {/* {(isValidating || hasNextPage) && (
        <div style={{ height: 1 }} ref={resultLoadingRef}></div>
      )} */}
    </div>
  );
});
