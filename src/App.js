import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/index'
import HomeP from "./pages/home/HomeP";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
