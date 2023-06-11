import React, { FC } from "react";
import { ArticleBlocksRichText } from "@tinaGenerated";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface RichTextProps extends Pick<ArticleBlocksRichText, "body"> {}

const RichText: FC<RichTextProps> = ({ body }) => {
  return (
    <div className="prose prose-invert max-w-none">
      <TinaMarkdown content={body} />
    </div>
  );
};

export default RichText;
