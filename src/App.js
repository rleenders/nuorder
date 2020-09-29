import React, { useState } from 'react';
import Typeahead from './Typeahead';
import fetchIssues from './api'
import './App.css';

function App() {
  const [typeaheadValue, setTypeaheadValue] = useState('');
  const [options, setOptions] = useState([]);
  const handleChange = async (event) => {
    setTypeaheadValue(event.target.value)
    const result = await fetchIssues(event.target.value);
    setOptions(result.items)
  }

  const handleSubmit = async (value) => {
    setTypeaheadValue(options[value].title);
    const result = await fetchIssues(options[value].title);
    setOptions(result.items)
  }

  return (
    <div className="App">
      <Typeahead
        options={options}
        typeaheadValue={typeaheadValue}
        onChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
