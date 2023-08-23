import React, { Component } from "react";
import { RoomContext } from "../Context";
import Room from "./Room";
import Title from "./Title";
import RoomsFilter from "./RoomsFilter";

export default class RoomsConatiner extends Component {
  static contextType = RoomContext;

  render() {
    let {sortedRooms: sortedroomsdata,rooms } = this.context;
    // console.log(sortedroomsdata);
    return (
        <>
        <br></br>
        <br></br>
        <Title title="search rooms"/>
        <RoomsFilter rooms={rooms}/>
 <div className="roomslist">
        <div className="roomslist-center">
        <Room featuredRooms={sortedroomsdata}/>
        </div>
     </div>
        </>
    );
  }
}







// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import { RoomConsumer } from "../Context";
// import Room from "./Room";


// const RoomsContainer=()=>{
//     return(
//         <RoomConsumer>
//             {
//                 value=>{
//                     const{sortedRooms,rooms}=value;
                    
//                     {/* console.log(value);//isme hmare Context.js me jitne bhi state pass kiye woh sab data hoga */}
//                     //jaise featured rooms , sorted rooms etc
//                     return(
//                         <>
//             <h1>hello</h1>
//             {/* <RoomsFilter rooms={rooms}/> */}
//             <section className="roomslist">
      
//         {
//           sortedRooms.map((currele)=>(
//             <Room room={currele}/>
//           ))
//         }
//         <div className="roomlist-center">
       
//       </div>
//     </section>
//         </>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }


// const RoomsContainer
// export default RoomsContainer;