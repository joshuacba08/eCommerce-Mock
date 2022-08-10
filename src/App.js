import { useState } from 'react';
import ItemList from './components/ItemList/ItemList';

import './App.css';
import Navbar from './layout/Navbar/Navbar';

function App() {

  const [query, setQuery] = useState('');

  const handleOnChange = (e) =>{
    console.log(e.target.value);
    setQuery(e.target.value);
  }

  return (
    <div className="App">
      <Navbar />
      <input 
        className="input-query"
        value={query}
        onChange={handleOnChange} 
      />

      <ItemList query={query} />
    </div>
  );
}

export default App;
