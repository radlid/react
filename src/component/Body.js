import RestaurantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body =() =>{
    const [listOfResturant,setListOfResturant]=useState([]);

    useEffect( ()=>{fetchData()},[]);

 const fetchData = async ()=> {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4330769&lng=78.41880450000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 }



    return listOfResturant.length === 0 ? <Shimmer/> :  (
        <div className="body">
            <div className="filter">
                <button onClick={()=> {const filterlistOfResturant=listOfResturant.filter(res => res.info.avgRating>4.1);
                setListOfResturant(filterlistOfResturant);
                }}> Top Rated Resturant</button>
            </div>
            <div className="res-container">
             {listOfResturant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
        </div>
        </div>
    );
};

export default Body;
