import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';
import Amplify, {API, Auth} from 'aws-amplify'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
//import { configure } from '@testing-library/react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig)

function App() {

  useEffect(() => {
    //API.get('dashboardAPI',"/data1/Key").then((projectdata) => console.log(projectdata));
    API.get('dashboardAPI',"/data2/spot1").then((projectdata1) => console.log(projectdata1));
    API.get('dashboardAPI',"/data3/first").then((projectdata2) => console.log(projectdata2));
  },[]);


  return (
    <div className="App" >
      <AmplifySignOut buttonText="Leave the System"/>
      <header className="App-header">
        <h3>Testing upload</h3>
        <h3>New Branch</h3>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p cla> </p>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
