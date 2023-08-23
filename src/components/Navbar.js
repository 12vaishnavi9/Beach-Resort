import React,{Component,useState} from "react";
import logo from "../images/logo.svg"
import {FaAlignRight} from "react-icons/fa";//THIS ICON WILL BE SHOWED ON MOBILE SCREEN
import {Link} from "react-router-dom";


  const Navbar=()=>{
    const [presentState,setState]=useState(false);
    const handleToggle=(statee)=>{
        if(statee===false){
            setState(true);
        }
        else{
            setState(false);
        }
    }
    return(
        <>
            
     
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="Beach Resort" />
              </Link>

              {/* TOGGLE BUTTON */}
              <button type="button" className="nav-btn" onClick={()=>setState(!presentState)}>
                <FaAlignRight className="nav-icon"/>
              </button>
             </div>

             {/* NOW, IF isOpen STATE IS TRUE THEN SHOW THE DIFFERENT CLASS AND OTHERWISE DIFFERENT CLASS
             IF OPEN:- LINKS WILL BE SHOWN ELSE NOT */}
             <ul className={presentState ? "nav-links show-nav" : "nav-links"}>
             {/* show-nav:- BY DEFAULT HEIGH OF THESE ITEMS WILL BE 0 JISSE SHOW NA HO LEKIN JAB
             SHOW-NAV WALA HOGA TAB HEIGHT 100 HO JAYEGI MTLB MOBILE PE YE DIKHNE LGEGE JB TOGGLE KREGE */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
             </ul>
          </div>
        </nav>
        </>
    )
  }
export default Navbar;


// export default class Navbar extends Component {

//     state = {
//       isOpen: false
//     };
    
//     handleToggle = () => {
//         this.setState({ isOpen: !this.state.isOpen });
//       };
//     render() {
//       return (
//         <nav className="navbar">
//           <div className="nav-center">
//             <div className="nav-header">
//               <Link to="/">
//                 <img src={logo} alt="Beach Resort" />
//               </Link>

//               {/* TOGGLE BUTTON */}
//               <button type="button" className="nav-btn" onClick={(presentState)=>this.state.handleToggle}>
//                 <FaAlignRight className="nav-icon"/>
//               </button>
//              </div>

//              {/* NOW, IF isOpen STATE IS TRUE THEN SHOW THE DIFFERENT CLASS AND OTHERWISE DIFFERENT CLASS
//              IF OPEN:- LINKS WILL BE SHOWN ELSE NOT */}
//              <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
//              {/* show-nav:- BY DEFAULT HEIGH OF THESE ITEMS WILL BE 0 JISSE SHOW NA HO LEKIN JAB
//              SHOW-NAV WALA HOGA TAB HEIGHT 100 HO JAYEGI MTLB MOBILE PE YE DIKHNE LGEGE JB TOGGLE KREGE */}
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/rooms">Rooms</Link></li>
//              </ul>
//           </div>
//         </nav>
//       );
//     }
//   }