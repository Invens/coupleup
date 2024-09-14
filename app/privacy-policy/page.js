// pages/privacy.js
"use client"
import Head from 'next/head';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - CoupleUp</title>
      </Head>

      <div className="bg-gray-100 min-h-screen py-8 px-4">
        <Header/>
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg mt-[100px]">
          <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p>
              We collect personal information such as name, email, and Google profile data when you register or log in using Google. We also collect usage data and bot interactions to improve the user experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>
              Your information is used for account creation, authentication, communication, and improving our platform. We also use data for security and fraud prevention purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Google Login</h2>
            <p>
              When logging in with Google, we collect your email and profile details. Google login is subject to Google’s Privacy Policy, available <a href="https://policies.google.com/privacy" className="text-blue-600 underline">here</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your experience and gather usage data. You can control cookies via your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Sharing Your Information</h2>
            <p>
              We do not share your information except with service providers and in legal situations. No personal information is shared without your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Data Security</h2>
            <p>
              We use encryption, access controls, and regular security audits to protect your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Data Rights and Retention</h2>
            <p>
              You can request access, correction, or deletion of your data. We retain information as necessary for legal and business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Children’s Privacy</h2>
            <p>
              Our platform is not for users under 18. We do not collect data from minors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Changes to the Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest update will be indicated at the top. Your continued use of the platform after any changes signifies your acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have questions, contact us at <strong>support@coupleup.in</strong> or our office in Delhi, India.
            </p>
          </section>
        </div>
        <Footer/>
      </div>
    </>
  );
}
