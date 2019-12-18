import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import blue from "@material-ui/core/colors/blue";

export const useWithDrawButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: 40,
      color: blue[500],
      borderColor: blue[500],
      textTransform: "capitalize",
      fontSize: 15,
      fontWeight: 400,
      marginTop: 10,
      "&:hover": {
        borderColor: blue[500],
        background: blue[500],
        color: "white"
      }
    }
  })
);
