import { ArticleDetailsComponent, CommentsGiscus } from "@ui";
import { notFound } from "next/navigation";
import client from "../../../../tina/__generated__/client";

// export const dynamicParams = false;
//
// export const generateStaticParams = async () => {
//   const response = await api.articleSlugList();
//
//   return (
//     response.articles?.data
//       ?.filter(({ attributes }) => !!attributes?.slug)
//       ?.map(({ attributes }) => ({ slug: attributes?.slug as string })) || []
//   );
// };

const ArticleDetails = async ({ params }: { params: { slug: string } }) => {
  // const response = await api.articleDetails({ slug: params.slug || "" });
  // const article = response?.article?.data?.attributes;
  //
  // if (!article) {
  //   return notFound();
  // }
  //
  // return (
  //   <div className="flex w-full flex-col">
  //     {article && (
  //       <ArticleDetailsComponent
  //         title={article.title}
  //         blocks={article.blocks}
  //         createdAt={article.createdAt}
  //       />
  //     )}
  //   </div>
  // );

  const { data } = await client.queries.article({ relativePath: `${params.slug}.md` })
  const article = data.article;

  return (
    <div className="flex w-full flex-col">
      {article && (
        <ArticleDetailsComponent
          title={article.title}
          blocks={article.blocks}
          publishedAt={article.publishedAt}
        />
      )}
    </div>
  );
};
export default ArticleDetails;
