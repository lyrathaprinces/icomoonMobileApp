import React from 'react';
import LandingScreen from './modules/login/screens/landing/landingScreen';

class App extends React.PureComponent<any, any> {
  constructor(props:any) {
    super(props);
  }
  render() {
    return (
      <LandingScreen />
    );
  }
}

export default App;
