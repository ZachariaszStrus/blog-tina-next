import { MainTemplate } from "@ui";
import { client } from "@tinaGenerated";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await client.queries.global({
    relativePath: `global.json`,
  });
  const global = data.global;

  return {
    title: global.siteName,
    icons: {
      icon: global.favIcon,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [
    {
      data: { header },
    },
    {
      data: { about },
    },
  ] = await Promise.all([
    client.queries.header({ relativePath: "header.json" }),
    client.queries.about({ relativePath: "about.json" }),
  ]);

  return (
    <MainTemplate
      header={header}
      isAboutInfoAvailable={!!about?.blocks?.length}
      socialMediaItems={[]}
    >
      {children}
    </MainTemplate>
  );
}
