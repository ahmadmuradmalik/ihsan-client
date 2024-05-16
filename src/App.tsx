import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const fetchText = async () => {
    setError('');
    setText('');
    try {
      const response = await axios.get('/https://dev-ihsans-server-production.up.railway.app/');
      // const response = await axios.get('http://localhost:5050/');

      setText(response.data);
    } catch (error) {
      setError('Error fetching text');
      console.error("Error fetching text", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/ihsan_cat.jpeg" className="App-logo" alt="That's fantastic" />
        <h1>Hi?</h1>
        <button onClick={fetchText}>Find out...</button>
        {error && <p className="error">{error}</p>}
        {text && <p className="result animate__animated animate__fadeIn">{text}</p>}
      </header>
    </div>
  );
};

export default App;


