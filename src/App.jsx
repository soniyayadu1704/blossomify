import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import FlowerViewer from "./components/FlowerViewer";
import Products from "./components/Products";
import Footer from "./components/Footer";

import CreateBouquet from "./pages/CreateBouquet";

function HomePage() {
  return (
    <>
      <Header />
      <FlowerViewer />
      <Products />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/create-bouquet"
          element={<CreateBouquet />}
        />
      </Routes>
    </BrowserRouter>
  );
}