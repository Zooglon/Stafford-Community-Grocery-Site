import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 className="heading__main">Welcome</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Stafford Community Grocery</title>;
