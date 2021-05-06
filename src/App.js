import Content from "./Content";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e89eef",
    },
    secondary: {
      main: "#336b87",
    },
  },
  direction: "ltr",
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Content />
    </MuiThemeProvider>
  );
}

export default App;
