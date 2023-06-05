import React from "react";
import { AboutComponent } from "@ui";
import { notFound } from "next/navigation";
import client from "../../../tina/__generated__/client";

export const revalidate = false;

const Page = async () => {
  // const response = await api.aboutDetails();
  //
  // if (!response?.about?.data?.attributes) {
  //   notFound();
  // }
  //
  // const aboutData = response.about.data.attributes;
  //
  // return <AboutComponent blocks={aboutData.blocks} />;

  const { data: { about } } = await client.queries.about({ relativePath: "about.json" });

  return <AboutComponent blocks={about?.blocks || []} />;
};

export default Page;
