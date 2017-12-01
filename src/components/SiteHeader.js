import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon } from "semantic-ui-react";

const SiteHeader = ({ user }) => (
  <Menu>
    <Menu.Item>
      <Menu.Header as="h3">
        <Icon name="feed" /> feedfin
      </Menu.Header>
    </Menu.Item>
  </Menu>
);

SiteHeader.propTypes = {
  user: PropTypes.object
};

export default SiteHeader;
