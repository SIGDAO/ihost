import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="/assets/favicon.ico"
      />
      <meta name="title" content="iHost" />
      <meta
        name="description"
        content="iHost is a website where you can generate NFT collections and create an NFT minting website. Metadata utilities available for post-generation."
      />
      <meta
        name="keywords"
        content="iHost, Host NFT, Mint Website, Mint NFT Website Hosting, Mint NFT, NFT, Mint, Crypto Currency, Crypto, Ethereum"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="en" />
      <meta name="theme-color" content="#753FE5" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://domainein.info/" />
      <meta
        property="og:title"
        content="iHost - Generate &#38; Host your NFT Collection"
      />
      <meta
        property="og:description"
        content="iHost is a website where you can generate NFT collections and create an NFT minting website. Metadata utilities available for post-generation."
      />
      <meta
        property="og:image"
        content="https://domainein.info/assets/nfthost-og.png"
      />
      <meta property="og:image:alt" content="iHost OpenGraph Picture" />
      <meta property="og:site_name" content="iHost" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://domainein.info/" />
      <meta
        property="twitter:title"
        content="iHost - Generate &#38; Host your NFT Collection"
      />
      <meta
        property="twitter:description"
        content="iHost is a website where you can generate NFT collections and create an NFT minting website. Metadata utilities available for post-generation."
      />
      <meta
        property="twitter:image"
        content="https://domainein.info/assets/nfthost-og.png"
      />
      <meta
        property="twitter:image:alt"
        content="iHost TwitterCard Picture"
      />
    </Head>
  );
};

export default Meta;
