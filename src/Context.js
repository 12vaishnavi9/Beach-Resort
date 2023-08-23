import React ,{Component} from "react";
import items from "./data";
// import Client from "./Contentful";

const RoomContext=React.createContext();
export default class RoomProvider extends Component{
    state={
        rooms:[],//will store all the information about rooms
        sortedRooms:[], //reason:- when we will be filtering
        featuredRooms:[],//the rooms that will be displayed on the home (3 rooms)
        loading:true,// if it is loading then want to display spinner else items

        type:"all",//by default room type will be all (for roomfiltering)
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false//upto here these are default values
    };
    
    //getData :- will run when the component is going to mount or after the component is rendered
    // getData=async()=>{
    //     try{
    //         let response=await Client.getEntries({
    //             content_type:"beachResort"
    //         });
    //          let rooms=this.formatData(response.items)
    //         console.log(rooms);
            
    // //featuredrooms:-
    // let featuredRooms=rooms.filter(room=> room.featured===true);

    // //for roomfiltering:-
    // let maxPrice=Math.max(...rooms.map(item=>item.price));
    // let maxSize=Math.max(...rooms.map(item=>item.size));

    // this.setState({
        
    //     // sorted rooms me abhi hmne saare rooms daal diye
    //     rooms,featuredRooms,sortedRooms:rooms,loading:false
    //     ,maxPrice:maxPrice,maxSize:maxSize
    // });

    //     }catch(error){
    //         console.log(error);
    //     }
    // }
componentDidMount(){
   


    // FOR LOCAL DATA
    let rooms=this.formatData(items);//ab saara data destructure hoke rooms me aagya
    //  console.log(rooms);
    
    //featuredrooms:-
    let featuredRooms=rooms.filter(room=> room.featured===true);

    //for roomfiltering:-
    let maxPrice=Math.max(...rooms.map(item=>item.price));
    let maxSize=Math.max(...rooms.map(item=>item.size));

    this.setState({
        
        // sorted rooms me abhi hmne saare rooms daal diye
        rooms,featuredRooms,sortedRooms:rooms,loading:false
        ,price:maxPrice,maxPrice,maxSize 
    });
}

formatData(items){
    let tempItems=items.map(item=>{
        // chatGPT
       let id=item.sys.id
        let images=item.fields.images.map(image=>image.fields.file.url);
        let room={...item.fields,images,id}//fields me jitni bhi properties hai woh mil jayegi abh
       // adding images and id properties that are not present in fieldss
        return room;
    });
    return tempItems;
}


//FOR SINGLE ROOM:-
// getRoom func will take an argument slug and we are going to filter it and get that specefic room jo hum slug pass krege uske hisaab se(features)
getRoom=slug=>{
    let tempRooms=[...this.state.rooms];//going to be equal to rooms property. Spread operator:-array hoga toh values leni hai 
    const room=tempRooms.find(room=>room.slug===slug);
    return room;
}

// for input values
handleChange=event=>{
   const target=event.target;
   const value=target.type==="checkbox" ? target.checked:target.value;
   const name=target.name;
   this.setState({
    [name]:value//name me hmara type h room type me or guest me capacity or hum ise value ke equal kr rhe
   },this.filterRooms//runs when type is changed from all
   )
//    console.log(value);
}
filterRooms=()=>{
    let{
        rooms,type,capacity,price,minSize,maxSize,breakfast,pets
    }=this.state;//values are destructured
    let tempRooms=[...rooms];


       // transform value for capacity
    capacity=parseInt(capacity);//string to int
       // console.log(capacity);
    price=parseInt(price);

    if(type!=="all"){
        tempRooms=tempRooms.filter(room=>room.type===type)
    }
    // console.log(tempRooms);

 
     // for capacity uie guests
     if(capacity!==1){
        tempRooms=tempRooms.filter(room=>room.capacity>=capacity);
    }
    // console.log(tempRooms);

    //for price
    tempRooms=tempRooms.filter(room=>room.price<=price);
    // console.log(tempRooms);

    //for size
    tempRooms=tempRooms.filter(room => room.size>=minSize && room.size<=maxSize);

    //for breakfast:-
    if(breakfast)
    tempRooms=tempRooms.filter(room => room.breakfast===true)

    //for pets:-
    if(pets)
    tempRooms=tempRooms.filter(room => room.pets===true)
    
    this.setState({
        sortedRooms:tempRooms
    })
}

    render(){
        return <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
            {this.props.children}
        </RoomContext.Provider>
    }
}

const RoomConsumer=RoomContext.Consumer;
export {RoomProvider,RoomConsumer,RoomContext};

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
      return (
        <RoomConsumer>
          {value => <Component {...props} context={value} />}
        </RoomConsumer>
      );
    };
  }
  

// // import React ,{Component} from "react";

// // const RoomContext=React.createContext();
// // export default class RoomProvider extends Component{
// //     state={
// //         greeting:"morning",
// //         name:"john"
// //     }
// //     render(){
// //         return <RoomContext.Provider value={{...this.state}}>
// //             {this.props.children}
// //         </RoomContext.Provider>
// //     }
// // }

// // const RoomConsumer=RoomContext.Consumer;
// // export {RoomProvider,RoomConsumer,RoomContext};




