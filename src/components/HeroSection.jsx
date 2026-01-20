import { ArrowDown, Moon } from "lucide-react";
import { Element, Link } from 'react-scroll'

export const HeroSection = () => {
  return (
    <Element name="hero">
        <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Olasz
                </span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Bálint
                </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                Computer Science student finishing my 5th semester. I’m a Web Developer dedicated to writing clean, maintainable code and creating intuitive interfaces. I enjoy solving problems at every level of the development process and am currently seeking an internship to grow professionally.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                View My Work
                </a>
            </div>
            </div>
        </div>
        <Link to="about" smooth={true} duration={500}>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
                </div>
        </Link>
        </section>
    </Element>
  );
};
