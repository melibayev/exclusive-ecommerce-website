import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/index'
import HomeP from "./pages/home/HomeP";
import WishlistP from "./pages/wishlist/WishlistP";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeP />} />
          <Route path="/wishlist" element={<WishlistP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
