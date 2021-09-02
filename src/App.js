import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import './App.css';
import Amplify, {API, Auth} from 'aws-amplify'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
//import { configure } from '@testing-library/react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig)

function App() {
  const [thing, setThing] = useState([]);

  
    //API.get('dashboardAPI',"/data1/Key").then((projectdata) => console.log(projectdata));
    //API.get('dashboardAPI',"/data2/spot1").then((projectdata1) => setThing(projectdata1.json()));
    //API.get('dashboardAPI',"/data3/first").then((projectdata2) => console.log(projectdata2));
    useEffect(()=>{
      fetchdata()
    },[]);
    const fetchdata = async () => {
      try {
        const projectdata1 = await API.get('dashboardAPI',"/data2/spot1");
        API.get('dashboardAPI',"/data2/spot1").then((projectdata1) => console.log(projectdata1));

        setThing(projectdata1)
      }

      catch(error){
      console.log(error);
      }
    }

    

  return (
    <div className="App" >
      <AmplifySignOut buttonText="Leave the System"/>
      <header className="App-header">
        <h3>Testing upload</h3>
        <h3>New Branch</h3>
       
        <div className="ThingthatThings">
          {thing.map((thing,index) =>(
            
            <div key={index}>
            <h2>{thing.spot1}</h2>
          </div>
          )
            
          )}
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default withAuthenticator(App);
