import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import AllBook from "./pages/AllBooks";
import EditBook from "./pages/UpdateBook";
import DeleteBook from "./pages/DeleteBook";
// import Header from "./components/Header";

const App = () => {
  return (
    <Routes>
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<AllBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
