import { Route, Routes } from "react-router-dom";
import BlogPreviewCard from "./pages/Challenge1/blog-preview-card";
import Home from "./pages/Home/home-page";
import SubscriptionPage from "./pages/Challenge2/subscription-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-preview-card" element={<BlogPreviewCard />} />
        <Route path="/news-letter-subscription">
          <Route index element={<SubscriptionPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
