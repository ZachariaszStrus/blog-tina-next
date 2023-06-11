import React, { FC } from "react";

interface MediaBlockProps {
  file: string;
}

const MediaBlock: FC<MediaBlockProps> = ({ file }) => {
  return (
    <div className="flex w-full justify-center">
      <img src={file} alt={file} className="max-w-full rounded-xl" />
    </div>
  );
};

export default MediaBlock;
