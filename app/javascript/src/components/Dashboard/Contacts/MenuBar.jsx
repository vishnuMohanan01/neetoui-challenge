import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";
import PropType from "prop-types";

const MenuBar = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <NeetoUIMenuBar showMenu={showMenu} title="Contacts">
        <NeetoUIMenuBar.Block active count={0} label="All" />
        <NeetoUIMenuBar.Block count={0} label="Archived" />
        <NeetoUIMenuBar.Block count={0} label="Completed" />
        <NeetoUIMenuBar.Block count={0} label="Phase 2" />
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
      </NeetoUIMenuBar>
    </div>
  );
};

MenuBar.propTypes = {
  showMenu: PropType.bool,
};

export default MenuBar;
