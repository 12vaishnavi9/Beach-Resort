import React, { Component } from "react";
import Loading from "./Loading";
import Title from "./Title";
import { RoomContext } from "../Context";
import Room from "./Room";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let {featuredRooms: rooms,loading } = this.context;
    // console.log(rooms);
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
        {
          loading ? <Loading/> : <Room featuredRooms={rooms}/>
        }
        {/* <Room featuredRooms={rooms}/> */}
        </div>
      </section>
    );
  }
}
