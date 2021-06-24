import React from "react";
import { AccountPageBody } from "../components/Account/AccountPageBody";
import { Nav } from "../components/Nav/Nav";

interface Props {}

export const AccountPage: React.FC<Props> = ({}) => {
  return (
    <>
      <Nav />
      <AccountPageBody />
    </>
  );
};
