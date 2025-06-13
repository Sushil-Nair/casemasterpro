import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-6">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-bold">Case Master Pro</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A fast, free, and distraction-free case converter for your writing
              flow. Transform your text instantly with our powerful and
              intuitive tool.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="#features"
                className="text-muted-foreground hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#about"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Other Tools</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Case Master Pro API
              </Link>
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </div>
        <div className="border-t pt-6 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Case Master Pro. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {/* <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
