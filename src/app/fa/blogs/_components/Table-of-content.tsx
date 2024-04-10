import React from "react";
import StareRate from "./stare-rate";
import { slugify } from "@/lib/utils";
// https://www.cmrg.me/blog
// https://www.joshwcomeau.com/css/center-a-div/
// https://www.igorbedesqui.com/writing/schrodinger-minimalism
// https://yusuf.fyi/posts/contentlayer-table-of-contents/
// TABLE OF CONTENTS contentlayer
// https://paco.me/craft
function TableOfContent({ heading }: { heading: string[] }) {
  return (
    <div>
      <h2>TableOfContent or TCG</h2>
      {heading.map((item, index) => (
        <div key={index}>
          <a href={`#${slugify(item)}`}>{item}</a>
        </div>
      ))}
      <StareRate />
    </div>
  );
}

export default TableOfContent;
