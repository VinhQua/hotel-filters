import React,{Component} from "react";
import { filterOptions } from "../data";
import { hotels } from "../data";
class MatchedNumber extends Component{

    render(){
        const filterType = this.props.id;
        const matchedHotels = hotels.filter(hotel=> hotel[filterType]===true);
        return matchedHotels.length;
    }   
        
}
export default MatchedNumber