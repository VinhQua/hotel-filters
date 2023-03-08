import React,{Component} from "react";
import RoomLeft from "./RoomLeft";
class Hotel extends Component{

    render(){
        const isBestSeller = "best-seller" + (this.props.bestSeller===true?'':' hide'); 
        const featuresArray = this.props.features.map(feature => {
            if(feature.key !== "isBestSeller")
        {return<li>{feature.display}</li>} } );
        return(
            <li className="hotel">
                <div className={isBestSeller}><div></div> Bestseller</div>
                <img className="hotel-image" src={this.props.imageSrc}/>
                <div className="hotel-info">
                    <h3 className="hotel-name">{this.props.name}</h3>
                    <div className="rating">{this.props.rating}<span></span></div>
                    <div className="flex-box">
                        <ul className="hotel-feature">
                        <span className="hotel-review">{this.props.review} reviews</span> 
                        {featuresArray}
                        <p className="room-left"><RoomLeft rooms={this.props.rooms}/></p>
                        </ul>
                        <div className="hotel-price">
                            <p><span className="price">${this.props.price}</span> per night</p>
                            <p>Includes taxes and charges</p>
                            <button className="see-room-btn">See our last available room:</button>
                        </div> 
                    </div>

                </div>
            </li>
        )
    }
}
export default Hotel