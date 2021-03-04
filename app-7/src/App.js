import React from 'react';
import AppComp from './Components/AppComp';
import List from './Components/List';
import NewTask from './Components/NewTask';
import ToDo from './Components/ToDo';
import './App.css';

function App() {
  return (
    <div className="App">
      < AppComp/>
      < List/>
      < NewTask/>
      < ToDo/>
    </div>
  );
}

export default App;
