import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  keywords: string;
  url: string;
};

const Meta = ({ title, description, keywords, url }: Props) => {
  return (
    <Head>
      {/* default */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1" />
      <meta name="application-name" content={title} />

      {/* basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* icons all browsers */}
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/" />

      {/* icons google and chrome*/}
      <link rel="icon" type="image/png" sizes="48x48" href="/icons/" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icons/" />

      {/* icon ipad*/}
      <link rel="apple-touch-icon" type="image/png" sizes="167x167" href="/icons/" />

      {/* icon iphone */}
      <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/icons/" />

      {/* preload/prefetch (if needed) */}
      {/* <link rel='preload' href='' as='' />
      <link rel='prefetch' href='' as='' /> */}

      {/* open graph / social media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image" content="" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="" />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:url" content={url} />
    </Head>
  );
};

Meta.defaultProps = {
  title: '',
  description: '',
  keywords: '',
  url: '',
};

export default Meta;
