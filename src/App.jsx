import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import News from "./pages/News";
import Learn from "./pages/Learn";
import CryptoTracker from "./pages/CryptoTracker";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/crypto-tracker" element={<CryptoTracker />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
