import React, { useRef, useState } from "react";
import "./uncontrolled.css";

export default function Uncontrolled() {
  const radioNoRef = useRef(null);
  const radioYesRef = useRef(null);
  const radioNotSureRef = useRef(null);
  const commentsRef = useRef(null);
  const [resetForm, setResetForm] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let choice = "Not sure";

    if (radioNoRef.current.checked) {
      choice = "No";
    } else if (radioYesRef.current.checked) {
      choice = "Yes";
    }

    console.log("Choice:", choice);
    console.log("Comments/Questions:", commentsRef.current.value);
  }

  const handleReset = () => {
    // Reset form values
    radioNoRef.current.checked = false;
    radioYesRef.current.checked = false;
    radioNotSureRef.current.checked = false;
    commentsRef.current.value = "";

    // Trigger a re-render to clear the form values from the UI
    setResetForm(!resetForm);
  };

  return (
    <form className="uncontrolled" onSubmit={handleSubmit}>
      <label>
        <p>Are you willing to relocate?</p>
        <label>
          Yes
          <input type="radio" ref={radioNoRef} name="choice" value="No" />
        </label>
        <label>
          No
          <input type="radio" ref={radioYesRef} name="choice" value="Yes" />
        </label>
        <label>
          Not sure
          <input type="radio" ref={radioNotSureRef} name="choice" value="Not sure" defaultChecked />
        </label>
      </label>
      <label>
        References/Comments/Questions:
        <textarea ref={commentsRef}></textarea>
      </label>
      <button className="uncontrolled__button" type="submit">
        Submit
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}
