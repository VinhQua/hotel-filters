import React,{Component} from "react";
import OptionsList from "./OptionsList";
class Filters extends Component{

    render(){
    
        return(
        <div className="filter">
            <h3>Filter By:</h3>
            <OptionsList filters={this.props.filters} filterBy ={this.props.filterBy}/>
        </div>
        )
    }
}
export default Filters