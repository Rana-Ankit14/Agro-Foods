import React from "react";
import { MyProfileSidebar } from "./MyProfileSidebar";
export const MyProfileShared = ({ Subcomponent }) => {
  const menuItems = [
    { name: "myprofile", label: "My Profile" },
    { name: "myorders", label: "My Orders" },
    // { name: "settings", label: "Settings" },
    // { name: "address", label: "Address" },
  ];

  return (
    <div className="container pt-5">
      {/* <h1>My Profile</h1> */}
      <div className="row">
        <div className="col-md-3 col-12">
          <MyProfileSidebar menuItems={menuItems} />
        </div>
        <div className="col-md-9 col-12">
          <Subcomponent />
        </div>
      </div>
    </div>
  );
};
