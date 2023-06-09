import { ArticleListComponent } from "./ArticleListComponent";
import { Text } from "@ui";
import { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import * as React from "react";
import NextLink from "next/link";
import { routes } from "@utils";
import { Article } from "@tinaGenerated";

interface HomeProps {
  articles: Pick<
    Article,
    "title" | "id" | "publishedAt" | "description" | "_sys"
  >[];
  page: number;
  pageCount: number;
}

export const ArticleList: FC<HomeProps> = ({ articles, pageCount, page }) => {
  const prevPage = page === 1 ? undefined : page - 1;
  const nextPage = page === pageCount ? undefined : page + 1;

  // todo: create base content wrapper - for handling px-6 md:px-8
  return (
    <div className="flex flex-1 flex-col px-6 md:px-8 lg:px-0">
      <div className="flex flex-1 flex-col gap-4">
        {articles?.map((article) => (
          <ArticleListComponent
            key={article.id}
            title={article.title}
            createdAt={article.publishedAt}
            description={article.description}
            slug={article._sys.filename}
          />
        ))}
      </div>
      <div className="mb-2 mt-8 flex items-center justify-center gap-x-4">
        {prevPage ? (
          <NextLink href={routes.articleList(prevPage)}>
            <ChevronLeftIcon className="h-6 w-6" />
          </NextLink>
        ) : (
          <div className="h-6 w-6" />
        )}
        <Text pb>
          {page}
          <Text p faded span>
            {" / "}
            {pageCount}
          </Text>
        </Text>
        {nextPage ? (
          <NextLink href={routes.articleList(nextPage)}>
            <ChevronRightIcon className="h-6 w-6" />
          </NextLink>
        ) : (
          <div className="h-6 w-6" />
        )}
      </div>
    </div>
  );
};
