// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// const App: React.FC = () => {
//   const [text, setText] = useState('');
//   const [error, setError] = useState('');

//   const fetchText = async () => {
//     setError('');
//     setText('');
//     try {
//       // const response = await axios.get('https://dev-ihsans-server-production.up.railway.app/');
//       // const response = await axios.get('http://localhost:5111/u');
//       const response = await axios.post('http://localhost:5111/upload', {
//         user_id: 1 
//       });
//       console.log(response.data)

//       setText(response.data);
//     } catch (error) {
//       setError('Error fetching text');
//       console.error("Error fetching text", error);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="/ihsan_cat.jpeg" className="App-logo" alt="That's fantastic" />
//         <h1>Hi?</h1>
//         <button onClick={fetchText}>Find out...</button>
//         {error && <p className="error">{error}</p>}
//         {text && <p className="result animate__animated animate__fadeIn">{text}</p>}
//       </header>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// const App: React.FC = () => {
//   const [sessionId, setSessionId] = useState('');
//   const [conversation, setConversation] = useState('');
//   const [response, setResponse] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async () => {
//     setError('');
//     setResponse('');
//     try {
//       const result = await axios.post('http://localhost:5111/addConversation', {
//         sessionId: sessionId,
//         conversation: { message: conversation }
//       });

//       setResponse(result.data);
//     } catch (error) {
//       setError('Error adding conversation');
//       console.error("Error adding conversation", error);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="/ihsan_cat.jpeg" className="App-logo" alt="That's fantastic" />
//         <h1>Hi?</h1>
//         <div className="form-group">
//           <label htmlFor="sessionId">Session ID:</label>
//           <input
//             type="text"
//             id="sessionId"
//             value={sessionId}
//             onChange={(e) => setSessionId(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="conversation">Conversation:</label>
//           <input
//             type="text"
//             id="conversation"
//             value={conversation}
//             onChange={(e) => setConversation(e.target.value)}
//           />
//         </div>
//         <button onClick={handleSubmit}>Submit Conversation</button>
//         {error && <p className="error">{error}</p>}
//         {response && <p className="result animate__animated animate__fadeIn">{JSON.stringify(response)}</p>}
//       </header>
//     </div>
//   );
// };

// export default App;

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
      const response = await axios.post('http://localhost:5111/addConversation', {
        sessionId: String(Math.floor(Math.random() * 50)),
        conversation: Math.random()
      });
      console.log(response.data);
      setText(JSON.stringify(response.data, null, 2));
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
        {text && <pre className="result animate__animated animate__fadeIn">{text}</pre>}
      </header>
    </div>
  );
};

export default App;

