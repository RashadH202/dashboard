import './App.css';
import {Amplify} from 'aws-amplify'
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';


Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
   <h1>Hello</h1>
  </div>
  );
}

export default withAuthenticator(App);
