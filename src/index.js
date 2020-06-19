import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const getOS = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        return "OS_WINDOWS";
    }

    if (/android/i.test(userAgent)) {
        return "OS_ANDROID";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "OS_IOS";
    }
}

const links = {
  ios: "https://apps.apple.com/nl/app/fmc-goals/id1518452320?l=en",
  android: "https://play.google.com/store/apps/details?id=com.fmc.goal",
  os: getOS()
}

ReactDOM.render(
  <React.StrictMode>
    <App links={links} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
