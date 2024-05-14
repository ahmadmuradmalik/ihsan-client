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
        <img src="/path/to/your/image.jpg" className="App-logo" alt="logo" />
        <p>
          Your display text goes here.
        </p>
        <button onClick={fetchText}>Fetch Text</button>
        <p>{text}</p>
      </header>
    </div>
  );
};

export default App;

