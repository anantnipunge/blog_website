import "./login.css";

function login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="email" placeholder="Enter Your Email..." />
        <label>Password</label>
        <input className="loginInput" type="Password" placeholder="Enter Your Password..." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}

export default login;
