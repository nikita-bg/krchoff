import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        <div className="flex gap-6 font-sans text-xs tracking-wide-nav text-muted-foreground">
          <Link
            href="/privacy"
            className="transition-colors duration-300 hover:text-accent"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="transition-colors duration-300 hover:text-accent"
          >
            Terms of Service
          </Link>
        </div>
        <p className="text-center font-sans text-xs tracking-wide-nav text-muted-foreground">
          &copy; 2026 Nikita Kratcholov &middot; krchoff.com
        </p>
      </div>
    </footer>
  );
}
