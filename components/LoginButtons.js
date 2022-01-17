import React from "react";

export function GoogleButton(props) {
  return (
    <button
      type="button"
      className="rounded-[0.25rem] text-bold inline-flex items-center justify-center relative px-[1rem] min-w-[4.5rem] h-[2.5rem] bg-white align-middle	leading-[1.2]	text-[1rem] whitespace-nowrap	w-full shadow-md mb-2"
      {...props}
    >
      <svg
        viewBox="0 0 533.5 544.3"
        focusable="false"
        role="presentation"
        aria-hidden="true"
        className="w-[1em] h-[1em] inline-block -ml-[0.25rem] mr-[0.5rem]"
      >
        <g>
          <path
            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
            fill="#4285f4"
          ></path>
          <path
            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
            fill="#34a853"
          ></path>
          <path
            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
            fill="#fbbc04"
          ></path>
          <path
            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
            fill="#ea4335"
          ></path>
        </g>
      </svg>
      <span className="pt-[5px]">Continue with Google</span>
    </button>
  );
}

export function TwitterButton(props) {
  return (
    <button
      type="button"
      className="rounded-[0.25rem] text-bold inline-flex items-center justify-center relative px-[1rem] min-w-[4.5rem] h-[2.5rem] bg-[#55ACEE] text-white align-middle	leading-[1.2]	text-[1rem] whitespace-nowrap	w-full shadow-md mb-2"
      {...props}
    >
      <svg
        viewBox="0 0 20 20"
        focusable="false"
        role="presentation"
        aria-hidden="true"
        className="w-[1em] h-[1em] inline-block -ml-[0.25rem] mr-[0.5rem]"
      >
        <path
          d="M20 3.924a8.212 8.212 0 01-2.357.646 4.111 4.111 0 001.804-2.27c-.792.47-1.67.812-2.605.996A4.103 4.103 0 009.85 7.038a11.645 11.645 0 01-8.458-4.287 4.118 4.118 0 00-.555 2.066 4.1 4.1 0 001.825 3.415 4.074 4.074 0 01-1.858-.513v.052a4.105 4.105 0 003.29 4.022 4.01 4.01 0 01-1.852.072 4.106 4.106 0 003.833 2.85A8.268 8.268 0 010 16.411a11.602 11.602 0 006.29 1.846c7.547 0 11.674-6.253 11.674-11.675 0-.18-.004-.355-.01-.53.8-.58 1.496-1.3 2.046-2.125"
          fill="#FFF"
          fillRule="evenodd"
        ></path>
      </svg>
      <span className="pt-[5px]">Continue with Twitter</span>
    </button>
  );
}
export function FacebookButton(props) {
  return (
    <button
      type="button"
      className="rounded-[0.25rem] text-bold inline-flex items-center justify-center relative px-[1rem] min-w-[4.5rem] h-[2.5rem] bg-[#3B5998] text-white align-middle	leading-[1.2]	text-[1rem] whitespace-nowrap	w-full shadow-md mb-2"
      {...props}
    >
      <svg
        viewBox="0 0 20 20"
        focusable="false"
        role="presentation"
        aria-hidden="true"
        className="w-[1em] h-[1em] inline-block -ml-[0.25rem] mr-[0.5rem]"
      >
        <path
          d="M18.007 19c.55 0 .993-.444.993-.993V1.993A.992.992 0 0018.007 1H1.993A.992.992 0 001 1.993v16.014c0 .55.444.993.993.993h16.014zm-4.587 0v-6.97h2.34l.35-2.717h-2.69V7.578c0-.786.218-1.322 1.346-1.322h1.438v-2.43a18.915 18.915 0 00-2.096-.108c-2.073 0-3.494 1.267-3.494 3.59v2.005H8.268v2.717h2.346V19h2.806z"
          fill="#fff"
          fillRule="evenodd"
        ></path>
      </svg>
      <span className="pt-[5px]">Continue with Facebook</span>
    </button>
  );
}

export function GithubButton(props) {
  return (
    <button
      type="button"
      className="rounded-[0.25rem] text-bold inline-flex items-center justify-center relative px-[1rem] min-w-[4.5rem] h-[2.5rem] bg-black text-white align-middle	leading-[1.2]	text-[1rem] whitespace-nowrap	w-full shadow-md mb-2"
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        aria-hidden="true"
        className="w-[1em] h-[1em] inline-block -ml-[0.25rem] mr-[0.5rem]"
      >
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </g>
      </svg>
      <span className="pt-[5px]">Continue with Google</span>
    </button>
  );
}
