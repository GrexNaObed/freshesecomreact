import React from 'react'
import { Header, Menu, CategoryMenu, BestSiling, BestFromFrames, OurCostumers, Headline, Blog, Footer, Container } from "../imports/importComponets"
function HomePage() {
    return (
        <Container>
            <Header />
            <Menu />
            <CategoryMenu />
            <BestSiling />
            <BestFromFrames />
            <OurCostumers />
            <Headline />
            <Blog />
            <Footer />
        </Container>
    )
}

export default HomePage
