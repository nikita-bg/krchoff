import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Nikita Kratcholov",
  description:
    "Privacy policy for krchoff.com. Learn how we collect and use information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Nikita Kratcholov",
    description:
      "Privacy policy for krchoff.com. Learn how we collect and use information.",
    url: "/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Nikita Kratcholov",
    description:
      "Privacy policy for krchoff.com. Learn how we collect and use information.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-editorial text-foreground transition-opacity duration-300 hover:opacity-70"
        >
          NK
        </Link>
        <Link
          href="/"
          className="font-sans text-xs uppercase tracking-wide-nav text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          &larr; Back
        </Link>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pb-28 pt-12 lg:px-12 lg:pb-36">
        <header className="text-center">
          <p className="font-sans text-xs uppercase tracking-wide-nav text-accent">
            Last updated February 2026
          </p>
          <h1 className="mt-4 font-serif text-3xl font-light tracking-editorial text-foreground md:text-5xl">
            Privacy Policy
          </h1>
        </header>

        <article className="prose-blog mt-16">
          <h2>Introduction</h2>
          <p>
            Nikita Kratcholov ("we," "us," "our," or "Company") operates the
            krchoff.com website (the "Site"). This Privacy Policy explains how
            we collect, use, and protect your information when you visit our
            Site.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide to us through
            our contact form, including your name, email address, and message
            content. This information is used solely to respond to your inquiry.
          </p>
          <p>
            When you visit our Site, we automatically collect certain technical
            information through Google Analytics, including your IP address,
            browser type, pages visited, and time spent on the Site. This data
            helps us understand how visitors use the Site and improve our
            content.
          </p>

          <h2>Cookies and Tracking</h2>
          <p>
            Our Site does not use cookies for tracking purposes. Google
            Analytics may set cookies to help track your interactions, but you
            can opt out of this tracking by installing the Google Analytics
            opt-out browser extension or adjusting your browser settings.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Respond to your inquiries and support requests</li>
            <li>
              Understand how visitors interact with our Site through Google
              Analytics
            </li>
            <li>Improve our Site's content and user experience</li>
            <li>Maintain and update our Site</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We only share information with service providers necessary
            for Site operations (such as email service for contact form
            submissions). All service providers are contractually obligated to
            maintain your information confidentially.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your information against unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the Internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our Site may contain links to third-party websites. We are not
            responsible for the privacy practices of these external sites. We
            encourage you to review their privacy policies before providing any
            personal information.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy
            practices, please contact us at:
          </p>
          <ul>
            <li>Email: support@simplifyopsco.com</li>
            <li>Website: krchoff.com</li>
          </ul>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated "Last Updated" date. We
            encourage you to review this policy periodically to stay informed
            about how we protect your information.
          </p>

          <h2>Legal Basis</h2>
          <p>
            Our collection and use of information is based on your consent (for
            contact form submissions) and our legitimate business interests (for
            Site analytics and improvement).
          </p>
        </article>
      </main>
    </div>
  );
}
