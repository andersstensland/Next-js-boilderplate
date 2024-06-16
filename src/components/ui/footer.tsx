import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define detailed footer variants using `cva`
const footerVariants = cva(
  [
    "mx-auto w-full max-w-screen-xl p-4",
    {
      light: "bg-white text-black",
      dark: "bg-gray-900 text-white",
    },
  ],
  {
    variants: {
      theme: {
        light: "bg-white text-gray-900 border-gray-200 dark:border-gray-700",
        dark: "bg-gray-900 text-white dark:border-gray-700",
      },
      size: {
        small: "py-4 text-xs",
        large: "py-8 text-base",
      },
      layout: {
        simple: "flex justify-between",
        complex: "md:flex md:justify-between",
      },
    },
    compoundVariants: [
      {
        theme: "dark",
        layout: "complex",
        className: "dark:text-white dark:bg-gray-900",
      },
    ],
    defaultVariants: {
      theme: "light",
      size: "large",
      layout: "complex",
    },
  }
);

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof footerVariants> {}

const Footer = ({ className, theme, size, layout, ...props }: FooterProps) => (
  <footer
    className={cn(footerVariants({ theme, size, layout }), className)}
    {...props}
  />
);

const FooterSection = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3", className)}
    {...props}
  />
);

const FooterLink = ({
  className,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={cn("hover:underline", className)} href={href} {...props} />
);

const FooterText = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm", className)} {...props} />
);

export { Footer, FooterSection, FooterLink, FooterText };
