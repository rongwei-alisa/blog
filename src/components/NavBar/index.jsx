/*
 * @Description: NavBar Index
 * @Author: RongWei
 * @Date: 2018-11-02 17:56:16
 * @LastEditors: RongWei
 * @LastEditTime: 2018-11-18 16:26:37
 */
import React from 'react';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import './index.less';
function NavBar() {
    return (
        <header className="header">
            <div className="container">
                <LeftBar></LeftBar>
                <RightBar></RightBar>
            </div>
        </header>
    );
}

export default NavBar;