import Image from "next/image";

import { createClient } from "contentful";

export default async function Home() {
  const client = createClient({
    space: process.env.SPACE_ID!,
    accessToken: process.env.CONTENT_DELIVERY_API!,
  });

  const data = await client.getEntries({
    content_type: "naslovnaStranica",
  });

  //console.log(data.items[0].fields.slikaNaslovna);
  //console.log(data?.items[0]?.fields?.slikaNaslovna?.[0]?.fields.file);

  return (
    <div>
      <img
        src={(data.items[0].fields.slikaNaslovna as any)?.[0].fields.file.url}
      />
      <h1>{data.items[0].fields.naslov as any}</h1>
      <p>{data.items[0].fields.opisNaslovna as any}</p>
    </div>
  );
}
