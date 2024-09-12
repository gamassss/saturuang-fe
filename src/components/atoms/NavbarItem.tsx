import Link from "next/link";
import React from "react";
export type NavbarItemProps = {
  href: string;
  label: string;
};

const NavbarItem = React.memo(function NavbarItem({
  href,
  label,
}: NavbarItemProps) {
  return (
    <Link
      href={href}
      className="text-white hover:underline font-semibold text-base"
      passHref
    >
      {label}
    </Link>
  );
});

export default NavbarItem;
