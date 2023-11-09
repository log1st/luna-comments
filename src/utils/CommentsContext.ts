import { createContext, useContext } from "react";
import { Comment } from "./Comment.ts";

export type CommentsContextState = {
  comments: Array<Comment>;
  addComment(comment: Omit<Comment, "id" | "rated" | "rate">): void;
  rateComment(comment: Comment, positive: boolean): void;
};

export const CommentsContext = createContext<CommentsContextState>({
  comments: [],
  addComment: () => {},
  rateComment: () => {},
});

export const useCommentsContext = () => useContext(CommentsContext);
