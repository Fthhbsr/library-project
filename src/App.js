import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import AppRouter from "./router/AppRouter";
import { GlobalStyles } from "./styles/Global.styles";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
      <AppRouter />
    </ThemeProvider>
  
)
}

export default App;
