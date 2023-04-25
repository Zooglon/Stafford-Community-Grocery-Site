import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles.scss";
import MainPage from "../components/MainPage";
import InfoPage from "../components/InfoPage";
import ContactPage from "../components/ContactPage";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <MainPage />
      <InfoPage />
      <ContactPage />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Stafford Community Grocery</title>;
