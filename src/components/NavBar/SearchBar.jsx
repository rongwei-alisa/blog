/*
 * @Description: NavBar SearchBar
 * @Author: RongWei
 * @Date: 2018-11-03 11:53:44
 * @LastEditors: RongWei
 * @LastEditTime: 2018-11-03 17:06:36
 */
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    // TODO: debounceSearch

    render() {
        const { value } = this.state;
        return (
            <div className="search-bar">
                <input value={value} onChange={this.onValueChange} />
            </div>
        );
    }
}

export default SearchBar;