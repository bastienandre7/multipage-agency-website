import ContactComponent from "@/components/contact/ContactComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to start your next project? Get in touch with our team. We'd love to discuss how we can help bring your digital vision to life.",
  openGraph: {
    title: "Contact Us - Orbit Agency",
    description:
      "Ready to start your next project? Get in touch with our team. We'd love to discuss how we can help bring your digital vision to life.",
    url: "https://orbit-agency.com/contact",
  },
};

export default function ContactPage() {
  return <ContactComponent />;
}
