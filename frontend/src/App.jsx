import React from 'react'
import Welcome from './Welcome';
import Student from './Student';

function App() {
  return (
    <div>
      <h1 className="heading">Welcome to React Lab</h1>
      <Welcome name="Student" />
      <Student name="Hasan Zahid" course="Web Engineering" />
    </div>
  );
}

export default App;