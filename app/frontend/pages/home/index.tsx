import { Link, usePage } from "@inertiajs/react";
import {
  CalendarIcon,
  FileTextIcon,
  MapPinIcon,
  UsersIcon,
} from "lucide-react";

import Layout from "@/components/Layout";
import { OAuthButtons } from "@/components/OAuthButtons";

interface IndexProps {
  oauth_providers: string[];
}

export default function Index({ oauth_providers }: IndexProps) {
  const { user, cfp_closed } = usePage().props;

  return (
    <Layout currentUser={user}>
      <div className="from-primary-500 to-primary-700 shadow-medium animate-fade-in mb-12 rounded-xl bg-gradient-to-b p-8 text-white">
        <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          RubyConf India 2026 — Call for Proposals
        </h1>
        <p className="text-cloud-50 max-w-3xl text-lg">
          Discover the spirit of Ruby. Connect, code, celebrate — share your
          story with India’s Ruby community.
        </p>
        <div className="text-primary-100 mt-8 flex flex-wrap gap-4">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-5 w-5" />
            <span>November 21, 2026</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="mr-2 h-5 w-5" />
            <span>Hyderabad, India</span>
          </div>
          <div className="flex items-center">
            <UsersIcon className="mr-2 h-5 w-5" />
            <span>Single-track Ruby conference</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="animate-slide-up space-y-8">
          <div>
            <h2 className="text-secondary-800 mb-4 text-2xl font-bold">
              Proposal Guidelines
            </h2>
            <div className="space-y-6">
              <p>
                Thank you for your interest in speaking at RubyConf India 2026!
                This year, we are looking for talks that demonstrate how Ruby
                is being used in production, beyond traditional Rails
                applications, and across emerging areas such as AI, mobile
                applications, games, developer tooling, and alternative
                frameworks.
              </p>
              <p>We invite proposals across the following themes:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <span className="font-medium">Ruby in Production</span>
                  <p>
                    Share real-world experiences of building, scaling,
                    operating, and maintaining Ruby applications in
                    production.
                  </p>
                  <p>Topics may include:</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Application architecture and system design</li>
                    <li>Performance optimisation and scalability</li>
                    <li>Reliability, monitoring, and observability</li>
                    <li>Background processing and distributed systems</li>
                    <li>Database performance and data modelling</li>
                  </ul>
                </li>
              </ul>
              <p>
                Talks are 30 minutes including Q&A. We’re especially keen on
                proposals that are:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Educational and informative</li>
                <li>Grounded in real-world experience</li>
                <li>Accessible to Ruby developers of all levels</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-secondary-800 mb-4 text-2xl font-bold">
              Selection Process
            </h2>
            <div className="space-y-4">
              <p>
                All proposals will be thoughtfully reviewed by our program
                committee. Talks will be selected based on the following
                criteria:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Relevance to the specified tracks</li>
                <li>Originality and freshness of the topic</li>
                <li>Speaker’s experience and expertise</li>
                <li>Overall balance of the conference program</li>
              </ul>
              <p>
                <span className="font-medium">Important dates:</span>
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>CFP closes: August 23, 2026 (IST)</li>
                <li>Notifications: rolling, within ~3 weeks of close</li>
                <li>Conference: November 21, 2026, Hyderabad</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-secondary-800 mb-4 text-2xl font-bold">
              Speaker Benefits
            </h2>
            <div className="space-y-4 text-neutral-700">
              <p>Selected speakers will receive:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>A complimentary conference ticket</li>
                <li>Invitation to the speaker dinner</li>
              </ul>
              <p>
                To help keep our conference affordable, we kindly ask that you
                check if your employer is able to support your travel. If so,
                we’d be happy to recognize them as a travel sponsor.
              </p>
              <p>We look forward to your proposals!</p>
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:pl-8">
          <div
            data-test-id="home-actions"
            className="card border-secondary-800 animate-slide-up border"
            style={{ animationDelay: "0.1s" }}
          >
            {cfp_closed && (
              <>
                <h3 className="mb-6 text-xl font-bold">
                  The call for proposals is now closed
                </h3>
                <p className="mb-8 text-neutral-600">
                  Than you everyone for your submissions! You will hear from us
                  shortly!
                </p>
              </>
            )}
            {!cfp_closed && (
              <>
                <h3 className="mb-6 text-xl font-bold">
                  Ready to share your expertise?
                </h3>
                <p className="mb-8 text-neutral-600">
                  We welcome proposals from speakers of all experience levels.
                  Whether you’re a seasoned presenter or a first-time speaker,
                  we want to hear from you!
                </p>
              </>
            )}
            <div className="flex flex-col space-y-2">
              {!user &&
                oauth_providers.map((provider: string) => (
                  <div key={provider}>{OAuthButtons[provider]()}</div>
                ))}

              {user && !cfp_closed && (
                <Link
                  href={`/proposals/new`}
                  className="btn btn-primary flex items-center justify-center"
                >
                  Submit a Proposal
                </Link>
              )}

              {user && (
                <Link
                  href={`/proposals`}
                  className="btn btn-outline flex items-center justify-center"
                >
                  <FileTextIcon className="mr-2 h-5 w-5" />
                  View My Proposals
                </Link>
              )}
            </div>
          </div>

          <div
            className="card border-secondary-800 animate-slide-up border"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="mb-4 text-xl font-bold">Have questions?</h3>
            <p className="mb-6">
              If you have any questions about the CFP process or need help with
              your proposal, feel free to reach out to our team.
            </p>
            <a
              href="mailto:team@rubyconfindia.org"
              className="text-primary-600 hover:text-primary-800 inline-flex items-center font-medium transition-colors"
            >
              Contact the CFP team
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
