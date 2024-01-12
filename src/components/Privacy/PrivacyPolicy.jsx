import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => (
  <>
    <nav className="flex row px-4 gap-4 font-bold justify-left w-full">
      <Link className="hover:underline font-bold" to="/">
        Home
      </Link>
    </nav>
    <div className="flex flex-col text-left w-7/12 py-20 gap-2">
      <h1 className="font-bold">
        Privacy Policy for
        {/* [Your Web App Name] */}
      </h1>
      <h3>Last Updated: {/* [Date] */}</h3>
      <h2 className="font-bold">Introduction</h2>
      <p>
        Welcome to {/* [Your Web App Name] */}. We are committed to protecting
        your personal information and your right to privacy. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you use our application.
      </p>
      <h2 className="font-bold">Data Collection and Use</h2>
      <p>
        We collect personal information that you voluntarily provide to us when
        you register for the application using Google OAuth. The types of
        information we collect include:
      </p>
      <ul>
        <li>
          Your Google account&apos;s basic profile information, such as your
          name, email address, and profile picture.
        </li>
        <li>
          Any other information you choose to provide directly through the
          application.
        </li>
      </ul>
      <h2 className="font-bold">We use this information to:</h2>
      <ul>
        <li>Create and manage your account.</li>
        <li>Provide, operate, and maintain our services.</li>
        <li>
          Communicate with you, including for customer service and application
          updates.
        </li>
      </ul>
      <h2 className="font-bold">Data Sharing and Disclosure</h2>
      <p>
        We do not share or sell your personal information to third parties for
        marketing purposes. We may disclose your information to:
      </p>
      <ul>
        Comply with legal requirements or respond to legal requests. Protect the
        rights, property, or safety of our application, our users, or others.
        Data Security We implement a variety of security measures to maintain
        the safety of your personal information.
      </ul>
      <h2 className="font-bold">Third-Party Services</h2>
      <p>
        Our application uses Google OAuth for authentication. We do not control
        and are not responsible for the privacy practices of Google. We
        encourage you to review Google&apos;s privacy policy for more
        information.
      </p>
      <h2 className="font-bold">Children&apos;s Privacy</h2>
      <p>
        Our application does not knowingly collect or solicit information from
        anyone under the age of 13. If we learn that we have collected personal
        information from a child under age 13, we will delete that information
        as quickly as possible.
      </p>
      <h2 className="font-bold">Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>
      <h2 className="font-bold">Contact Us</h2>
      <p>
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us at [Your Contact Information].
      </p>
    </div>
  </>
);

export default PrivacyPolicy;
