import Layout from "../components/Layout";
import { Scroll } from "../components/Scroll";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
  return (
    <Scroll>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Scroll>
  );
}

export default MyApp;
