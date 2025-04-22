import {
  createRoutesFromElements,
  createBrowserRouter,
  Route
} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import SecondPage from "./pages/secondPage/SecondPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainPage />} />
      <Route path="/second" element={<SecondPage />} />
    </Route>
  )
);

export default router;