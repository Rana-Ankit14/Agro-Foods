import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./MyProfileSidebar.css";
import { Link } from "react-router-dom";

export const MyProfileSidebar = ({ menuItems }) => {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {menuItems.map(({ label, name, ...rest }) => (
          <Link to={name} key={name}>
            <ListItem className="listItem" key={name} button {...rest}>
              <ListItemText>
                <span className="text">{label}</span>
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
