import React from "react";
import BestFromFrames from "./components/bestfromframes/BestFromFrames.jsx";
import BestSiling from "./components/bestSilings/BestSiling.jsx";
import CategoryMenu from "./components/categoryMenu/CategoryMenu.jsx";
import Container from "./components/Container.jsx";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Headline from "./components/sectionHeadline/Headline.jsx";


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Menu />
        <CategoryMenu/>
        <BestSiling/>
        <BestFromFrames/>
        <Headline/>
      </Container>
    </div>
  );
}

export default App;
