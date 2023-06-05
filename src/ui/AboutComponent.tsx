import { FC } from "react";
import * as React from "react";
import ContentWrapper from "./ContentWrapper";
import { Block } from "./Block";
import {About} from "../../tina/__generated__/types";

export interface AboutComponentProps extends Pick<About, "blocks"> {}

export const AboutComponent: FC<AboutComponentProps> = ({ blocks }) => {
  return (
    <ContentWrapper>
      {blocks?.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </ContentWrapper>
  );
};
