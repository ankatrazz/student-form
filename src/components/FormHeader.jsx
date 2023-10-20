import React from "react";
import formImage from "../images/formImage.png";
import "./FormHeader.css";

import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutLineEye } from "react-icons/ai";
import { IconButton } from "@material-ui/core";
import { IoMdFolderOpen } from "react-icons/io";

import { ColorLensIcon } from "@material-ui/icons/ColorLens";
import { MoreVertIcon } from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

const FormHeader = () => {
  return (
    <div className="form_header">
      <div className="form_header_left">
        <img src={formImage} style={{ height: "45px", width: "40px" }} />
        <input
          type="text"
          placeholder="untitled form"
          className="form_name"
          value={doc_name}
        ></input>
        <IoMdFolderOpen
          className="form_header_icon"
          style={{ marginRight: "10px" }}
        ></IoMdFolderOpen>
        <FiStar className="form_header_icon" style={{ marginRight: "10px" }} />
        <span style={{ fontSize: "12px", fontWeight: "600" }}>
          All changes saved in drive
        </span>
      </div>
      <div className="form_header_right">
        <IconButton>
          <ColorLensIcon size="small" className="form_header_icon" />
        </IconButton>
        <IconButton>
          <AiOutLineEye className="form_header_icon" />
        </IconButton>
        <IconButton>
          <FiSettings className="form_header_icon" />
        </IconButton>
        <Button variant="container" color="primary" href="#contained-buttons">
          All changes saved in drive
        </Button>
        <IconButton>
          <MoreVertIcon className="form_header_icon" />
        </IconButton>
        <IconButton>
          <Avatar style={{ height: "30px", widht: "30px" }} src={{}} />
        </IconButton>
      </div>
    </div>
  );
};

export default FormHeader;
