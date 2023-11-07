/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => () => (
    <Provider store={store}>
      <App />
    </Provider>
));
