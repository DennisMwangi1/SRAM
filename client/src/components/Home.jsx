import React, { useState } from "react";
import ImgCarousel from "./carousel/ImgCarousel";
import Destinations from "./destinations/Destinations";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Membership from "./membership/membership";
import Navbar from "./navbar/Navbar";
import Search from "./search/Search";
import Selects from "./selects/Selects";

function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <>
            <Navbar openModal={openModal} />
            <Membership modalIsOpen={modalIsOpen} closeModal={closeModal} />
            <Hero />
            <Destinations />
            <Search />
            <Selects />
            <ImgCarousel />
            <Footer />
        </>
    )
}

export default Home