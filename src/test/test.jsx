import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const test = () => {
    const [dropdowns, setDropdowns] = useState([]);
  
    const addDropdown = () => {
      setDropdowns([...dropdowns, { id: dropdowns.length }]);
    };
  
    return (
      <div>
        <button onClick={addDropdown}>Add Dropdown</button>
        {dropdowns.map((dropdown, index) => (
          <Select key={dropdown.id} options={options} placeholder={Select an option ${index + 1}} />
        ))}
      </div>
    );
  }
  

export default test;
