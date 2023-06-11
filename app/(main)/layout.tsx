import { MainTemplate } from "@ui";
import { client } from "@tinaGenerated";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {},
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // const response = await api.globalDetails();
  // const global = response.global?.data?.attributes;
  //
  // return (
  //   <>
  //     <DefaultTags />
  //     {global?.siteName && <title>{global.siteName}</title>}
  //     {global?.favicon?.data?.attributes?.url && (
  //       <link
  //         rel="shortcut icon"
  //         // @ts-ignore
  //         precedence="default"
  //         href={global.favicon?.data?.attributes?.url}
  //       />
  //     )}
  //   </>
  // );
  return {};
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
