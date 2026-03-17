import { Link } from "@tanstack/react-router";
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { SiInstagram } from "react-icons/si";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "kk-euro-express";

  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/generated/kk-euro-express-logo.dim_512x512.png"
                alt="KK Euro Express"
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-lg font-bold gradient-text">
                KK Euro Express
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Fast, reliable courier services with worldwide shipping to the UK,
              USA, Canada, Italy, and destinations around the globe.
            </p>
            <a
              href="https://www.instagram.com/kkeuroexpress_banga/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: "oklch(0.52 0.14 320)" }}
            >
              <SiInstagram className="h-4 w-4" />
              @kkeuroexpress_banga
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-wider"
              style={{ color: "oklch(0.48 0.2 48)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-wider"
              style={{ color: "oklch(0.35 0.15 195)" }}
            >
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Express Delivery</li>
              <li>International Freight</li>
              <li>Standard Shipping</li>
              <li>Domestic Courier</li>
              <li>Vacuum Service</li>
              <li>Indo-Canadian Bus Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-wider"
              style={{ color: "oklch(0.42 0.18 95)" }}
            >
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Mail
                  className="h-4 w-4 shrink-0"
                  style={{ color: "oklch(0.48 0.2 48)" }}
                />
                <a
                  href="mailto:eurobanga@gmail.com"
                  className="hover:text-gray-900 transition-colors"
                >
                  eurobanga@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone
                  className="h-4 w-4 shrink-0"
                  style={{ color: "oklch(0.35 0.15 195)" }}
                />
                <a
                  href="tel:+917973673529"
                  className="hover:text-gray-900 transition-colors"
                >
                  79736-73529
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone
                  className="h-4 w-4 shrink-0"
                  style={{ color: "oklch(0.35 0.15 195)" }}
                />
                <a
                  href="tel:+917508731303"
                  className="hover:text-gray-900 transition-colors"
                >
                  75087-31303
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone
                  className="h-4 w-4 shrink-0"
                  style={{ color: "oklch(0.52 0.18 130)" }}
                />
                <a
                  href="tel:+918283856248"
                  className="hover:text-gray-900 transition-colors"
                >
                  82838-56248
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  className="h-4 w-4 mt-0.5 shrink-0"
                  style={{ color: "oklch(0.42 0.18 95)" }}
                />
                <span>Near Canara Bank, Main Rd, SBS Nagar, 144505</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} KK Euro Express. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Built with{" "}
            <Heart className="h-3.5 w-3.5 fill-red-400 text-red-400" /> using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
