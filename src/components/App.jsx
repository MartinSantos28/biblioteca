import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Borrows from "../pages/Borrow";
import NotFound from "../pages/NotFound";
import Book from "../pages/Book"
import Borrower from "../pages/Borrower";
import UserContext from "../context/UserContext";

function App() {
  const [isLogued, setIsLogued] = useState(false)
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ isLogued, setIsLogued }}>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Borrow" element={<Borrows />} />
          <Route path="/Borrower" element={<Borrower />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );

}

export default App
