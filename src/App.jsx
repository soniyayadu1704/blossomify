import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import CreateBouquet from "./pages/CreateBouquet";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/create-bouquet"
          element={<CreateBouquet />}
        />
      </Routes>
    </BrowserRouter>
  );
}