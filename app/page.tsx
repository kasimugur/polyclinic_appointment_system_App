'use client'
import LoginPage from "./(auth)/login/page";
import Hero from "./components/Hero";
import { useSiteContext } from "./context/SiteContext";

export default function Home() {
  const { isOpen } = useSiteContext()
  return (
    <>
      {isOpen ? <Hero /> : <LoginPage />}
    </>
  );
}
