import React from "react";
import { MainPageBody } from "../components/MainPage/MainPageBody";
import { Nav } from "../components/Nav/Nav";
import "../styles/MainPage.css";

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = ({}) => {
  return (
    <>
      <Nav />
      <MainPageBody />
    </>
  );
};
