import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Dishes from "./pages/dishes";
import Plans from "./pages/plans";
import Order from "./pages/order";
import About from "./pages/about";
import NoPage from "./pages/noPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dishes" element={<Dishes />} />
          <Route path="plans" element={<Plans />} />
          <Route path="order" element={<Order />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);