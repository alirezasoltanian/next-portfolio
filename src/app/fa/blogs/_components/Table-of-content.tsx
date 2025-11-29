import React from "react";
import StareRate from "./stare-rate";
import { slugify } from "@/lib/utils";
// https://www.cmrg.me/blog
// https://www.joshwcomeau.com/css/center-a-div/
// https://www.igorbedesqui.com/writing/schrodinger-minimalism
// https://yusuf.fyi/posts/contentlayer-table-of-contents/
// TABLE OF CONTENTS contentlayer
// https://paco.me/craft
function TableOfContent({ heading }: { heading: string[] | undefined }) {
  return (
    <div className="flex flex-col w-full gap-2 blog-text">
      <p className="my-1 blog-title text-lg ">تیتر های بلاگ</p>
      {(heading ?? []).map((item, index) => (
        <div key={index}>
          <a href={`#${slugify(item)}`}>{item}</a>
        </div>
      ))}
      <StareRate />
    </div>
  );
}

export default TableOfContent;
