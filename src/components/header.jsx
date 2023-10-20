import React from "react";
import "./header.css";
import menuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import formImage from "../images/formImage.png";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import TemporaryDrawer from "./TemporaryDrawer";

const header = () => {
  return (
    <div classname="header">
      <div className="container">
        <div className="header_info">
         <TemporaryDrawer />
          <img
            src={formImage}
            style={{ height: "40px", widht: "40px" }}
            alt="no Image"
          />
          <div className="info">Form</div>
        </div>
        <div className="header_search">
          <IconButton>
            {" "}
            <SearchIcon />{" "}
          </IconButton>
          <input type="text" name="search" placeholder="search" />
        </div>
        <div className="header_right">
          <IconButton>
            <AppsIcon />
          </IconButton>

          <IconButton>
            <Avatar />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default header;
