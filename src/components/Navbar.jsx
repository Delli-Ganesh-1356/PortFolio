import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/all-projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary flex items-center">
          <span className="text-glow text-foreground">Delli Ganesh</span> Portfolio
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) =>
            item.href.startsWith("#") ? (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={key}
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            )
          )}

          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />}
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden">
            <div className="flex flex-col space-y-8 text-xl items-center">
              {navItems.map((item, key) =>
                item.href.startsWith("#") ? (
                  <a
                    key={key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={key}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )
              )}

              <button
                onClick={toggleDarkMode}
                className="mt-8 p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {darkMode ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-gray-700 dark:text-gray-300" />}
              </button>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 p-3 rounded-md border text-foreground hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                Close Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
