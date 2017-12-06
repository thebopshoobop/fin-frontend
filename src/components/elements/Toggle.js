import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

import preventDefault from "../../lib/preventDefault";

const Toggle = ({ enabled, label, activeLabel, color, onToggle }) => {
  activeLabel = activeLabel ? activeLabel : label;
  label = enabled ? activeLabel : label;
  const icon = enabled ? "toggle on" : "toggle off";

  return (
    <a
      href=""
      onClick={preventDefault(onToggle)}
      style={{ color, display: "block" }}
    >
      <Icon name={icon} color={color} />
      {label}
    </a>
  );
};

Toggle.propTypes = {
  enabled: PropTypes.bool,
  label: PropTypes.string,
  activeLabel: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default Toggle;
