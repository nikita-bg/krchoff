import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Nikita Kratcholov",
  description:
    "Terms of Service for krchoff.com. Please read these terms carefully.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service — Nikita Kratcholov",
    description:
      "Terms of Service for krchoff.com. Please read these terms carefully.",
    url: "/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Nikita Kratcholov",
    description:
      "Terms of Service for krchoff.com. Please read these terms carefully.",
  },
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
        </header>

        <article className="prose-blog mt-16">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using the krchoff.com website (the "Site"), you
            accept and agree to be bound by the terms and provision of this
            agreement. If you do not agree to abide by the above, please do not
            use this service.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on krchoff.com for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may
            not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>
              Use the materials for any commercial purpose or for any public
              display
            </li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials
            </li>
            <li>
              Transfer the materials to another person or "mirror" the
              materials on any other server
            </li>
            <li>
              Use the Site in any way that infringes upon the rights of others
              or restricts or inhibits the use and enjoyment of the Site
            </li>
          </ul>

          <h2>Disclaimer</h2>
          <p>
            The materials on krchoff.com are provided on an "as-is" basis.
            Nikita Kratcholov makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall Nikita Kratcholov or suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on krchoff.com, even if Nikita
            Kratcholov or an authorized representative has been notified orally
            or in writing of the possibility of such damage.
          </p>

          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on krchoff.com could include technical,
            typographical, or photographic errors. Nikita Kratcholov does not
            warrant that any of the materials on the Site are accurate, complete
            or current. Nikita Kratcholov may make changes to the materials
            contained on the Site at any time without notice.
          </p>

          <h2>Links</h2>
          <p>
            Nikita Kratcholov has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by
            Nikita Kratcholov of the site. Use of any such linked website is at
            the user's own risk.
          </p>

          <h2>Modifications</h2>
          <p>
            Nikita Kratcholov may revise these terms of service for the website
            at any time without notice. By using this website, you are agreeing
            to be bound by the then current version of these terms of service.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of the jurisdiction in which Nikita
            Kratcholov resides, and you irrevocably submit to the exclusive
            jurisdiction of the courts in that location.
          </p>

          <h2>User Content and Submissions</h2>
          <p>
            When you submit information through our contact form or any other
            means, you grant Nikita Kratcholov a non-exclusive, royalty-free,
            perpetual, irrevocable, and fully sublicensable right to use,
            reproduce, modify, adapt, publish, translate, create derivative
            works from, distribute, and display such content worldwide in any
            media.
          </p>

          <h2>Intellectual Property Rights</h2>
          <p>
            All content on krchoff.com, including text, graphics, logos, images,
            and software, is the property of Nikita Kratcholov or its content
            suppliers and is protected by international copyright laws. You may
            not reproduce, distribute, or transmit the content without prior
            written consent.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            The Site may utilize third-party services including but not limited
            to email services and analytics platforms. Your use of these
            services is subject to their respective terms of service and privacy
            policies. Nikita Kratcholov is not responsible for the actions or
            policies of these third parties.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at:
          </p>
          <ul>
            <li>Email: support@simplifyopsco.com</li>
            <li>Website: krchoff.com</li>
          </ul>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms of Service is found to be invalid or
            unenforceable, the remaining provisions shall remain in full force
            and effect, and the invalid provision shall be modified to the
            minimum extent necessary to make it valid and enforceable.
          </p>

          <h2>Entire Agreement</h2>
          <p>
            These Terms of Service constitute the entire agreement between you
            and Nikita Kratcholov regarding your use of the Site and supersede
            all prior negotiations, representations, and agreements.
          </p>
        </article>
      </main>
    </div>
  );
}
