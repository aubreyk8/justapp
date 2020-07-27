import React from 'react';
import App from './src/App';
import {Provider} from 'react-redux';
import { registerRootComponent } from 'expo';
import promiseMiddleware from 'redux-promise';
import reducers from './src/Store/Reducers/RootReducers';
import {applyMiddleware, compose, createStore} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(
    reducers,
    composeEnhancers(applyMiddleware(promiseMiddleware)),
);

const appRedux = () => (
    <Provider store={createStoreWithMiddleware}>
        <App />
    </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(appRedux);
