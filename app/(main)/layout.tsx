import { MainTemplate } from "@ui";
import client from "../../tina/__generated__/client";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [responseHeader, responseAbout, responseSocial] = await Promise.all([
  //   api.headerDetails(),
  //   api.aboutDetails(),
  //   api.socialMedia(),
  // ]);
  // const header = responseHeader.header?.data?.attributes;
  // const about = responseAbout.about?.data?.attributes;
  // // todo: fix graphql typing
  // const socialMedia = (responseSocial.socialMedia?.data?.attributes?.items ||
  //   []) as Pick<ComponentSharedSocialMediaItem, "title" | "icon" | "url">[];
  //
  // return (
  //   <MainTemplate
  //     header={header}
  //     isAboutInfoAvailable={!!about}
  //     socialMediaItems={socialMedia}
  //   >
  //     {children}
  //   </MainTemplate>
  // );

  const { data: { header } } = await client.queries.header({ relativePath: "header.json" });
  const { data: { about } } = await client.queries.about({ relativePath: "about.json" });

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
