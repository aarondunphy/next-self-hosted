import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

type ServerPageProps = {
  names: string[];
};

export default function ServerPage({ names }: ServerPageProps) {
  return (
    <div>
      <Link href="/">Go Home</Link>
      <div>Names: {names.join(", ")}</div>
    </div>
  );
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
