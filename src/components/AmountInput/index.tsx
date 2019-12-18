import React, { SFC, memo } from "react";

import { TextField } from "@material-ui/core";
import NumberFormatCustom from "./NumberFormat";

import { useAmountInputStyles } from "./useAmountInputStyles";

interface IDialerButtonProps {
  value: number;
}

const AmountInput: SFC<IDialerButtonProps> = ({ value }): JSX.Element => {
  const classes = useAmountInputStyles();

  return (
    <TextField
      className={classes.root}
      value={value}
      InputProps={{
        disableUnderline: true,
        inputProps: {
          style: { textAlign: "right", fontSize: 30, fontWeight: 400 }
        },
        inputComponent: NumberFormatCustom as any
      }}
    />
  );
};

export default memo(AmountInput);
