import React,{Component} from "react";
class RoomLeft extends Component{

    render(){
        const roomNum = this.props.rooms
        return roomNum < 10?`Only ${roomNum} rooms left!`:'';
    }
}
export default RoomLeft