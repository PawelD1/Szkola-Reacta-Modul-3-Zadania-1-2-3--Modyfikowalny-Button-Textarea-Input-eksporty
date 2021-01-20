import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { default as colors } from "../shared/Colors";
import { default as icons } from "../shared/Icons";

function Button(props) {
  const { icon, bgColor, color } = props;
  const styles = {
    backgroundColor: colors[bgColor],
    color: `${colors[`${color}`]}`,
    margin: "auto"
  };
  const theIcon = icons[icon];
  return (
    <button style={styles}>
      <FontAwesomeIcon icon={theIcon} />
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  label: "Click me!",
  color: "clouds",
  bgColor: "alizarin"
};

export default Button;
