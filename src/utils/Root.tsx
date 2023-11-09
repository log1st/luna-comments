import { useCommentsSource } from "./useCommentsSource.ts";
import { CommentsContext } from "./CommentsContext.ts";
import { App } from "../app/App.tsx";

export function Root() {
  const state = useCommentsSource();

  return (
    <CommentsContext.Provider value={state}>
      <App />
    </CommentsContext.Provider>
  );
}
