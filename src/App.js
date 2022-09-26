import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import {NotFound} from "./pages/notFound/NotFound"

function App() {
  return(
    <Routes>
    <Route index element={<Home />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="*" element={<Navigate to="404" replace />} />
  </Routes>
  ) ;
}

export default App;
