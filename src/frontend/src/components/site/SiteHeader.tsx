import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      style={{ borderColor: "oklch(0.9 0.01 250)" }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/assets/generated/kk-euro-express-logo.dim_512x512.png"
            alt="KK Euro Express"
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-xl font-bold gradient-text">
            KK Euro Express
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              className={`px-4 py-2 text-sm font-semibold transition-all rounded-lg ${
                currentPath === link.path
                  ? "text-white"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
              }`}
              style={
                currentPath === link.path
                  ? {
                      background:
                        "linear-gradient(135deg, oklch(0.68 0.2 48), oklch(0.6 0.22 25))",
                    }
                  : {}
              }
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="ml-4 btn-gradient-orange text-white font-bold rounded-lg shadow-glow"
          >
            <Link to="/contact" data-ocid="nav.contact.button">
              Contact Us
            </Link>
          </Button>
          <Link
            to="/admin"
            data-ocid="nav.admin.link"
            className={`ml-2 px-3 py-1.5 text-xs font-medium transition-colors rounded-md ${
              currentPath === "/admin"
                ? "bg-muted text-muted-foreground"
                : "text-muted-foreground/50 hover:text-muted-foreground hover:bg-muted/50"
            }`}
          >
            Admin
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex items-center space-x-3 mb-8">
              <img
                src="/assets/generated/kk-euro-express-logo.dim_512x512.png"
                alt="KK Euro Express"
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-lg font-bold gradient-text">
                KK Euro Express
              </span>
            </div>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-semibold transition-colors rounded-lg ${
                    currentPath === link.path
                      ? "text-white"
                      : "text-foreground/70 hover:bg-muted/60 hover:text-foreground"
                  }`}
                  style={
                    currentPath === link.path
                      ? {
                          background:
                            "linear-gradient(135deg, oklch(0.68 0.2 48), oklch(0.6 0.22 25))",
                        }
                      : {}
                  }
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                data-ocid="nav.admin.link"
                className="px-4 py-2 text-sm text-muted-foreground/50 hover:text-muted-foreground transition-colors rounded-md"
              >
                Admin
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
