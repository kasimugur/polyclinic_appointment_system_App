'use client'
import Appointment from "./components/Appointment";
import Hero from "./components/Hero";
import { useSiteContext } from "./context/SiteContext";

export default function Home() {
  const { isOpen } = useSiteContext()
  return (
    <>
      {/* <Appointment /> */}
      {isOpen ? <Hero /> : null}
    </>
  );
}
