import React, { SFC, memo } from "react";

import { Fab } from "@material-ui/core";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";

import { useDialerButtonStyles } from "./useDialerButtonStyles";

interface IDialerButtonProps {
  value: number;
  label: string;
  onClick?: Function;
}

const DialerButton: SFC<IDialerButtonProps> = ({
  value,
  label,
  onClick
}): JSX.Element => {
  const classes = useDialerButtonStyles();
  return value !== null ? (
    <Fab
      aria-label={label}
      className={classes.root} //hover color #e0e0e0
      onClick={() => onClick && onClick({ value: label })}
    >
      {value === -1 ? <BackspaceOutlinedIcon /> : label}
    </Fab>
  ) : (
    <div></div>
  );
};

export default memo(DialerButton);
