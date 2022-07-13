import { Avatar } from "@mui/material";
import React from "react";
import "./SideBar.css";

function SideBar() {
  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <p>
        <span className="sidebar__hashtag">#</span>
        {topic}
      </p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.psdgraphics.com/wp-content/uploads/2021/03/caramel-color-background.jpg"
          alt="caramel-background"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Simon Yu</h2>
        <h4>isimonyu@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,754</p>
        </div>
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">934</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("developer")}
        {recentItems("softwareengineering")}
        {recentItems("design")}
      </div>
    </div>
  );
}

export default SideBar;
