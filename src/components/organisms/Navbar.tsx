"use client";

import { Button } from "../ui/button";
import NavbarItem from "../atoms/NavbarItem";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

const navbarItems: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#chat-rooms", label: "Chat Rooms" },
  { href: "#faq", label: "FAQ" },
];

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 bg-primary py-4 px-4 md:px-20 lg:px-32 backdrop-blur-sm text-white ${
        isOpen && "bg-black/80"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-8">
          {children}

          <ul className="hidden md:flex gap-x-4 text-sm">
            {navbarItems.map(({ href, label }) => (
              <li key={label}>
                <NavbarItem href={href} label={label} />
              </li>
            ))}
          </ul>
        </div>

        <Button
          variant="secondary"
          aria-label="Login to your account"
          className="hidden md:block text-primary py-2 px-6"
        >
          Start a chat
        </Button>

        <div className="flex items-center md:hidden">
          <Button
            variant="secondary"
            aria-label="Login to your account"
            className=""
          >
            Start a chat
          </Button>
          <Hamburger size={16} toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
      {isOpen && <MobileMenu />}
    </nav>
  );
};

const MobileMenu = () => {
  return (
    <div className="py-16">
      <ul className="flex flex-col items-center gap-y-6 font-semibold text-base h-screen">
        {navbarItems.map(({ href, label }) => (
          <li
            key={label}
            className="border-b-2 border-slate-700 text-center py-2 w-3/4"
          >
            <NavbarItem href={href} label={label} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
