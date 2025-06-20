import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="py-3">
        <Container>
          <h1>welcome to proshop</h1>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
