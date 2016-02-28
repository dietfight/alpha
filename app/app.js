//React
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

//Redux
import { Provider } from 'react-redux'
import store from './store'

//App stuff
import routes from './routes'
import Styles from '../less/main.less';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router history={ browserHistory } routes={routes} />
  </Provider>,
  document.getElementById('root')
);