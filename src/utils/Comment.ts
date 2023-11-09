export type Comment = {
  id: number;
  sender: string;
  message: string;
  rate: number;
  parent: number | null;
  rated: boolean | null;
};
