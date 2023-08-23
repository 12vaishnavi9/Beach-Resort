import React from "react";

const Hero=({children,hero})=>{ //childer hogya banner ke liye  
    return(
        <>

        {/* HOME.JS */}
        <header className={hero}>{children}</header> 
        {/*  export default class Navbar extends Component  */}
        </>
    )
}
Hero.defaultProps={
    hero:"defaultHero"
}

export default Hero;