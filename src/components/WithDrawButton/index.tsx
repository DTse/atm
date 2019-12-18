import React, { SFC, memo } from "react";

import { Button } from "@material-ui/core";

import { useWithDrawButtonStyles } from "./useWithDrawButtonStyles";

interface IWithDrawButtonProps {
  onClick: Function;
}

/**
 * Create the withdraw button component.
 * @param {function} onClick
 * @return {JSX.Element} <WithDrawButton>
 **/
const WithDrawButton: SFC<IWithDrawButtonProps> = ({
  onClick
}): JSX.Element => {
  const classes = useWithDrawButtonStyles();

  return (
    <Button
      className={classes.root}
      variant="outlined"
      color="primary"
      onClick={() => onClick()}
    >
      Withdraw
    </Button>
  );
};

export default memo(WithDrawButton);
