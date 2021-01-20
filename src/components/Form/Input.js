import React from "react";

import colors from "../shared/Colors";

function Input(props) {
  const { bgColor, color, borderColor, borderRadius, borderSize } = props;
  const styles = {
    backgroundColor: colors[bgColor],
    color: `${colors[`${color}`]}`,
    margin: "auto",
    borderColor: colors[borderColor],
    borderRadius: borderRadius,
    borderWidth: borderSize
  };
  return <input style={styles} />;
}

Input.defaultProps = {
  bgColor: "orchidOrange",
  color: "alizarin",
  borderSize: 50,
  borderRadius: 30
};

export default Input;
