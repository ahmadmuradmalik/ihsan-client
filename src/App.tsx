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
      const response = await axios.get('https://ihsans-server-production.up.railway.app/');
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
        <h1>Does Ibrahim Ihsan love JLA today?</h1>
        <button onClick={fetchText}>Flip a coin and find out!</button>
        {error && <p className="error">{error}</p>}
        {text && <p className="result animate__animated animate__fadeIn">{text}</p>}
      </header>
    </div>
  );
};

export default App;


