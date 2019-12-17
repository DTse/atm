import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import grey from "@material-ui/core/colors/grey";

export const useDialerButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "none",
      backgroundColor: grey[100],
      "&:hover": {
        backgroundColor: grey[300]
      }
    },
    gridList: {
      width: "100%",
      height: 350
    }
  })
);
