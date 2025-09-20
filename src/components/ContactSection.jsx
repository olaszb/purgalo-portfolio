import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { Element } from "react-scroll";
import {cn} from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);

        formData.append("access_key", "d9edc949-5e3c-4758-a195-14d9110464d9");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body:json
        }).then((res) => res.json());

        if (res.success){
            console.log("Success", res);
        }

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message! I'll get back to you soon!"
            });
            setIsSubmitting(false);
        }, 1500);

        
    }

  return (
    <Element name="contact">
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to callaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:olasz.g48@gmail.com"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      olasz.g48@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors cursor-default">
                      Budapest, HU
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://x.com/purgalo"
                    className="hover:text-primary"
                    target="_blank"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.instagram.com/olasblint/"
                    className="hover:text-primary"
                    target="_blank"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://www.facebook.com/purgalo"
                    className="hover:text-primary"
                    target="_blank"
                  >
                    <Facebook />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="John Doe..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="something@gmail.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                )}>
                    {isSubmitting ? "Submitting..." : "Send Message" }
                    <Send size={16}/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
