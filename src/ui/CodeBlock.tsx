import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import dax from "react-syntax-highlighter/dist/cjs/languages/prism/dax";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import { ArticleBlocksCode } from "@tinaGenerated";

SyntaxHighlighter.registerLanguage("dax", dax);
SyntaxHighlighter.registerLanguage("python", python);

type CodeBlockProps = Pick<ArticleBlocksCode, "lang" | "content">;

const CodeBlock: React.FC<CodeBlockProps> = ({ lang, content }) => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-secondary-200 via-primary-300 to-primary-600 p-0.5">
      <div className="rounded-xl bg-background-dracula py-px">
        <SyntaxHighlighter
          language={lang || "dax"}
          style={dracula}
          wrapLongLines
        >
          {content || ""}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
