import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const offices = [
    {
      city: "London",
      address: "1 Canada Square,\nLondon E14 5AB, United Kingdom",
    },
    {
      city: "Berlin",
      address: "Rosenthaler Str. 72A,\n10119 Berlin, Germany",
    },
    {
      city: "Paris",
      address: "10 Rue de la Paix,\n75002 Paris, France",
    },
    {
      city: "Tokyo",
      address: "Shibuya Scramble Square,\nShibuya City, Tokyo 150-0002, Japan",
    },
    {
      city: "Sydney",
      address: "161 Castlereagh St,\nSydney NSW 2000, Australia",
    },
    {
      city: "Toronto",
      address: "100 King St W,\nToronto, ON M5X 1A9, Canada",
    },
  ];

  const socialLinks = [
    { href: "https://twitter.com", label: "Twitter", icon: "x.svg" },
    { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin.svg" },
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: "instagram.svg",
    },
    { href: "https://dribbble.com", label: "Dribbble", icon: "dribbble.svg" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
                Let&apos;s Talk
              </h2>
              <div className="space-y-4">
                <div>
                  <a
                    href="mailto:hey@orbit.com"
                    className="text-xl lg:text-2xl text-white/80 hover:text-white transition-colors duration-300"
                  >
                    hey@orbit.com
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+14157966262"
                    className="text-xl lg:text-2xl text-white/80 hover:text-white transition-colors duration-300"
                  >
                    +1 7478 63232 9262
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group"
                    >
                      <span className="sr-only">{social.label}</span>
                      <Image
                        src={`/icons/${social.icon}`}
                        alt={social.label}
                        width={20}
                        height={20}
                        className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <nav className="space-y-4">
                {navigationLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-lg text-white/80 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-5">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {offices.map((office) => (
                  <div key={office.city}>
                    <h3 className="text-lg font-semibold mb-3 text-white">
                      {office.city}
                    </h3>
                    <address className="text-white/70 not-italic leading-relaxed whitespace-pre-line">
                      {office.address}
                    </address>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-white/60">
              © 2020 – {currentYear} Orbit Agency, LLC
            </div>

            <div className="flex gap-8">
              <Link
                href="/"
                className="text-white/60 hover:text-white/80 transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                href="/"
                className="text-white/60 hover:text-white/80 transition-colors duration-300"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
