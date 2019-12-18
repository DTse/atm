import React, { SFC, memo } from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle
} from "@material-ui/core";

import { useResponseModalStyles } from "./useResponseModalStyles";
import MoneyIcon from "@material-ui/icons/Money";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

interface IBankNotesListKeys {
  banknoteValue: number;
  quantity: number;
}

interface IResponseModal {
  bankNotes: Array<IBankNotesListKeys>;
  onClose: Function;
  open: boolean;
  error?: string;
}

interface IBankNotesListProps {
  bankNotes: Array<IBankNotesListKeys>;
  classes: {
    listItem: string;
  };
}

/**
 * Create the bank notes list.
 * @param {array} bankNotes
 * @param {object} classes
 * @return {JSX.Element} <App>
 **/
const BankNotesList: SFC<IBankNotesListProps> = ({
  bankNotes,
  classes
}): JSX.Element => {
  return (
    <ul style={{ padding: 0 }}>
      {bankNotes.map((value, key) => (
        <li className={classes.listItem} key={key}>
          <MoneyIcon style={{ marginRight: 5, marginBottom: 5 }} /> $
          {value.banknoteValue} x {value.quantity}
        </li>
      ))}
    </ul>
  );
};

/**
 * Create the modal for displaying the withdraw result.
 * @param {array} bankNotes
 * @param {function} onClose
 * @param {string} error
 * @param {boolean} open
 * @return {JSX.Element} <ResponseModal>
 **/
const ResponseModal: SFC<IResponseModal> = ({
  bankNotes,
  onClose,
  error,
  open
}): JSX.Element => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useResponseModalStyles();

  return (
    <Dialog
      fullScreen={fullScreen}
      classes={{ paper: classes.root }}
      open={open}
      onClose={() => onClose()}
      aria-labelledby="response-modal"
    >
      <DialogTitle id="responsive-dialog-title">
        {error && error.length > 0 ? "Error" : "Success"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {!error || error.length < 0 || bankNotes.length > 0 ? (
            <>
              Please take your cash
              <BankNotesList
                bankNotes={bankNotes}
                classes={{ listItem: classes.listItem }}
              />
            </>
          ) : (
            error
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(ResponseModal);
