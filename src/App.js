import React, { useState} from 'react';
import { Button,FormControl,InputLabel, Input } from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    // all the logic to send a message goes
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Kazuopp</h1>

      <form>
      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input />
        <Button disabled={!input} variant="contained" color="primary" type = 'submit' onClick={sendMessage}>Send Message</Button>
      </FormControl>
        
      </form>


      {/* messages themselves */}

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
