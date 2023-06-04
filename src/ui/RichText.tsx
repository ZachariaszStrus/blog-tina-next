import React, { FC } from "react";
import Markdown from "markdown-to-jsx";
import {ArticleBlocksRichText} from "../../tina/__generated__/types";
import {TinaMarkdown} from "tinacms/dist/rich-text";

interface RichTextProps extends Pick<ArticleBlocksRichText, "body"> {}

const RichText: FC<RichTextProps> = ({ body }) => {
  // return <Markdown className="prose prose-invert max-w-none">{body}</Markdown>;
  return (
      <div className="prose prose-invert max-w-none">
        <TinaMarkdown content={body} />
      </div>
  );
};

export default RichText;
