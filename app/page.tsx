'use client'
import Appointment from "./components/Appointment";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";
import { useSiteContext } from "./context/SiteContext";

export default function Home() {
  const { isOpen,openDash } = useSiteContext()
  return (
    <>
      {/* <Appointment /> */}
      {isOpen ? <Hero /> : null}
      {openDash ? <Dashboard/> : null}
    </>
  );
}
