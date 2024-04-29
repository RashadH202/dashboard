import './App.css';
import { Amplify, API, graphqlOperation} from 'aws-amplify'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { useEffect,useState } from 'react';




Amplify.configure(awsExports);

function App() {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    fetchtodo()
  },[])

  const fetchtodo = async () => {
try {
  const todoData = await API.graphql(graphqlOperation(listTodos))
  const todoList = todoData.data.listTodo.item
  console.log('song list', todoList)
  setTodo(todoList)

} catch(error){
  console.log('error on fetching song', error)
}
  } 
  return (
    <div className="App">
   <h1>Hello</h1>
   <AmplifySignOut />
  </div>
  );
}

export default withAuthenticator(App);
