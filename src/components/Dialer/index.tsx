import React, { FC } from "react";

import { Paper, GridList, GridListTile } from "@material-ui/core";

import DialerButton from "components/DialerButton";

import { useDialerStyles } from "./useDialerStyles";

interface IDialerProps {
  amount: number;
  onChange: Function;
  onSubmit: Function;
}

const NumberSet: Array<unknown> = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, -1];

const Dialer: FC<IDialerProps> = ({
  amount,
  onChange,
  onSubmit
}): JSX.Element => {
  const classes = useDialerStyles();

  const handleClick = ({ value }: { value: number }): void =>
    console.log(value);

  return (
    <Paper className={classes.root}>
      <GridList cellHeight={60} className={classes.gridList} cols={3}>
        {NumberSet.map(tile => (
          <GridListTile key={`button-grid-tile-${tile ? tile as number : '4545'}`} cols={1}>
            <DialerButton
              value={tile as number}
              label={tile as string}
              onClick={handleClick}
            />
          </GridListTile>
        ))}
      </GridList>
    </Paper>
  );
};

export default Dialer;
