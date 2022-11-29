import { useState } from "react";

export default function Forms() {
  // States for registration
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  // Handling the last name change
  const handleLName = (e) => {
    setLName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  // Handling the number change
  const handleNumber = (e) => {
    setNumber(e.target.value);
    setSubmitted(false);
  };
  // Handling the country change
  const handleCountry = (e) => {
    setCountry(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  // Handling the comfirm password change
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      lname === "" ||
      email === "" ||
      number === "" ||
      country === "" ||
      password === "" ||
      cpassword === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>
          User {name} {lname} successfully registered!!
        </h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="forms">
      <div>
        <h1>SignUp for free Account</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <div className="shadow">
        <form>
          <label className="label">First Name:</label>
          <input
            onChange={handleName}
            className="input"
            value={name}
            type="text"
          />

          <label className="label">Last Name:</label>
          <input
            onChange={handleLName}
            className="input"
            value={lname}
            type="text"
          />

          <label className="label">Email:</label>
          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          />

          <label className="label">Phone Number:</label>
          <input
            onChange={handleNumber}
            className="input"
            value={number}
            type="text"
          />

          <label className="label">Country:</label>
          <input
            onChange={handleCountry}
            className="input"
            value={country}
            type="text"
          />

          <label className="label">Create Password:</label>
          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />

          <label className="label">Confirm Password:</label>
          <input
            onChange={handleCPassword}
            className="input"
            value={cpassword}
            type="password"
          />

          <button onClick={handleSubmit} className="btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
