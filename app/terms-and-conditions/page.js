// pages/terms.js
"use client"
import Head from 'next/head';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - CoupleUp</title>
      </Head>

      <div className="bg-gray-100 min-h-screen py-8 px-4">
        <Header/>
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg mt-[100px]">
          <h1 className="text-3xl font-bold text-center mb-8">Terms and Conditions</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to <strong>CoupleUp</strong>, an online platform operated by CoupleUp, an India-based company located in Delhi. By accessing or using our platform, you agree to comply with and be bound by the following Terms and Conditions, which together with our Privacy Policy, govern your use of CoupleUp’s services. 
              Please read these terms carefully before using the platform. If you do not agree with any part of these terms, you should not use the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Eligibility</h2>
            <p>
              You must be at least <strong>18 years old</strong> to use this platform. By registering or using CoupleUp, you confirm that:
              <ul className="list-disc list-inside ml-4">
                <li>You are legally allowed to enter into a binding contract.</li>
                <li>You are at least 18 years of age.</li>
                <li>You understand and accept that the platform is intended for mature audiences and interactions only.</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Account Registration and Security</h2>
            <p>
              To use the platform, you will need to create an account by providing accurate and complete information. You are solely responsible for maintaining the confidentiality of your account credentials, including your password. CoupleUp will not be liable for any loss or damage arising from your failure to protect your account information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. User Conduct and Responsibilities</h2>
            <p>
              When using CoupleUp, you agree to the following:
              <ul className="list-disc list-inside ml-4">
                <li>You will not engage in any inappropriate, harmful, or offensive behavior.</li>
                <li>You will not use the platform for any unlawful purposes or in violation of any applicable laws or regulations.</li>
                <li>You will not abuse, harass, threaten, or defame other users or the bots.</li>
                <li>You will not attempt to reverse engineer or tamper with the platform’s functionality or security.</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Interactions with Bots</h2>
            <p>
              CoupleUp provides AI-driven bots designed to simulate human conversation. These bots are <strong>not real people</strong>, and their responses are generated based on algorithms and programming. The interactions you have with the bots are intended for <strong>entertainment purposes only</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Termination of Service</h2>
            <p>
              We reserve the right to terminate or suspend your access to the platform, without notice, if you violate these Terms and Conditions or engage in conduct that harms the platform, its users, or CoupleUp's reputation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Disclaimer</h2>
            <p>
              The bots on CoupleUp are designed for <strong>entertainment and engagement purposes only</strong>. They simulate human interaction through pre-programmed algorithms but should not be mistaken for real people or used as a substitute for human interaction. The interactions with the bots do not constitute professional advice, including but not limited to legal, financial, medical, psychological, or emotional support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, CoupleUp shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the platform, including but not limited to emotional distress, data loss, or any other damages resulting from your interactions with the bots.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Changes to Terms and Conditions</h2>
            <p>
              CoupleUp reserves the right to modify these Terms and Conditions at any time. Any updates will be posted on the platform, and it is your responsibility to review these terms periodically. Continued use of the platform after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">10. Intellectual Property Rights</h2>
            <p>
              All content on the platform, including but not limited to text, graphics, logos, and software, is the property of CoupleUp or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content from the platform without express written permission from CoupleUp.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">11. Prohibited Activities</h2>
            <p>
              You agree not to engage in any activities that could harm the platform or its users, including but not limited to spamming, phishing, or using automated systems to access or collect data. Any such activities will be considered a violation of these Terms and Conditions and may result in termination of your access.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">12. Account Security and Passwords</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. It is recommended to use a strong password consisting of a mix of uppercase letters, lowercase letters, numbers, and special characters. If you suspect that your account has been compromised, you should notify us immediately and change your password.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">13. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of the platform will be resolved in the courts located in Delhi, India.
            </p>
          </section>
        </div>
        <Footer/>
      </div>
    </>
  );
}
