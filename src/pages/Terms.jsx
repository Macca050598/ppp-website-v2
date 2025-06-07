import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-300 mb-4">Last updated: 6/7/2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing or using Puppy Potty Pal, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access or use the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the app for personal, non-commercial transitory use only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained in the app</li>
            <li>Remove any copyright or proprietary notices</li>
            <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on Puppy Potty Pal are provided on an &apos;as is&apos; basis. We make no warranties, express or implied, and hereby disclaim and negate all other warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="mb-4">
            In no event shall Puppy Potty Pal or its suppliers be liable for any damages (including, without limitation, loss of data, profit, or business interruption) arising out of the use or inability to use the materials on the app, even if we or an authorized representative have been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the United Kingdom. You agree to submit to the exclusive jurisdiction of the courts located in the UK for the resolution of any disputes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Subscriptions and Payments</h2>
          <p className="mb-4">
          Our app offers subscription-based features. Payments and subscription management are handled securely via RevenueCat, which integrates with Apple&apos;s in-app purchase system.

All purchases are subject to Apple&apos;s terms and policies. We do not directly collect or store payment information.          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
