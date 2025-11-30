import styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  resultsPerPage: number;
  totalResults: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

type PageItem = number | "...";

const getPages = (currentPage: number, totalPages: number): PageItem[] => {
  if (totalPages <= 1) return [1];

  const pages: PageItem[] = [];

  const first = 1;
  const last = totalPages;

  const prev = currentPage - 1;
  const next = currentPage + 1;

  pages.push(first);

  if (prev > first + 1) pages.push("...");

  if (prev > first) pages.push(prev);

  if (currentPage !== first && currentPage !== last) pages.push(currentPage);

  if (next < last) pages.push(next);
  if (next < last - 1) pages.push("...");

  pages.push(last);

  return pages;
};

export default function Pagination({
  page,
  totalPages,
  onNext,
  onPrev,
  resultsPerPage,
  totalResults,
  setCurrentPage,
  currentPage,
}: PaginationProps) {
  //   let pages = [];
  //   for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
  //     pages.push(i);
  //   }

  const pages = getPages(page, totalPages);

  return (
    <div className={styles.pagination}>
      <button disabled={page === 1} onClick={onPrev}>
        Prev
      </button>

      {pages.map((p, index) =>
        p === "..." ? (
          <span key={index}>...</span>
        ) : (
          <button
            className={p === currentPage ? styles.active : ""}
            key={index}
            onClick={() => setCurrentPage(p)}
          >
            {p}
          </button>
        )
      )}

      <button disabled={page === totalPages} onClick={onNext}>
        Next
      </button>
    </div>
  );
}
