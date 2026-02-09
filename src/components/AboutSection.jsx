import { Layers, Code, User } from "lucide-react";
import { Element } from "react-scroll";

export const AboutSection = () => {
  return (
    <Element name="about">
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Passionate Web Developer
              </h3>

              <p className="text-muted-foreground">
                Currently in my 6th semester of CS, I have spent my academic career mastering the full web stack. I am equally comfortable building intuitive front-end interfaces as I am developing efficient back-end systems, always prioritizing accessibility and modern standards.
              </p>
              <p className="text-muted-foreground">
                I am a lifelong learner currently transitioning into Data Science for my Master’s. I am passionate about using data to build smarter web solutions and am constantly seeking new challenges that push my technical boundaries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a className="cosmic-button" href="#contact">
                  Get In Touch
                </a>
                <a
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                  href="/CV.pdf"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      Creating responsive websites and web applications with
                      modern frameworks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                    <p className="text-muted-foreground">
                      Designing intuitive user interfaces and seamless user
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      System Architecture
                    </h4>
                    <p className="text-muted-foreground">
                      Understanding how the pieces fit together, from database 
                      logic and API integration to the final user-facing product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
