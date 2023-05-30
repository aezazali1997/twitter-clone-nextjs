import React from "react";
import { Sidebar } from "../components/Sidebar";
import { FollowBar } from "@/components/Followbar";
import { Providers } from "../GlobalState";
interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Providers>
      <div className="h-screen bg-black">
        <div className="container h-full max-w-6xl mx-auto xl:px-30">
          <div className="grid h-full grid-cols-4">
            <Sidebar />
            <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
              {children}
            </div>
            <FollowBar />
          </div>
        </div>
      </div>
    </Providers>
  );
};
