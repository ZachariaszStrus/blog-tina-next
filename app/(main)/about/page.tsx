import React from "react";
import { AboutComponent } from "@ui";
import { notFound } from "next/navigation";

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
  return <AboutComponent blocks={[]} />;
};

export default Page;
