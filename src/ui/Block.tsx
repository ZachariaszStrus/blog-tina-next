import { ArticleBlocksDynamicZone } from "@api";
import MediaBlock from "./MediaBlock";
import RichText from "./RichText";
import CodeBlock from "./CodeBlock";
import * as React from "react";
import {ArticleBlocks} from "../../tina/__generated__/types";

export const Block = ({
  block,
}: {
  block: ArticleBlocks | null;
}) => {
  switch (block?.__typename) {
    case "ArticleBlocksMedia":
      return <MediaBlock {...block} />;
    case "ArticleBlocksRichText":
      return <RichText {...block} />;
    case "ArticleBlocksCode":
      // maxWidth necessary - otherwise SyntaxHighlighter is too wide on smaller screens
      return (
        <div style={{ maxWidth: "calc(100vw - 64px)" }}>
          <CodeBlock {...block} />
        </div>
      );
    default:
      return null;
  }
};
