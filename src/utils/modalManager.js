import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

const open = (props) => {
  const $wrapperDiv = document.createElement('div');
  document.body.appendChild($wrapperDiv);

  const { component, componentProps } = props;
  return new Promise((resolve, reject) => {
    const modal =(
      <LocaleProvider locale={zh_CN}>
        {React.createElement(component, componentProps)}
      </LocaleProvider>
    );
    ReactDOM.render(modal, $wrapperDiv);
  });
};

const closeAll = () => { };

export default {
  open,
  closeAll
};