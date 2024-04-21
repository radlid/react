import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    const {resData} =props;
    const {cloudinaryImageId,name,cuisines,avgRatingString,sla}=resData.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')}</h5>
            
           <h5> {avgRatingString} </h5>
          <h5> Delivery in {sla.deliveryTime}</h5>
        </div>
    );
};
export default RestaurantCard;