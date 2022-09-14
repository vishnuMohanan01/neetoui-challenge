import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";
import PropType from "prop-types";

const MenuBar = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <NeetoUIMenuBar showMenu={showMenu} title="Notes">
        <NeetoUIMenuBar.Block active count={13} label="All" />
        <NeetoUIMenuBar.Block count={2} label="Users" />
        <NeetoUIMenuBar.Block count={7} label="Leads" />
        <NeetoUIMenuBar.Block count={4} label="Visitors" />
        <NeetoUIMenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </NeetoUIMenuBar.SubTitle>
        <NeetoUIMenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <NeetoUIMenuBar.Block count={80} label="Europe" />
        <NeetoUIMenuBar.Block count={60} label="Middle-East" />
        <NeetoUIMenuBar.Block count={60} label="Asia" />
        <NeetoUIMenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </NeetoUIMenuBar.SubTitle>
        <NeetoUIMenuBar.Block count={80} label="Sales" />
        <NeetoUIMenuBar.Block count={60} label="Finance" />
        <NeetoUIMenuBar.Block count={60} label="User Experience" />
      </NeetoUIMenuBar>
    </div>
  );
};

MenuBar.propTypes = {
  showMenu: PropType.bool,
};

export default MenuBar;
