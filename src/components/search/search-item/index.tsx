import { memo, useMemo } from "react";
import { Hit } from "../../../types/response";
import styles from "./search-item.module.css";
import dayjs from "dayjs";
import { Typography } from "@mui/material";
import clsx from "clsx";

const DATE_FORMAT = "MMM D, YYYY";

interface SearchItemProps {
  hit: Hit;
}

export const SearchItem = memo<SearchItemProps>(({ hit }) => {
  const title = useMemo(() => hit.title, [hit]);
  const content = useMemo(
    () =>
      `${hit.points} points by ${hit.author} on ${dayjs(hit.created_at).format(
        DATE_FORMAT
      )} | ${hit.num_comments} comments`,
    [hit]
  );

  return (
    <div className={styles.search__searchItemWrapper}>
      {!title || title.length === 0 ? (
        <Typography
          className={clsx(
            styles.search__searchItem__title,
            styles.search__searchItem__untitled
          )}
          variant="body1"
        >
          {"<Untitled>"}
        </Typography>
      ) : (
        <Typography
          className={styles.search__searchItem__title}
          variant="body1"
        >
          {title}
        </Typography>
      )}

      <Typography
        className={styles.search__searchItem__content}
        variant="caption"
      >
        {content}
      </Typography>
    </div>
  );
});
