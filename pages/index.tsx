import { useState } from "react";
import Head from "next/head";
import Header from "./Header";
import TagSelector from "./TagSelector";
import ResourceContainer from "./ResourceContainer";

const Home: any = () => {
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div>
      <Head>
        <title>Resources</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TagSelector />
      <ResourceContainer />
    </div>
  );
};

export default Home;
