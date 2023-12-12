import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/index'
import Loader from "./components/loader/Loader";
import { Wrapper } from "./components/wrapper";
import AboutP from "./pages/about/AboutP";
import CartP from "./pages/cart/CartP";
import ContactP from "./pages/contact/ContactP";
import HomeP from "./pages/home/HomeP";
import LoginP from "./pages/login/LoginP";
import SignUpP from "./pages/signUp/SignUpP";
import WishlistP from "./pages/wishlist/WishlistP";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <BrowserRouter>
    <Wrapper />
      <Routes>
        <Route element={<Layout />}>
          {isLoading ? 
          <Route index element={<Loader />} />
          : 
          <Route index element={<HomeP />} />}
          <Route path="wishlist" element={<WishlistP />} />
          <Route path="cart" element={<CartP />} />
          <Route path="sign-up" element={<SignUpP />}/>
          <Route path="login" element={<LoginP />}/>
          <Route path="about" element={<AboutP />}/>
          <Route path="contact" element={<ContactP />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
