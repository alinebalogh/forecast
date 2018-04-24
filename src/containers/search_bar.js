import React, {Component} from 'react';


export default class SearchBar extends Component{
    render(){
        return(
            <form classname="input-group">
                <input type="search" placeholder="Search"/>
                <input type="submit"/>
            </form>
        );
    }
}