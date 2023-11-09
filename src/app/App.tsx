import { useCommentsContext } from "../utils/CommentsContext.ts";

export function App() {
  const { comments } = useCommentsContext();

  return <div>{JSON.stringify(comments)}</div>;
}
