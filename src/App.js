import React from "react";
import BestFromFrames from "./components/bestfromframes/BestFromFrames.jsx";
import BestSiling from "./components/bestSilings/BestSiling.jsx";
import Blog from "./components/blog/Blog.jsx";
import CategoryMenu from "./components/categoryMenu/CategoryMenu.jsx";
import Container from "./components/Container.jsx";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import OurCostumers from "./components/ourcostumers/OurCostumers.jsx";
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
        <OurCostumers/>
        <Headline/>
        <Blog/>
      </Container>
    </div>
  );
}

export default App;
