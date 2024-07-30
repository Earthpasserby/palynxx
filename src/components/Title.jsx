import { Helmet } from "react-helmet";

function Title({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
      {/* <meta
        name="description"
        content="Find the perfect companion for your next event with our app! Our app pairs you up with like-minded people who share your interests - from music festivals to sporting events. Join the waitlist!"
      />
      <meta name="keywords" content="HTML, SEO" /> */}
      <meta property="og:title" content={title} />
      {/* <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Find the perfect companion for your next event with our app! Our app pairs you up with like-minded people who share your interests - from music festivals to sporting events. Join the waitlist!"
      />
      <meta
        property="og:image"
        content="https://cdn.prod.website-files.com/645a668d85c9b45bb27cf73b/663377259ca1ef4de011b3f0_Palynx%20OG%20Graph.png"
      />
      <meta
        content="https://cdn.prod.website-files.com/645a668d85c9b45bb27cf73b/663377259ca1ef4de011b3f0_Palynx%20OG%20Graph.png"
        property="twitter:image"
      />
      <meta property="og:url" content="https://www.palynx.com/" />
      <meta name="twitter:card" content="summary_large_image" /> */}
    </Helmet>
  );
}

export default Title;
