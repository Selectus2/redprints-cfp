import { usePage } from "@inertiajs/react";

import Layout from "@/components/Layout";
import { OAuthButtons } from "@/components/OAuthButtons";

interface NewProps {
  oauth_providers: string[];
}

export default function New({ oauth_providers }: NewProps) {
  const { user, flash } = usePage().props;

  return (
    <Layout currentUser={user}>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="card border-secondary-800 w-full max-w-md border">
          <h1 className="mb-2 text-2xl font-bold">Sign in</h1>
          <p className="mb-8 text-neutral-600">
            Sign in to submit or manage your proposals.
          </p>
          <div className="flex flex-col space-y-3">
            {oauth_providers.map((provider) => (
              <div key={provider}>{OAuthButtons[provider]?.()}</div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
