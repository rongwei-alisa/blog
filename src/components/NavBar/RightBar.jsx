/*
 * @Description: RightBar(signin\signup button)
 * @Author: RongWei
 * @Date: 2018-11-03 11:35:41
 * @LastEditors: RongWei
 * @LastEditTime: 2018-11-05 10:12:56
 */
import React, { Component } from 'react';

class RightBar extends Component {
    render() {
        return (
            <div className="right-bar">
                <button>登录</button> | <button>注册</button>
            </div>
        );
    }
}

export default RightBar;