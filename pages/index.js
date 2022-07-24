import App from "../src/components/App";
import { ThemeProvider } from "../src/components/context/ThemeContext";

const IndexPage = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default IndexPage;
