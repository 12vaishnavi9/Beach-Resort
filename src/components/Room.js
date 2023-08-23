import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
const Room = ({featuredRooms})=> {
  // console.log(name);
  return (
    <>
        {
            featuredRooms.map((currele)=>{
                return(
                    <article className="room">
      <div className="img-container">
        <img src={currele.images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${currele.price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${currele.slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{currele.name}</p>
    </article>          
                )
            })
        }
    </>
   
  );
};


export default Room;
