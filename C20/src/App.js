import React, { Component, useState } from "react";


import BoxItem from './components/BoxItem'
import Main from "./Main/Main";
import Sidebar from "./Main/Sidebar/Sidebar";
import User from './Main/Sidebar/components/User'
import SidebarItem from "./Main/Sidebar/components/SidebarItem";
import IconComponent from "./Main/Sidebar/components/IconComponent";
import RightPanel from "./Main/RightSide/RightPanel";
import withUserData from "./hocs/withUserData";
import withUserSensitiveData from "./hocs/withUserSensitiveData";

const UserWithSensitiveData = withUserSensitiveData(User);
const UserWithAllData = withUserData(UserWithSensitiveData)


const App = () => {
  const [isRightPanelVisible, showRightPanel] = useState(false);

  return (
    <>
      <Main
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
    </>
  );
};

export default App;
