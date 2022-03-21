// additional file to add better seo + change meta titles and descriptions depending on screen
import React from "react";
import { useParams } from "react-router-dom";

export default function Meta({ children, ...overrides }) {
  const meta = {
    title: "One Free Pizza",
    description: `Get Free Pizza`,
    image: "https://avatars.githubusercontent.com/u/74473426?v=4",
    type: "website",
    ...overrides,
  };

  let params = useParams();

  return (
    <div>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`https://quelchx${params}`} />
      <link rel="canonical" href={`https://quelchx.com${params}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="quelchx.com" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wcbblez" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
      <div>{children}</div>
    </div>
  );
}
