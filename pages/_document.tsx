import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

// Edits the document to add lang='en' to the <html> tag (only needed for static build)
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
