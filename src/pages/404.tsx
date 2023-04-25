import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import "../styles.scss";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 className="heading__main">Oops!</h1>
      <h1 className="heading__sub">You've found an empty shelf!</h1>
      <p>Click below to head back</p>
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
