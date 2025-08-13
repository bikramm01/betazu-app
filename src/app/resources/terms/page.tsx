'use client';

import React from 'react';

export default function Terms() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-gray-300 mb-8">
          By accessing or using Betazu (“we,” “our,” or “us”), you agree to comply with and be bound by these Terms & Conditions. 
          If you do not agree, please discontinue use of our services immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Use of Services</h2>
        <p className="text-gray-400 mb-4">
          You may use our services solely for lawful purposes. You agree not to engage in any activity that may:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          <li>Violate any applicable laws or regulations.</li>
          <li>Infringe upon the rights of others.</li>
          <li>Disrupt or interfere with the functionality of our platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. Account Responsibilities</h2>
        <p className="text-gray-400 mb-4">
          You are responsible for safeguarding your account credentials and for all activities that occur under your account. 
          If you suspect unauthorized access, you must notify us immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Intellectual Property</h2>
        <p className="text-gray-400 mb-4">
          All content, designs, trademarks, and software available on Betazu are the intellectual property of Betazu Technologies or its licensors. 
          You may not reproduce, distribute, or modify our content without written consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Subscriptions & Payments</h2>
        <p className="text-gray-400 mb-4">
          Certain features may require payment. All fees are non-refundable unless otherwise stated. 
          We reserve the right to modify subscription plans at any time with prior notice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Termination</h2>
        <p className="text-gray-400 mb-4">
          We may suspend or terminate your account and access to our services at our sole discretion, without prior notice, if you violate these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Limitation of Liability</h2>
        <p className="text-gray-400 mb-4">
          Betazu will not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">7. Changes to Terms</h2>
        <p className="text-gray-400 mb-4">
          We may update these Terms & Conditions at any time. Continued use of our platform after changes means you accept the revised terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact Us</h2>
        <p className="text-gray-400">
          If you have any questions about these Terms & Conditions, please contact us at:
          <br />
          <span className="text-white">support@betazu.com</span>
        </p>
      </div>
    </section>
  );
}
