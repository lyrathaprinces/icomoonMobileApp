import React from 'react';
import {Provider} from 'react-redux';
import LandingScreen from './modules/auth/screens/landing/landingScreen';

import ConfigureStore from './store/ConfigureStore';

const store = ConfigureStore();

class App extends React.PureComponent<any, any> {
  constructor(props:any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <LandingScreen />
      </Provider>
    );
  }
}

export default App;
