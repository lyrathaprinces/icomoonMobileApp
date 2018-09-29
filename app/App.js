import React from 'react';
import LandingScreen from './modules/auth/screens/landing/landingScreen';

class App extends React.PureComponent<any, any> {
  constructor(props:any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <LandingScreen />
    );
  }
}

export default App;
