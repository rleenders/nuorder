import React from 'react';

export default function OptionsList ({options, activeOption, handleSubmit}) {
  return (
    <ul className="options-list">
      {options.map((option, index) => {
        let classes = '';
        if(activeOption === index){
          classes = 'active';
        }
        return (<li key={option.title + index} className={classes} onClick={() => handleSubmit(index)}>
          <span className="title">{option.title}</span>
          <hr/>
          <div className="body">
            {option.labels.map(label => <span key={index + label.name} className="tag">{label.name}</span>)}
          </div>
        </li>);
      })}
    </ul>
  )
}
