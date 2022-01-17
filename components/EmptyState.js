import React from "react";

import { useAuth } from "@/lib/auth";

import {
  GoogleButton,
  TwitterButton,
  FacebookButton,
  GithubButton,
} from "./LoginButtons";

function EmptyState(props) {
  const auth = useAuth();

  return (
    <>
      <h1 className="m-0 text-white text-center text-30px mobile:text-[20px] tracking-[18px] font-bold">
        TODO
      </h1>
      <p className="text-center text-white text-xl">
        Login with your favorite platform
      </p>
      <div className="flex items-center justify-center flex-col w-[280px] sm:w-[400px] m-auto mt-10">
        <GoogleButton onClick={() => auth.signinWithGoogle()} />
        <FacebookButton onClick={() => auth.singinWithFacebook()} />
        {/* <TwitterButton onClick={() => auth.singinWithTwitter()} /> */}
        <GithubButton onClick={() => auth.singinWithGithub()} />
      </div>
    </>
  );
}

export default EmptyState;
