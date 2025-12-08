import { schemaMarkup, websiteSchema } from '../utils/seoSchema';

export default function SEOHead() {
  // Add structured data to head
  if (typeof document !== 'undefined') {
    // Person Schema
    const personSchema = document.createElement('script');
    personSchema.type = 'application/ld+json';
    personSchema.textContent = JSON.stringify(schemaMarkup);
    document.head.appendChild(personSchema);

    // Website Schema
    const websiteSchemaScript = document.createElement('script');
    websiteSchemaScript.type = 'application/ld+json';
    websiteSchemaScript.textContent = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteSchemaScript);
  }

  return null;
}
