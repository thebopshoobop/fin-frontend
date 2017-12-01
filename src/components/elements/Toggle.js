import React from "react";
import PropTypes from "prop-types";
import { Icon, Button } from "semantic-ui-react";

const Toggle = ({ enabled, label, activeLabel, color, onClick }) => {
  activeLabel = activeLabel ? activeLabel : label;
  const current = {
    icon: enabled ? "toggle on" : "toggle off",
    label: enabled ? activeLabel : label
  };
  const alternate = {
    icon: enabled ? "toggle off" : "toggle on",
    label: enabled ? label : activeLabel
  };

  return (
    <Button
      animated="fade"
      basic
      compact
      size="mini"
      onClick={onClick}
      color={color}
      floated="right"
    >
      <Button.Content visible>
        <Icon name={current.icon} color={color} />
        {current.label}
      </Button.Content>
      <Button.Content hidden>
        <Icon name={alternate.icon} color={color} />
        {alternate.label}
      </Button.Content>
    </Button>
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
