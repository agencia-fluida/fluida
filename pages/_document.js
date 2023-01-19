import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head />
        <body>
          <Main />
          <NextScript />

          <noscript dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVR798H"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    }}></noscript>
    
          <script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/fd19d7b5-76e0-4f33-a072-a4b74eb6f8d1-loader.js" ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
