import { ArticleDetailsComponent, CommentsGiscus } from "@ui";
import { Metadata } from "next";
import { client } from "@tinaGenerated";

interface ArticleDetailsParams {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: ArticleDetailsParams;
}): Promise<Metadata> {
  const { data } = await client.queries.article({
    relativePath: `${params.slug}.json`,
  });
  const article = data.article;

  return {
    title: article.title,
  };
}

const ArticleDetails = async ({ params }: { params: ArticleDetailsParams }) => {
  const { data } = await client.queries.article({
    relativePath: `${params.slug}.json`,
  });
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
