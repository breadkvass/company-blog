import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Navigate
} from "react-router-dom";
import PostsPage from "./pages/postsPage/PostsPage";
import PostPage from "./pages/postPage/PostPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to={"/posts"} />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostPage />} />
    </Route>
  )
);

export default router;