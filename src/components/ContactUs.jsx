import { Mail, MessageCircle, Phone, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Email",
      icon: Mail,
      description:
        "Have a complex inquiry or need to share detailed information? Send us an email, and our team will respond within 24 hours during business days.",
      linkText: "Send us an email",
      linkHref: "mailto:support@healthsync.com",
    },
    {
      title: "Agent Live Chat",
      icon: MessageCircle,
      description:
        "Need immediate assistance? Connect with our customer support agents through live chat for real-time problem-solving and guidance.",
      linkText: "Start a live chat",
      linkHref: "#",
    },
    {
      title: "WhatsApp Chat",
      icon: Phone,
      description:
        "Prefer messaging through WhatsApp? Reach our support team directly on your favorite messaging platform for convenient communication.",
      linkText: "Chat on WhatsApp",
      linkHref: "https://wa.me/1234567890",
    },
    {
      title: "In-app Messaging",
      icon: MessageSquare,
      description:
        "Already using our app? Contact us directly through the in-app messaging feature for seamless support without leaving the application.",
      linkText: "Open in-app chat",
      linkHref: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-sky-200 p-6 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                <method.icon className="w-12 h-12 text-gray-600" />
              </div>
              <h2 className="text-2xl font-semibold text-center text-gray-800">
                {method.title}
              </h2>
              <p className="text-gray-700 mt-4 text-center">
                {method.description}
              </p>
              <a
                href={method.linkHref}
                className="mt-6 text-blue-600 hover:text-blue-800 underline text-center block"
              >
                {method.linkText}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
