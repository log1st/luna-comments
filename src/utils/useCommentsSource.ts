import { useCallback, useEffect, useState } from "react";
import { Comment } from "./Comment.ts";
import { fetchComments } from "./fetchComments.ts";
import { CommentsContextState } from "./CommentsContext.ts";

export const useCommentsSource = () => {
  const [comments, setComments] = useState<Array<Comment>>([]);

  useEffect(() => {
    if (comments.length) {
      return;
    }
    fetchComments(
      // if true, comments will be fresh generated
      false,
      // otherwise preset will be used
    ).then((newComments) => {
      setComments(newComments);
    });
  }, [comments.length]);

  const rateComment = useCallback<CommentsContextState["rateComment"]>(
    (comment, positive) => {
      if (!positive && !comment.rate) {
        return;
      }
      if (comment.rated === positive) {
        return;
      }

      setComments((oldComments) =>
        [...oldComments].map((c) =>
          c.id === comment.id
            ? {
                ...c,
                rate: Math.max(c.rate + (positive ? 1 : -1), 0),
                rated:
                  c.rated !== null
                    ? positive === c.rated
                      ? positive
                      : null
                    : positive,
              }
            : c,
        ),
      );
    },
    [setComments],
  );

  const addComment = useCallback<CommentsContextState["addComment"]>(
    (newComment) => {
      setComments((oldComments) =>
        [...oldComments].concat({
          ...newComment,
          id: Math.floor(Math.random() * 10000000000) + oldComments.length + 1,
          rate: 0,
          rated: null,
        }),
      );
    },
    [setComments],
  );

  return {
    comments,
    rateComment,
    addComment,
  } as CommentsContextState;
};
