import "./Sidebar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import photo from "./img_anant.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={photo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          quibusdam ratione ducimus earum sed laboriosam assumenda quas aliquam
          provident eum!    
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Health</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Success stories</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i>
            <InstagramIcon style={{color:"#ff004f"}}/>
          </i>
          <i>
            <TwitterIcon style={{color:"#1DA1F2"}}/>
          </i>
          <i>
            <FacebookIcon style={{color:"#4267B2"}}/>
          </i>
          <i>
            <LinkedInIcon style={{color:"#0e76a8"}} />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
