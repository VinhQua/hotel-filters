import React,{Component} from "react";
import { filterOptions } from "../data";
import FilterOption from "./Option";
class OptionsList extends Component{

    render(){
        const options = filterOptions.map(option => <FilterOption filterBy={this.props.filterBy} 
            id={option.key} key={option.key} display={option.display} filters={this.props.filters} />)
        return(
            <ul className="option-list">
                {options}
            </ul>
        )
    }
}
export default OptionsList