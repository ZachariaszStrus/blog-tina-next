import { ArticleList } from "@ui";
import { notFound } from "next/navigation";
import client from "../../tina/__generated__/client";

const HomePage = async () => {
  // const response = await api.articleList({ page: 1 });
  //
  // if (!response.articles?.data || !response.articles?.meta) {
  //   notFound();
  // }
  //
  // const articles = response.articles.data;
  // const { pageCount } = response.articles.meta.pagination;
  //
  // return <ArticleList articles={articles} page={1} pageCount={pageCount} />;

  const { data } = await client.queries.articleConnection()

  const articles = data.articleConnection.edges?.map(e => e?.node) || []

  return <ArticleList articles={articles} page={1} pageCount={1} />;
};
export default HomePage;
