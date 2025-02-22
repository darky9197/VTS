import { useState } from "react";

function Login(props) {
  const { handleRouteone } = props;

  const [switcher, setSwitcher] = useState(1);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const [adminUsername, setAdminUsername] = useState("");
  // const [adminPassword, setAdminPassword] = useState("");

  

  const handlesubmit = () => {
    let data = JSON.parse(localStorage.getItem("userdata"))
    
    if(username == data.username){
      if(password != data.password){
        alert("Incorrect Password")
      }else{
        
        handleRouteone()
      }
    }
  }
  

function renderSwitch(param) {
  switch (param) {
    case 1:
      return (
        <div className={`card login-card`}>
          <button
            className="slogin-nav-btn"
            onClick={() => {
              setSwitcher(2);
            }}
          >
            {">"}
          </button>
          
          <h1 className="card-heading">User Login</h1>
          <div className="form-container">
            <input
              type="text"
              value={username}
              id="username"
              placeholder="Username"
              autoComplete="off"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              value={password}
              id="pswd"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}

              required
            />

            <button
              className="btn sub-btn"
              onClick={handlesubmit}
            >
              Submit
            </button>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="card login-card">
          <button
            className="alogin-nav-btn"
            onClick={() => {
              setSwitcher(1);
            }}
          >
            {"<"}
          </button>
          <h1 className="card-heading">Admin Login</h1>
          <form className="form-container">
            <input
              type="text"
              value={username}
              id="username"
              placeholder="Admin Username"
              autoComplete="off"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              value={password}
              id="pswd"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button 
              className="btn sub-btn"
              onClick={handlesubmit}
            >
                Submit
              </button>
        </form>
          </div >
        );

    default:
  }
}

return (
  <>
    <div className="center_flex login_bg">{renderSwitch(switcher)}</div>
  </>
);
}

export default Login;
