import "./register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Your Name..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter Your Email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="Password"
          placeholder="Enter Your Password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}

export default Register;
