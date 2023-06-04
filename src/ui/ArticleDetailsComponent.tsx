import { FC } from "react";
import { Text } from "./Text";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import * as React from "react";
import ContentWrapper from "./ContentWrapper";
import { Block } from "./Block";
import { CommentsGiscus } from "./CommentsGiscus";
import {Article} from "../../tina/__generated__/types";

export interface ArticleDetailsComponentProps
  extends Pick<Article, "title" | "publishedAt" | "blocks"> {}

export const ArticleDetailsComponent: FC<ArticleDetailsComponentProps> = ({
  title,
  blocks,
  publishedAt,
}) => {
  return (
    <ContentWrapper>
      <div className="mb-8 flex flex-col gap-y-4">
        <Text h2>{title}</Text>
        {publishedAt && (
          <Text c faded className="pb-3">
            {format(parseISO(publishedAt), "PPP")}
          </Text>
        )}
      </div>
      <div className="flex flex-col gap-y-8">
        {blocks?.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>
      <div className="my-8">
        <CommentsGiscus />
      </div>
    </ContentWrapper>
  );
};
