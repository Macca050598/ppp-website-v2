import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">Last updated: 6/7/2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email addresses for waitlist and communication purposes</li>
            <li>Usage data and analytics</li>
            <li>Device information (e.g., browser type, operating system)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and maintain our services</li>
            <li>Notify you about updates or changes</li>
            <li>Respond to customer inquiries and support requests</li>
            <li>Analyze usage trends to improve our app and experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information. Your data is stored securely and is not shared with third parties, except where necessary to provide our service or comply with legal obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access the personal data we hold about you</li>
            <li>Correct any inaccuracies in your data</li>
            <li>Request deletion of your personal information</li>
            <li>Withdraw your consent at any time</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
          <p className="mb-4">We may use third-party services for analytics, advertising, or other purposes. These third parties may use cookies or similar technologies to collect information about your use of our app. We are not responsible for the privacy practices of these third parties. We use third-party services to support core functionality of our app. These services may collect information used to identify you.

Specifically, we use RevenueCat to manage subscriptions and in-app purchases. You can learn more about how RevenueCat handles data by reviewing their Privacy Policy.

</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Google Analytics</li>
            <li>Google Ads</li>
            <li>EmailJS</li>
            <li>Vercel</li>
            <li>Product Hunt</li>
            <li>Vercel</li>
            <li>RevenueCat</li>
            
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:support@puppypottypal.com" className="text-blue-400 hover:text-blue-300">
              support@puppypottypal.com
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
