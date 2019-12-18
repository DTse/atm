import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useResponseModalStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 100,
      maxWidth: 300,
      width: "100%"
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      listStyle: "none"
    }
  })
);
