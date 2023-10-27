import React from "react";

interface msgProps {
  message: string;
}

export const Header = ({ message }: msgProps) => {
  return (
    <header className="mx-auto mt-2">
      <h1 className="text-2xl mt-8 md:text-4xl font-bold font-redhat text-yellow-500 text-center mx-auto ">
        {message ? message : "Brandon starts at Suncorp in"}
      </h1>
    </header>
  );
};
