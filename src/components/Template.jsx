import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import "./template.css"
import blank from "../images/blank.png"
import party from "../images/party invite.png"
import contact from "../images/contact information.png"
import uuid from 'react-uuid'
import { useNavigate } from "react-router-dom";
const Template = () => {
  const navigate = useNavigate();

  const createForm =()=>{
    const id_ = uuid();
    console.log(id_);
    navigate("/form/"+id_);

  }
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span styke={{ fontSize: "16px", color: "#202124" }}>Start A New Form</span>
        </div>
        <div className="template_right">
          <div className="galary_button">
            Template gallery
            <UnfoldMoreIcon />
          </div>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className ="card" onClick={createForm}>
          <img src ={blank} alt ="no image" classNmae="card_image"/>
          <p className="card_title">Blank</p>
        </div>
        <div className ="card">
          <img src ={party} alt ="no image" classNmae="card_image"/>
          <p className="card_title">contanct</p>

        </div>
        <div className ="card">
          <img src ={contact} alt ="no image" classNmae="card_image"/>
          <p className="card_title">Contact Info</p>

        </div>
      </div>
    </div>
  );
};

export default Template;
