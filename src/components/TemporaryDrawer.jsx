import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";
import "./drawer.css"
import {FiSettings} from "react-icons/fi"
import { BsQuestionCircle } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  listItem:{
    marginLeft: "20px", fontSize: "14px", fontWeight: "500", color: "grey"
  },
  slideImages:{
    height:"20px",width:"20px"
  }
}));


const TemporaryDrawer = () => {
const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "250px" }} role="presentation">
      <Divider/>
        <List>
          <ListItem>
            <ListItemText style={{ fontSize: "48px" }} marginLeft="5px">
              <span style={{ color: "#3f51b5" }}>F</span>
              <span style={{ color: "#3f51b5" }}>O</span>
              <span style={{ color: "#3f51b5" }}>R</span>
              <span style={{ color: "#3f51b5" }}>M</span>
            </ListItemText>
          </ListItem>
        </List>
      <Divider/>
      <List style={{ marginLeft: "8px", marginRight: "8px", marginTop: "15px" }}>
  <ListItem className="list_item">
    <img src="docimage" width="20px" className={classes.slideImages} />
    <div className={classes.ListItem}>Docs</div>
  </ListItem>
  <ListItem className="list_item">
    <img src="[excelsheetimage)" className={classes.slideImages} />
    <div  className={classes.ListItem}>Sheets</div>
  </ListItem>
  <ListItem className="list_item">
    <img src="(slidesimage)" className={classes.slideImages} />
    <div  className={classes.ListItem}>Slides</div>
  </ListItem>
  <ListItem className="list_item">
    <img src="(formimage)" className={classes.slideImages} />
    <div className={classes.ListItem}>Forms</div>
  </ListItem>
</List>
<Divider/>
<List>
  <ListItem>
    <FiSettings/>
    <div>settings</div>
  </ListItem>
  <ListItem>
    <BsQuestionCircle/>
    <div>Help & Feedback</div>
  </ListItem>
</List>
<Divider/>

<List style={{ marginLeft: "8px", marginRight: "8px", marginTop: "15px" }}>
  <ListItem className="list_item">
    <img src="driveimage" width="20px" className={classes.slideImages} />
    <div className={classes.ListItem}>Drive</div>
  </ListItem>
  
</List>


    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)} anchor={"left"}>
          <MenuIcon />
        </IconButton>
        <Drawer open={state["left"]} onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;
