import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GrenzeGotisch';
    src: url('/static/fonts/GrenzeGotisch-Regular.ttf');
    src: url('/static/fonts/GrenzeGotisch-Bold.ttf');
    src: url('/static/fonts/GrenzeGotisch-Black.ttf');
    src: url('/static/fonts/GrenzeGotisch-ExtraLight.ttf');
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'GrenzeGotisch';
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
