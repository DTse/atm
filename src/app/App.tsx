import React, { FC, useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Dialer from "components/Dialer";
import ResponseModal from "components/ResponseModal";

import { withDrawRequest } from "services";

import { useAppStyles } from "./useAppStyles";

type DialerProps = {
  withdrawAmount: number;
};

const App: FC = () => {
  const classes = useAppStyles();
  const [amount, setAmount] = useState<number>(0);
  const [bankNotes, setBankNotes] = useState([]);

  const handleChange = ({ withdrawAmount }: DialerProps): void => {
    var inputToNumber = Number("" + amount + withdrawAmount);
    setAmount(inputToNumber);
  };

  const handleWithDraw = (): void => {
    withDrawRequest(amount).then((res: any) => {
      if (res.status === "success") {
        setBankNotes(bankNotes);
      }
    });
  };

  const handleModalClose = (): void => setBankNotes([]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Dialer
        amount={amount}
        onChange={handleChange}
        onSubmit={handleWithDraw}
      />
      <ResponseModal bankNotes={bankNotes} onClose={handleModalClose} />
    </div>
  );
};

export default App;
