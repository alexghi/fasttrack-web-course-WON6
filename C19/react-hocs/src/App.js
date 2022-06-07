import React, { Component, useState } from "react";
import User from "./User";
import BoxItem from "./BoxItem";
import Panel from "./Panel";
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import IconComponent from "./IconComponent";
import RightPanel from "./RightPanel";
import withUserData from "./hocs/withUserData";
import withUserSensitiveData from "./hocs/withUserSensitiveData";

const UserWithSensitiveData = withUserSensitiveData(User);
const UserWithAllData = withUserData(UserWithSensitiveData)

const App = () => {
  const [isRightPanelVisible, showRightPanel] = useState(false);


  console.log(isRightPanelVisible)
  return (
    <div>
      <Panel
        left={
          <>
            <Sidebar>
              <BoxItem>
                <UserWithAllData/>
              </BoxItem>
              <div
              style={{
                backgroundColor: '#fafafa',
                borderRadius: '10px',
                display: 'flex',
                padding: '3px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
                onClick={() => {
                  showRightPanel(!isRightPanelVisible);
                }}
              >
                Toggle Right panel
              </div>
              <SidebarItem text="Home" icon={<IconComponent emoji={"😂"} />} />
              <SidebarItem text="About" icon={<IconComponent emoji={"✨"} />} />
              <SidebarItem
                text="Contact"
                icon={<IconComponent emoji={"🔥"} />}
              />
            </Sidebar>
          </>
        }
        right={isRightPanelVisible ? <RightPanel /> : null}
      />

      {/* <BoxItem>
        <h1>test</h1>
        <h2>test</h2>
        <p> paragrahp</p>
      </BoxItem>
      
      */}
    </div>
  );
};

export default App;
