import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> */}

    <link rel="stylesheet" href="./fonts/icomoon/style.css"/>

    <link rel="stylesheet" href="./css/owl.carousel.min.css"/>

    <link rel="stylesheet" href="./css/bootstrap.min.css"/>
    
    <link rel="stylesheet" href="./css/style.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="./js/jquery-3.3.1.min.js"/>
        <script src="./js/popper.min.js"/>
        <script src="./js/bootstrap.min.js"/>
        <script src="./js/jquery.sticky.js"/>
        <script src="./js/main.js"/>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
