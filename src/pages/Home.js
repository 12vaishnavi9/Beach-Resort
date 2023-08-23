import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import Featuredrooms from "../components/Featuredrooms";
import Context from "../Context";

const Home=()=>{
    return(
        <>
           <Hero>
            <Banner title="luxurious rooms" subtitle="Deluxe rooms starting at $299">
            <Link to="/rooms" className="btn-primary">
                Our rooms
            </Link>
            </Banner>
           </Hero>
           <Services/>
           <Featuredrooms/>
           
       </>
    )
}

export default Home;