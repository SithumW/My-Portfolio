// Schema.org structured data for SEO
export const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sithum Weerasinghe",
  "alternateName": "SithumW",
  "url": "https://sithumweerasinghe.com",
  "sameAs": [
    "https://github.com/SithumW",
    "https://www.linkedin.com/in/sithum-weerasinghe-309629197",
    "https://twitter.com/"
  ],
  "jobTitle": "Full Stack Developer",
  "description": "Sithum Weerasinghe (SithumW) is a full stack developer specializing in building innovative, scalable web applications using modern technologies like React, Node.js, and JavaScript.",
  "image": "/src/assets/og-image.png",
  "knowsAbout": [
    "Full Stack Development",
    "Web Development",
    "React",
    "Node.js",
    "JavaScript",
    "CTF Security",
    "Web Architecture"
  ],
  "contact": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "sithumnirmal2002@gmail.com"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sithum Weerasinghe Portfolio",
  "url": "https://sithumweerasinghe.com",
  "description": "Full Stack Developer Portfolio",
  "image": "/src/assets/og-image.png",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://sithumweerasinghe.com?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};
