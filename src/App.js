import { useRoutes } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GlobalStyle from "./globalStyles";
import Home from "./views/Home/Home";

const routes = [{ path: "/", element: <Home /> }];


const App = () => {
 
  const element = useRoutes(routes);
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{element}</main>
      <Footer />
    </>
  );
};

export default App;
