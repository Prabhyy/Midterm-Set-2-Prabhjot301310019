import React, { useState } from "react";
import "./dropdown.css";

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("Security Analysts");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form>
      <label>
        Select an option:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="Security Analysts">Security Analysts</option>
          <option value="Tester">Tester</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Front End Developer">Front End Developer</option>
        </select>
      </label>
      <p className="dropdown__selected">Selected option: {selectedOption}</p>
    </form>
  );
}
