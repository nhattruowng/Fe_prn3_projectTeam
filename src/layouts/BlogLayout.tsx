import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";

export const BlogLayout:React.FC = () => {
  return(
      <>
          <div className="min-h-screen flex flex-col">
              <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
                  <Header/>
              </header>
              <main className="pt-[85px] flex-1">
                  <Outlet/>
              </main>
          </div>
      </>
  );
}