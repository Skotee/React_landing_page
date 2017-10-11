import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import LandingPage from './components/villages/Landing Page.js'; //kiedy importuję to to sie dzieje syf


class App extends React.Component {
        render() {
         return (
           <LandingPage/>           
         )
     }
  }

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
