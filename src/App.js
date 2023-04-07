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
      <div
        style={{
          marginTop: "15rem",
          height: "15rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "solid 1px black",
            height: "100%",
            width: "30rem",
            borderRadius: "5px",
          }}
        >
          <h1 style={{ textDecoration: "underline" }}>Login</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Enter email address"
                value={values.email}
                onChange={(e) => handleChange(e)}
                style={{
                  width: "15rem",
                  marginTop: "0.5rem",
                  height: "2rem",
                  borderRadius: "5px",
                }}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={values.password}
                onChange={(e) => handleChange(e)}
                style={{
                  width: "15rem",
                  marginTop: "0.5rem",
                  height: "2rem",
                  borderRadius: "5px",
                }}
                required
              />
            </div>
            <div style={{ marginTop: "0.5rem" }}>
              <button style={{ width: "15rem", height: "1.5rem" }}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;