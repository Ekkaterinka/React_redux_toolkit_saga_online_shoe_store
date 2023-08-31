import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Banner from "./components/Banner";
import store from "./redux/store";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <main className="container">
          <Banner />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Сontacts" element={<Contacts />} />
            <Route path="/About" element={<About />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="/:id" element={<Products />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </Provider>
    </>
  )
}

export default App
