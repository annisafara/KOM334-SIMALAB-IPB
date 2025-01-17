import { Box, ThemeProvider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import CustomTheme from "@/themes/default";

import LabSidebarDrawer from "@/components/navigation/LabSidebarDrawer";
import LabTopbar from "@/components/navigation/LabTopbar";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100vw",
  },
}));

function TestingIndex({ children }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={CustomTheme}>
      <Box className={classes.container}>
        <LabSidebarDrawer />
        <LabTopbar />
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default TestingIndex;
