// incomplete and unsuccessful attempt to add splash page to react routing

import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.jsx';
import SplashPage from './components/splashPage.jsx';
import Navbar from './components/navbar.jsx';

class ChooseRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  // componentWillMount () {
  //   fetch('/')
  //   .then(res => res.json())
  //   .then(res => this.setState({isAuthenticated}));
  // }

  render() {
    return (<div>Testing</div>);
    // return(
    //   <div>
    //     <Navbar />
    //     <Route>
    //       <App />
    //       <SplashPage />
    //     </Route>
    //   </div>
    // )
  }
}

// if (this.state.isAuthenticated) {
//       return (<div><Navbar /><App /></div>);
//     } else {
//       return (<div><Navbar /><SplashPage /></div>);
//     }
// ReactDOM.render(<ChooseRoute />, document.getElementById('app'));