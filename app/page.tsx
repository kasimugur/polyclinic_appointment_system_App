'use client'
import Hero from "./components/Hero";
import { useSiteContext } from "./context/SiteContext";

export default function Home() {
  const { isOpen } = useSiteContext()
  return (
    <>
      {isOpen ? <Hero /> : null}
    </>
  );
}
