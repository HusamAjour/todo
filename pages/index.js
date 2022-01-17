import { useEffect } from "react";

import Head from "next/head";

import MainShell from "@/components/MainShell";
import Header from "@/components/Header";
import List from "@/components/List";

import { useAuth } from "@/lib/auth";
import { useMode } from "@/lib/ModeContext";

export default function Home() {
  const auth = useAuth();
  const mode = useMode();

  useEffect(() => {
    document.body.className = `${mode} ${
      mode === "light" ? "bg-body-light" : "dark:bg-body-dark"
    } `;
  }, [mode]);
  return (
    <>
      <Head>
        <title>TODO</title>
        <meta name="description" content="Create your TODO list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainShell>
        <div className="max-w-540 m-auto px-[20px]">
          <Header />
          <List />
        </div>
      </MainShell>
    </>
  );
}
