import { Comment } from "./Comment.ts";
import { generateComments } from "./generateComments.ts";
import { getGeneratedComments } from "./getGeneratedComments.ts";

export async function fetchComments(generate = false): Promise<Array<Comment>> {
  if (generate) {
    return generateComments();
  }

  return getGeneratedComments();
}
