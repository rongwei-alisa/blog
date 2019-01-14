import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

const open = (props) => {
  const $wrapperDiv = document.createElement('div');
  document.body.appendChild($wrapperDiv);

  function close(resolve, reject, resolved, result) {
    if ($wrapperDiv) {
      ReactDOM.unmountComponentAtNode($wrapperDiv);
      if (resolved) {
        resolve && resolve(result);
      } else {
        reject && reject(result);
      }
    }
  }

  return new Promise((resolve, reject) => {
    const { component, componentProps } = props;

    componentProps.promise = {
      resolve: (data) => {
        close(resolve, reject, true, data);
      },
      reject: (error) => {
        close(resolve, reject, false, error)
      }
    };

    componentProps.onCancel = () => {
      close(resolve, reject, false, null);
    };

    const modal = (
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