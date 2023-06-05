import { ArticleBlocksDynamicZone } from "@api";
import MediaBlock from "./MediaBlock";
import RichText from "./RichText";
import CodeBlock from "./CodeBlock";
import * as React from "react";
import {AboutBlocks, ArticleBlocks} from "../../tina/__generated__/types";

export const Block = ({
  block,
}: {
  block: ArticleBlocks | AboutBlocks | null;
}) => {
  switch (block?.__typename) {
    case "ArticleBlocksMedia":
    case "AboutBlocksMedia":
      return <MediaBlock {...block} />;
    case "ArticleBlocksRichText":
    case "AboutBlocksRichText":
      return <RichText {...block} />;
    case "ArticleBlocksCode":
    case "AboutBlocksCode":
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
