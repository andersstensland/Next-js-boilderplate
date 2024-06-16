import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import { NavbarDropdown } from "./navbardropdown";

// Define navbar variants using `cva`
const navbarVariants = cva("flex items-center justify-between p-4 shadow-md", {
  variants: {
    theme: {
      light: "bg-white text-black",
      dark: "bg-slate-900 text-white",
    },
    size: {
      small: "text-sm py-2",
      large: "text-lg py-4",
    },
  },
  defaultVariants: {
    theme: "light",
    size: "large",
  },
});

export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  asChild?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  asChild,
  className,
  theme,
  size,
  ...props
}) => {
  const Comp = asChild ? Slot : "nav";
  return (
    <Comp
      className={cn(navbarVariants({ theme, size }), className)}
      {...props}
    />
  );
};

const NavbarBrand = ({
  className,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof navbarVariants>) => (
  <a
    className={cn("text-xl font-bold", navbarVariants({}), className)}
    href={href}
    {...props}
  />
);

const NavbarLink = ({
  className,
  href,
  dropdown,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof navbarVariants> & { dropdown?: boolean }) => {
  if (dropdown) {
    return <NavbarDropdown>{children}</NavbarDropdown>;
  }
  return (
    <a
      className={cn(
        "text-sm text-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md focus:outline-none",
        navbarVariants({}),
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};

export { Navbar, NavbarBrand, NavbarLink };
