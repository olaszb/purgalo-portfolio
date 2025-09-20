import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground ">
        &copy; {new Date().getFullYear()} balintolasz.dev All rights reserved.
      </p>

      <Link
        to="hero"
        smooth={true}
        duration={700}
        className="cursor-pointer p-2 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transition-colors"
      >
        <ArrowUp size={20}/>
      </Link>
    </footer>
  );
};
