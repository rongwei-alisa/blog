/*
 * @Description: NavBar Menu
 * @Author: RongWei
 * @Date: 2018-11-03 11:40:22
 * @LastEditors: RongWei
 * @LastEditTime: 2018-11-03 11:53:00
 */
import React from 'react';

const NAVS = [{
    code: 'homePage',
    name: '首页'
}, {
    code: 'gitHub',
    name: 'GitHub'
}];

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="logo">LOGO</div>
            <ul>
                {NAVS.map(nav => {
                    return <li key={nav.code}>{nav.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default NavBar;