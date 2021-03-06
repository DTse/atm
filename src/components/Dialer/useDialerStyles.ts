import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useDialerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: 280,
      padding: "15px 20px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 0px 30px 1px rgba(0,0,0,.1)",
      "-webkit-box-shadow": "0px 0px 30px 1px rgba(0,0,0,.1)",
      borderRadius: 15
    },
    gridList: {
      width: "100%",
      height: 300
    },
    gridListTiletile: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    withDrawGridTile: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "column"
    }
  })
);
