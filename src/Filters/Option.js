import React,{Component} from "react";
import MatchedNumber from "./MatchedNumber";
class FilterOption extends Component{
    chooseFilter=(e)=>{
        let filterOptions = this.props.filters;
        //console.log(this.props.filters)
        if (e.target.checked === true){
            filterOptions.splice(0,0,this.props.id)
            console.log(this.props.id)
            console.log('true')
        }else {
            filterOptions = filterOptions.filter(option=> option !== this.props.id)
            //console.log(filters)
        }
        console.log(filterOptions)
        return this.props.filterBy(filterOptions)
        
        
        
    }
    render(){
        return(
            <li className="option">
                <input onChange={this.chooseFilter} type="checkbox" id={this.props.id}/>
                {this.props.display}
                <span className="match-num"><MatchedNumber key={this.props.id} id={this.props.id}/></span>
            </li>
        )
    }
}
export default FilterOption