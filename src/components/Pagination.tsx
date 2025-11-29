import styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function Pagination({
  page,
  totalPages,
  onNext,
  onPrev,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <button disabled={page === 1} onClick={onPrev}>
        onPrev
      </button>
      <span>
        Page {page} / {totalPages}
      </span>
      <button disabled={page === totalPages} onClick={onNext}>
        onNext
      </button>
    </div>
  );
}
