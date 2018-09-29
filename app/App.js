
// @flow
import React from 'react';
import {Provider} from 'react-redux';
import type {Element as ReactElement} from 'react';

import LandingScreen from './modules/auth/screens/landing/landingScreen';
import configureStore from './store/ConfigureStore';

const store = configureStore();
class App extends React.PureComponent<any, any> {
  constructor(props:any) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <Provider store={store}>
        <LandingScreen />
      </Provider>
    );
  }
  render() {
    const content = this.renderContent();

    return content;
  }
}

export default App;
