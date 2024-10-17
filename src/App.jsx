import AtHema from "./components/AtHema";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/header";
import Holiday from "./components/Holiday";
import Living from "./components/Living";
import MoreHema from "./components/MoreHema";
import Navbar from "./components/Navbar";
import NiceExtra from "./components/NiceExtra";
import Sale from "./components/Sale";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Categories />
      <Living />
      <Sale />
      <Holiday />
      <NiceExtra />
      <AtHema />
      <MoreHema />
      <Footer />
    </div>
  );
};

export default App;
