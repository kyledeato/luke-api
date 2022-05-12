import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Planet from './views/Planet';
import People from './views/People';
function App() {

  return (
    <BrowserRouter>
    <Form/>
      <Routes>
          <Route path="/planets/:id" element={<Planet/>} />
          <Route path="/people/:id" element={<People/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
