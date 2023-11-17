import { GetServerSideProps } from "next";
import React from "react";

type ServerPageProps = {
  names: string[];
};

export default function ServerPage({ names }: ServerPageProps) {
  return <div>Names: {names.join(", ")}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const names = ["Aaron", "Matt", "Hayden"];
  console.log({ names });
  return {
    props: {
      names,
    },
  };
};
