import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t divide-y lg:divide-x lg:divide-y-0">
        <div className="space-y-10 px-10 md:py-14 py-10 lg:py-16">
          <p className="text-2xl">General Inquiries</p>
          <div className="space-y-5">
            <p className="flex gap-2 items-center text-neutral-500 border border-neutral-700 w-fit bg-white/5 px-5 py-2 rounded-lg">
              contact@ai-podcasts.com{" "}
              <ArrowUpRight className="text-primary" size={20} />
            </p>
            <p className="flex gap-2 items-center text-neutral-500 border border-neutral-700 w-fit bg-white/5 px-5 py-2 rounded-lg">
              +1 (123) 456-7890{" "}
              <ArrowUpRight className="text-primary" size={20} />
            </p>
          </div>
        </div>
        <div className="space-y-10 px-10 md:py-14 py-10 lg:py-16">
          <p className="text-2xl">Technical Support</p>
          <div className="space-y-5">
            <p className="flex gap-2 items-center text-neutral-500 border border-neutral-700 w-fit bg-white/5 px-5 py-2 rounded-lg">
              contact@ai-podcasts.com{" "}
              <ArrowUpRight className="text-primary" size={20} />
            </p>
            <p className="flex gap-2 items-center text-neutral-500 border border-neutral-700 w-fit bg-white/5 px-5 py-2 rounded-lg">
              +1 (123) 456-7890{" "}
              <ArrowUpRight className="text-primary" size={20} />
            </p>
          </div>
        </div>
        <div className="space-y-10 px-10 md:py-14 py-10 lg:py-16">
          <p className="text-2xl">Our Office</p>
          <div className="space-y-5">
            <p className="text-neutral-500 w-fit">
              Address: 123 AI Tech Avenue, Techville, 54321
            </p>
            <p className="flex gap-2 items-center text-neutral-500 border border-neutral-700 w-fit bg-white/5 px-5 py-2 rounded-lg">
              Get Direction
              <ArrowUpRight className="text-primary" size={20} />
            </p>
          </div>
        </div>
        <div className="space-y-10 px-10 md:py-14 py-10 lg:py-16">
          <p className="text-2xl">Connect with Us</p>
          <div className="flex gap-5">
            <p className="p-3 border rounded-lg text-white hover:opacity-50 transition-all duration-300 cursor-pointer bg-white/5">
              <Twitter size={24} fill="white" />
            </p>
            <p className="p-3 border rounded-lg text-white hover:opacity-50 transition-all duration-300 cursor-pointer bg-white/5">
              <Instagram size={24} fill="white" color="black" />
            </p>
            <p className="p-3 border rounded-lg text-white hover:opacity-50 transition-all duration-300 cursor-pointer bg-white/5">
              <Linkedin size={24} fill="white" />
            </p>
          </div>
        </div>
      </section>
      <section className="px-10 border-t grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-x lg:divide-y-0 items-center">
        <div className="space-y-10 py-10 max-w-[800px]">
          <Image src={"/icons/icon-10.svg"} alt="Icon" width={60} height={60} />
          <p className="text-4xl md:text-5xl lg:text-6xl">
            Get in Touch with AI Podcasts
          </p>
        </div>
        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 pl-0 lg:pl-10 gap-5 lg:gap-20 pb-5 lg:pb-10">
            <div className="space-y-3">
              <Label htmlFor="firstName">Full Name</Label>
              <Input placeholder="Enter Full Name" id="firstName" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="lastName">Last Name</Label>
              <Input placeholder="Enter Last Name" id="lastName" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 pl-0 lg:pl-10 gap-5 lg:gap-20 pb-5 lg:pb-10">
            <div className="space-y-3">
              <Label htmlFor="email">Email</Label>
              <Input placeholder="Enter your email" id="email" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input placeholder="Enter Phone Number" id="phoneNumber" />
            </div>
          </div>
          <div className="space-y-3 pl-0 lg:pl-10">
            <Label htmlFor="message">Message</Label>
            <Textarea placeholder="Enter your Message" id="message" rows={5} />
          </div>
          <div className="pl-0 lg:pl-10 mt-5 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">
                I agree with Terms of Use and Privacy Policy
              </Label>
            </div>
            <Button>Send</Button>
          </div>
        </div>
      </section>
      <section className="px-10 border-t grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-x lg:divide-y-0 items-center">
        <div className="space-y-10 py-10 max-w-[800px]">
          <Image src={"/icons/icon-11.svg"} alt="Icon" width={60} height={60} />
          <p className="text-3xl lg:text-4xl">Asked Questions</p>
          <Button
            variant={"outline"}
            className="gap-2 bg-white/5 border-2 border-input text-muted-foreground"
          >
            Ask Question <ArrowUpRight className="text-primary" size={20} />
          </Button>
        </div>
        <div className="py-10">
          <Accordion type="single" collapsible className="w-full pl-0 lg:pl-10">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is AI?</AccordionTrigger>
              <AccordionContent>
                AI stands for Artificial Intelligence, which refers to the
                simulation of human intelligence in machines. It enables them to
                perform tasks like problem-solving, learning, and
                decision-making.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I listen to your podcasts?
              </AccordionTrigger>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Are your podcasts free to listen to?
              </AccordionTrigger>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I download episodes to listen offline?
              </AccordionTrigger>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How often do you release new episodes?
              </AccordionTrigger>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
