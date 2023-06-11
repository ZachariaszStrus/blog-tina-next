import React from "react";
import { AboutComponent } from "@ui";
import { client } from "@tinaGenerated";

export const revalidate = false;

const Page = async () => {
  const {
    data: { about },
  } = await client.queries.about({ relativePath: "about.json" });

  return <AboutComponent blocks={about?.blocks || []} />;
};

export default Page;
