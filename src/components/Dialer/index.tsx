import React, { FC } from "react";

import { Paper, GridList, GridListTile } from "@material-ui/core";

import DialerButton from "components/DialerButton";

import { useDialerStyles } from "./useDialerStyles";
import WithDrawButton from "components/WithDrawButton";
import AmountInput from "components/AmountInput";

interface IDialerProps {
  amount: string;
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
    onChange({ withdrawAmount: value });

  return (
    <Paper className={classes.root}>
      <AmountInput value={amount} />
      <GridList cellHeight={60} className={classes.gridList} cols={3}>
        {NumberSet.map(tile => (
          <GridListTile
            classes={{ tile: classes.gridListTiletile }}
            key={`button-grid-tile-${
              tile ? (tile as number) : tile === null ? "empty" : "back"
            }`}
            cols={1}
          >
            <DialerButton
              value={tile as number}
              label={String(tile)}
              onClick={handleClick}
            />
          </GridListTile>
        ))}
      </GridList>
      <WithDrawButton onClick={onSubmit} />
    </Paper>
  );
};

export default Dialer;
