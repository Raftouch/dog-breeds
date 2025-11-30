import type { PageItem } from "../types/data";

export const getPages = (
  currentPage: number,
  totalPages: number
): PageItem[] => {
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
