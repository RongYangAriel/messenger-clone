import React, {useState, useEffect} from 'react';
import Message from './Message'
import { Button } from '@material-ui/core';
import { FormControl, InputLabel, Input, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import './App.css';
import FlipMove from 'react-flip-move';
import firebase from '@firebase/app';
import db from './firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  
  // run at the begining of the app
  useEffect(() => {
    setUserName(prompt('Please enter your name'));
  }, []) //condition, if it's blank, this code run ONCE when the app component loads

  useEffect(() => {
    db.collection('messages').orderBy('timeStamp', 'desc')
    .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc=> ({id:doc.id, message:doc.data()})))
    })
  }, [])

  const sendMessage = (event) =>{
    event.preventDefault();
    db.collection('messages').add({
      text:input,
      userName:userName,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // all the logic to send a message goes here
    // setMessages([...messages, {userName: userName, text: input}]);
    setInput('');


  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="logo" className='App-logo'/>
      <h1>Message App</h1>
      <h2>Welcome {userName}</h2>
     <form className='app__form'>
        <FormControl className="app__formControl">
          <InputLabel >Enter a message...</InputLabel>
          <Input placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton disabled={!input} type='submit' variant="contained" color="primary" onClick = {sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl>
  
      </form>
      

      {/* messages themselves */}
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key = {id} userName = {userName} message={message}/>
          ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;
