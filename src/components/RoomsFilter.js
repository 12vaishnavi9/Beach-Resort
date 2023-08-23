import React,{useContext} from "react";
import { RoomContext } from "../Context";


//get unique type & capacity values:-
const getUnique=(items,value)=>{
    //set accpects only unique values
    //value as a parameter is a string .
    //passing the string,gonna check what type of value you have for string.
    //if present-leave else add
    return [...new Set(items.map(item=>item[value]))]
}

const RoomsFilter=({rooms})=>{
    const context=useContext(RoomContext);//ab saara data context me aagya
    //console.log(context);
    const{handleChange,type,capacity,price,minPrice,
        maxPrice,minSize,maxSize,breakfast,pets}=context;

//get unique types
        let types=getUnique(rooms,'type');
        //add all
        types=['all',...types];

//get unique capacity values:-
let people=getUnique(rooms,'capacity');
       
    return(
        <>

        {/* room type */}
           <div className="filter-container">
            <form className="filter-form">
            <div className="form-group">
                <label hlmtFor="type">room type</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                {
                    types.map(
            (item,index)=>{
                return <option value={item} key={index}>{item}</option>
            }
        )
                }
                </select>
            </div>

            {/* guests */}
            <div className="form-group">
                <label hlmtFor="capacity">guests</label>
                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                {
                    people.map(
            (item,index)=>{
                return <option value={item} key={index}>{item}</option>
            }
        )
                }
                </select>
            </div>

            {/* room price */}
            <div className="form-group">
                <label htmlFor="price">room price ${price}</label>
                <input type="range" name="price" id="price" 
                min={minPrice} max={maxPrice} value={price} onChange={handleChange}/>
            </div>

            {/* room size */}
            <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>

        {/* extras */}
         <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div> 
            </form>
           </div>
        </>
    )
}

export default RoomsFilter;