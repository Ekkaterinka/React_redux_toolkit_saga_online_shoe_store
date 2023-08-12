import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import Index from "./components/Index";
import Catalog from "./components/Catalog";
import Contacts from "./components/Contacts";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Banner from "./components/Banner";
import './App.css';
import store from "./redux/store";
function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <main className="container">
          <Banner />
          <Routes>
            <Route path="/" element={<Index />} />
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
