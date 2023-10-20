import React, { useState } from "react";
import "./controlled.css";

export default function ControlledComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolioWebsite, setPortfolioWebsite] = useState("http://");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePortfolioWebsiteChange = (event) => {
    setPortfolioWebsite(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;

    // Ensure the phone number is not more than 10 digits
    if (input.length <= 10) {
      setPhoneNumber(input);
    }
  };

  return (
    <form className="controlled-form">
      <div className="form-group">
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Portfolio Website:
          <input type="url" value={portfolioWebsite} onChange={handlePortfolioWebsiteChange} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Phone Number (not more than 10 digits):
          <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </label>
      </div>
      <p className="controlled__text">First Name: {firstName}</p>
      <p className="controlled__text">Last Name: {lastName}</p>
      <p className="controlled__text">Email: {email}</p>
      <p className="controlled__text">Portfolio Website: {portfolioWebsite}</p>
      <p className="controlled__text">Phone Number: {phoneNumber}</p>
    </form>
  );
}
