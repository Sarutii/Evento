import "./Style/App.css";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
// import ProductList from './Pages/Product/ProductList';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <script src="//code.tidio.co/jdvzasobeckqtalx8dic16cayopj4dcc.js" async></script>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
