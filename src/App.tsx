import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const [text, setText] = useState('');

  const fetchText = async () => {
    try {
      const response = await axios.get('/api/text');
      setText(response.data);
    } catch (error) {
      console.error("Error fetching text", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="../public/ihsan_cat.jpeg" className="App-logo" alt="thats fantastic" />
        <p>
          Does Ibrahim Ihsan love JLA today?
        </p>
        <button onClick={fetchText}>Flip a coin and find out!</button>
        <p>{text}</p>
      </header>
    </div>
  );
};

export default App;

