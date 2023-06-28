import { Skeleton } from "@mui/material";
import styles from "./search-item-skeleton.module.css";

export const SearchItemSkeleton = function () {
  return (
    <div className={styles.search__searchItemSkeleton}>
      <Skeleton
        className={styles.search__searchItemSkeleton__title}
        height={50}
      />
      <Skeleton
        className={styles.search__searchItemSkeleton__content}
        height={35}
      />
    </div>
  );
};
