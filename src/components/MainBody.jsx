import React from 'react';
import StorageIcon from '@material-ui/icons/Storage';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import  FolderOpenIcon  from '@material-ui/icons/FolderOpen';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import "./mainBody.css";
import recent from '../images/recent.png'


const MainBody = () => {
  return (
    <div className='mainbody'>
      <div className='mainbody_top_left' style={{fontSize:"16px" ,fontWeight:"500"}}>
        recent forms
        </div>
        <div className='mainbody_top_right'>
          <div className='mainbody_top_centre'style ={{fontSize:"14px",marginRight:"125px"}}>Owned by anyone<ArrowDropDownIcon/></div>
          <IconButton>
            <StorageIcon style ={{fontSize:"14px",color:"black"}}/>
          </IconButton>
          <IconButton>
            <FolderOpenIcon style ={{fontSize:"14px",color:"black"}}/>
          </IconButton>
        </div>
        <div className='main_docx'>
          <div className='doc_card'>
            <img src ={recent} className='doc_image'/>
            <div className='doc_card_centre'>
              <h5></h5>
              <div className='doc_content'  style ={{fontSize:"12px",color:"grey"}}>
                <div className='content_left'>
                  <StorageIcon style ={{color:"white",fontSize:"12px",backgroundColor : "#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>
                </div>
                <MoreVertIcon  style ={{fontSize:"16px",color:"grey"}} />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainBody;