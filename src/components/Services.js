import React,{useState} from "react";
import Title from "./Title";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";
import Service from "./Service";


const Services=()=>{
    const [serviceData,setServiceData]=useState(Service);
    // state will be a object jisme array hoga services ka 
    // services bhi object lega
    return(
        <>
        <div className="services">
        <Title title="services"></Title>
        
{/* hooks are used */}
<div className="services-center">
{
            serviceData.map((currele)=>{
                return(
                    <>
                    <div className="service">
                   
                    <span>{currele.icon}</span>
                    <h6>{currele.title}</h6>
                    <p>{currele.info}</p>
                   
                    </div>
                    
                    </>
                )
            })
        }
</div>
       
        </div>
        </>
    )
}

export default Services;