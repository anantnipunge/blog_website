import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import photo from "./img_anant.png";

function topbar() {
  const contact = () => {
    return <h2>Under Construction.......</h2>;
  };
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i>
          <InstagramIcon />
        </i>
        <i>
          <TwitterIcon />
        </i>
        <i>
          <FacebookIcon />
        </i>
        <i>
          <LinkedInIcon />
        </i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to="/sidebar"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ABOUT
            </Link>
          </li>
          <li className="topListItem" onClick={contact}>CONTACT {contact}</li>
          <li className="topListItem">
            <Link
              to="/write"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              WRITE
            </Link>
          </li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="image" src={photo} alt="Anant" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                REGISTER
              </Link>
            </li>
            <li className="topListItem">
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                LOGIN
              </Link>
            </li>
          </ul>
        )}

        <SearchIcon className="search" />
      </div>
    </div>
  );
}

export default topbar;
