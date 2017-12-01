import React from "react";
import { Menu, Icon } from "semantic-ui-react";

const SiteHeader = ({ user, logOut }) => (
  <Menu>
    <Menu.Item>
      <Menu.Header as="h3">
        <Icon name="feed" /> feedfin
      </Menu.Header>
    </Menu.Item>
  </Menu>
);

export default SiteHeader;
