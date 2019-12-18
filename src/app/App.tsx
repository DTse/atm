import React, { FC, useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Dialer from "components/Dialer";
import ResponseModal from "components/ResponseModal";

import { withDrawRequest } from "services";

import { useAppStyles } from "./useAppStyles";

type DialerProps = {
  withdrawAmount: string;
};

/**
 * Create the main inteface.
 * @return {JSX.Element} <App>
 **/
const App: FC = () => {
  const classes = useAppStyles();
  const [amount, setAmount] = useState<string>("0");
  const [bankNotes, setBankNotes] = useState<Array<any>>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = ({ withdrawAmount }: DialerProps): void => {
    if (withdrawAmount === "-1") {
      var removeDigit = amount.substring(0, amount.length - 1);
      setAmount(removeDigit || "0");
    } else {
      var inputToNumber =
        amount === "0" ? withdrawAmount : amount + "" + withdrawAmount;
      setAmount(inputToNumber);
    }
  };

  const handleWithDraw = (): void => {
    withDrawRequest(amount).then((res: any) => {
      if (res.status === "success") {
        setBankNotes([...res.bankNotes]);
        setAmount("0");
        setModal(true);
      } else {
        setModal(true);
        setError(res.body);
        setAmount("0");
      }
    });
  };

  const handleModalClose = (): void => {
    setModal(false);
    setError("");
    setBankNotes([]);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Dialer
        amount={amount}
        onChange={handleChange}
        onSubmit={handleWithDraw}
      />
      <ResponseModal
        bankNotes={bankNotes}
        onClose={handleModalClose}
        open={modal}
        error={error}
      />
    </div>
  );
};

export default App;
