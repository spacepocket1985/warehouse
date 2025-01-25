export const checkPageNum = (pageParam: number, totalPages: number): number => {
  const page = pageParam <= totalPages ? pageParam : 1;
  return page;
};
