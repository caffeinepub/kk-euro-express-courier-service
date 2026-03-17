import { Outlet } from "@tanstack/react-router";
import ContactTopBar from "./ContactTopBar";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white/40 backdrop-blur-none">
      <ContactTopBar />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
