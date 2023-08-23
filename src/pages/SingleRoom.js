import React,{Component} from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import Error from "./Error";
import StyledImg from "../components/Styledcomponent";

export default class SingleRoom extends Component{


    // ye constructor wali jo cheez hai isse mil kya raha? 
    // 1. history: length ,action :push and all
    // 2.loaction: pathname: jab hum features pe click krege toh url me /rooms ke sath /:slug define kiya hai humne 
    // ab jum hum click krege features pe tub /rooms/{slug} ayega jo bhi humara data me slug defined hoga 
    // toh is url /rooms/slug lene ke liye hum ye kr rhe or ye pathname me humara mil jayega.

    // 3.match: path:/rooms/:slug url: same as pathname above params: "slug" depends on features
    // 4.prototype:object
    constructor(props){//prop is being passed by react router
        super(props)
        //console.log(this.props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }

    //access the context:-
    static contextType=RoomContext;
    render(){
        const {getRoom}=this.context;
        const room=getRoom(this.state.slug);
        //  console.log(room);
        if(!room){
            return(
                <>
                <Hero>
                    <Banner title="404">
                        <Link to="/rooms" className="btn-primary">
                            Back To Rooms
                        </Link>
                    </Banner>
                    </Hero>
            </>
            )
        }

        return (
            <>
            <StyledImg img={room.images[0]}>
           <Banner title={`${room.name} room`}>
            <Link to="/rooms" className="btn-primary">Back to rooms</Link>
           </Banner>
           </StyledImg>

           <section className="single-room">
           <div className="single-room-images">
            {
                room.images.map((item,index)=>{
                    return(
                        <>
                            <img src={item} key={index} alt={item.name}></img>
                        </>
                    )
                })
            }
           </div>
           <div className="single-room-info">
            <article className="desc">
                <h3>Details</h3>
                <p>{room.description}</p>
            </article>
            <article className="info">
                <h3>Info</h3>
                <h6>Price : ${room.price}</h6>
                <h6>Size : {room.size} SQFT</h6>
                <h6>Max Capacity : {" "}
                {
                    room.capacity>1 ? `${room.capacity} people` : `${room.capacity} person`
                }
                 </h6>
                 <h6>{" "}
                 {
                    room.pets ? `Pets Allowed` : `No Pets Allowed`
                 }
                 </h6>
                 <h6>{" "}
                 {
                    room.breakfast ? `Free Breakfast Included` : ``
                 }
                 </h6>
            </article>
           </div>
           </section>

           <section className="room-extras">
           <h6>Extras</h6>
            <ul className="extras">
            {
            room.extras.map((item,index)=>{
                return(
                    <>
                        <li key={index}>- {item}</li>
                    </>
                )
            })
           }
            </ul>
           </section>
            </>
        )
    }
}
