import React, { Fragment, useState } from 'react';
import OptionsList from './OptionsList';

export default function Typeahead({ onChange, onKeyPress, typeaheadValue, options, handleSubmit }) {
  const [activeOption, setActiveOption] = useState(-1);
  function handleKeyPress(event) {
    if(event.keyCode === 13) {
      return handleSubmit(activeOption);
    }
    if(event.keyCode === 38) {
      if(activeOption === 0) return;
      return setActiveOption(activeOption - 1);
    }
    if(event.keyCode === 40) {
      if(activeOption - 1 === options.length) return;
      return setActiveOption(activeOption + 1);
    }
    setActiveOption(-1);
  }
  return (
    <Fragment>
      <div className="typeahead">
        <div className="container">
          <input
            type="text"
            className="typeahead-text"
            onChange={onChange}
            onKeyDown={handleKeyPress}
            value={typeaheadValue}
            placeholder="Enter Search Values"
          />
        </div>
        <OptionsList options={options} activeOption={activeOption} handleSubmit={handleSubmit}/>
      </div>
    </Fragment>
  )
}
