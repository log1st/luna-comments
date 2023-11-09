import { Comment } from "./Comment.ts";

export function generateComments(length = 128): Array<Comment> {
  return Array.from({
    length,
  })
    .map((_, i) => ({
      id: i + 1,
      sender: (Math.random() + 1).toString(36).substring(7),
      message: (Math.random() + 1).toString(36).substring(7),
      parent:
        Math.random() > 0.7 ? Math.floor(Math.random() * i) + 1 || null : null,
      rate: Math.floor(Math.random() * 100) + 1,
      rated: null,
    }))
    .toSorted(() => (Math.random() > 0.5 ? 1 : -1));
}
