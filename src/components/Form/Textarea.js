import React from "react";

import colors from '../shared/Colors';

function TextArea(props) {
    const {bgColor, color, borderColor, borderRadius, borderSize} = props;
    const styles = {
      backgroundColor: colors[bgColor],
      color: `${colors[`${color}`]}`,
      borderColor: colors[borderColor],
      borderRadius: borderRadius,
      borderWidth: borderSize,
      padding: 'auto',
      margin: 'auto',
      width: 200,
      height: 100
    };
    return <textarea style={styles}/>
  }

  TextArea.defaultProps = {
    bgColor: 'orchidOrange',
    color: 'alizarin',
  };

  export default TextArea;