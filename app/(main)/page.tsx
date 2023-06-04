import { ArticleList } from "@ui";
import { notFound } from "next/navigation";
import client from "../../tina/__generated__/client";
import {Article} from "../../tina/__generated__/types";

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

  const articles = data.articleConnection.edges?.filter(e => !!e)
      .map(e => e?.node) as Article[] || []

  return <ArticleList articles={articles} page={1} pageCount={1} />;
};
export default HomePage;
