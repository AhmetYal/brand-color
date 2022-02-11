import Content from "./component/Content";
import SideBar from "./component/SideBar";
import MainContext from "./MainContext";
import { useEffect, useState } from "react";
import BrandsData from "./brands.json";
import Copied from "./component/Copied";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Collection from "./component/Collection";
import { forceCheck } from "react-lazyload";

function App() {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) => brand.title.toLowerCase().includes(search))
    );
  }, [search, brandsArray]);

  useEffect(() => {
    forceCheck();
  }, [brands]);

  return (
    <div>
      <MainContext.Provider value={data}>
        <BrowserRouter>
          {copied && <Copied color={copied} />}
          <SideBar />
          <Routes>
            <Route path="/" exact element={<Content />}></Route>
            <Route path="/collection/:slugs" element={<Collection />}></Route>
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
