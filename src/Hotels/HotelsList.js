import React, {Component} from "react";
import { hotels } from "../data";
import Hotel from "./Hotel";
import { filterOptions } from "../data";
class HotelsList extends Component{
    render(){
        const hotelsArray = this.props.hotelsArr.map(hotel => {
        const hotelFeatures = filterOptions.filter(option => hotel[option.key] ===true );
        return <Hotel rooms={hotel.roomsRemaining} bestSeller={hotel.isBestSeller} imageSrc = {hotel.imageSrc} key={hotel.id} price={hotel.pricePerNight} review={hotel.reviewCount} rating={hotel.rating} name={hotel.name} features={hotelFeatures} />
    }) 
        return(
            <ul className="hotel-list">{hotelsArray}</ul>
        )
    }
}
export default HotelsList