/*
 * @Description: NavBar LeftBar
 * @Author: RongWei
 * @Date: 2018-11-03 11:35:32
 * @LastEditors: RongWei
 * @LastEditTime: 2018-11-03 11:52:44
 */
import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

function LeftBar() {
    return (
        <div className="left-bar">
            <NavBar />
            <SearchBar />
        </div>
    );
}

export default LeftBar;