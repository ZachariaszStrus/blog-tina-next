import { ArticleList } from "@ui";
import { client } from "@tinaGenerated";
import { Article } from "@tinaGenerated";

const HomePage = async () => {
  const { data } = await client.queries.articleConnection();

  const articles =
    (data.articleConnection.edges
      ?.filter((e) => !!e)
      .map((e) => e?.node) as Article[]) || [];

  return <ArticleList articles={articles} page={1} pageCount={1} />;
};
export default HomePage;
