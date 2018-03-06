import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GifList from './GifList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GifList />, document.getElementById('root'));
registerServiceWorker();
