import React from "react";
import BestSiling from "./components/bestSilings/BestSiling.jsx";
import CategoryMenu from "./components/categoryMenu/CategoryMenu.jsx";
import Container from "./components/Container.jsx";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Menu />
        <CategoryMenu/>
        <BestSiling/>
      </Container>
    </div>
  );
}

export default App;
