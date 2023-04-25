import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles.scss";
import MainPage from "../components/MainPage";
import InfoPage from "../components/InfoPage";
import ContactPage from "../components/ContactPage";
import Nav from "../components/Nav";
import Box from "../components/Box";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Nav />
      <section>
        <MainPage />
        <InfoPage />
        <ContactPage />
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Stafford Community Grocery</title>;
