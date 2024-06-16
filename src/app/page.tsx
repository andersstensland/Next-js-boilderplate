import {
  Footer,
  FooterLink,
  FooterSection,
  FooterText,
} from "@/components/ui/footer";
import { Navbar, NavbarBrand, NavbarLink } from "@/components/ui/navbar";

export default function Home() {
  return (
    <main>
      <Navbar theme="dark" size="large">
        <NavbarBrand href="/" className="mr-auto">
          MySite
        </NavbarBrand>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="#" dropdown>
          Services
        </NavbarLink>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </Navbar>
      <h3>Footer component</h3>
      <Footer theme="dark" size="large">
        <FooterSection>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/services">Services</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterText>
            &copy; {new Date().getFullYear()} MySite. All rights reserved.
          </FooterText>
        </FooterSection>
      </Footer>
    </main>
  );
}
