import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Profile</span>
          <span className="settingsDeleteTitle">Delete Profile</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="#">Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.57ygerRcLMlhGKtVPktGUAHaHa&pid=Api&P=0"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon">
                <PersonAddIcon />
              </i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Anant" />
          <label>Email</label>
          <input type="email" placeholder="anantnipunge@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="password" />
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default settings;
