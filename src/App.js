import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log({ email: values.email, password: values.password });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div style={{ marginTop: "10rem", height: "15rem" }}>
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter email address"
              value={values.email}
              onChange={(e) => handleChange(e)}
              style={{ width: "15rem", marginTop: "0.5rem" }}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={values.password}
              onChange={(e) => handleChange(e)}
              style={{ width: "15rem", marginTop: "0.5rem" }}
            />
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
