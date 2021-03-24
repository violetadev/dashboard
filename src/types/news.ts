export interface INews {
  response: {
    currentPage: number;
    pageSize: number;
    pages: number;
    results: unknown[];
    startIndex: number;
    status: string;
    total: number;
    userTier: string;
  };
}
