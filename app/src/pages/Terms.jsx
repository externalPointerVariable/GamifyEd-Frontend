import { Link } from "react-router-dom";
import ThreeBackground from "../components/ThreeBackground";
import { Home } from "lucide-react";

export default function Terms() {
  return (
    <div className="flex min-h-screen flex-col relative bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <ThreeBackground />

      <main className="flex-1 w-full px-4 py-12 md:px-8 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-6 backdrop-blur bg-opacity-80">
          <h1 className="text-3xl font-bold mb-2">Terms of<span className="text-indigo-500"> Services</span></h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Last Updated: March 22, 2025
          </p>

          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold my-2">1. Introduction</h2>
            <p>
              Welcome to GamifyEd-AI. These Terms of Service ("Terms") govern
              your access to and use of the GamifyEd-AI platform, including any
              websites, mobile applications, and services (collectively, the
              "Service") operated by GamifyEd-AI, Inc. ("we," "us," or "our").
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these
              Terms. If you do not agree to these Terms, you may not access or
              use the Service.
            </p>

            <h2 className="text-2xl font-semibold my-2">2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use the Service. If you are
              under 18 years old, you must have permission from a parent or
              legal guardian to use the Service, and they must agree to these
              Terms on your behalf.
            </p>

            <h2 className="text-2xl font-semibold my-2">3. Account Registration</h2>
            <p>
              To access certain features of the Service, you may need to
              register for an account. You agree to provide accurate, current,
              and complete information during the registration process and to
              update such information to keep it accurate, current, and
              complete.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and
              for all activities that occur under your account. You agree to
              notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-semibold my-2">4. User Content</h2>
            <p>
              The Service may allow you to create, upload, post, send, receive,
              and store content ("User Content"). You retain all rights in, and
              are solely responsible for, the User Content you create, upload,
              post, send, receive, or store on or through the Service.
            </p>
            <p>
              By creating, uploading, posting, sending, receiving, or storing
              User Content on or through the Service, you grant us a worldwide,
              non-exclusive, royalty-free, sublicensable, and transferable
              license to host, store, use, display, reproduce, modify, adapt,
              edit, publish, and distribute that User Content for the purpose of
              operating, developing, providing, promoting, and improving the
              Service.
            </p>

            <h2 className="text-2xl font-semibold my-2">5. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the Service for any illegal purpose or in violation of any
                local, state, national, or international law
              </li>
              <li>
                Violate or encourage others to violate the rights of third
                parties, including intellectual property rights
              </li>
              <li>
                Post, upload, or distribute any User Content that is unlawful,
                defamatory, libelous, inaccurate, or that a reasonable person
                could deem to be objectionable, profane, indecent, pornographic,
                harassing, threatening, hateful, or otherwise inappropriate
              </li>
              <li>Interfere with security-related features of the Service</li>
              <li>
                Interfere with the operation of the Service or any user's
                enjoyment of the Service
              </li>
              <li>
                Use any robot, spider, crawler, scraper, or other automated
                means to access the Service
              </li>
              <li>
                Attempt to circumvent any technological measure implemented by
                us to protect the Service
              </li>
              <li>
                Attempt to decipher, decompile, disassemble, or reverse engineer
                any of the software used to provide the Service
              </li>
            </ul>

            <h2 className="text-2xl font-semibold my-2">6. Educational Content and AI-Generated Materials</h2>
            <p>
              The Service provides access to educational content, including
              AI-generated quizzes, podcasts, and other materials. While we
              strive to ensure the accuracy and quality of this content, we do
              not guarantee that it is error-free or suitable for any particular
              purpose.
            </p>
            <p>
              AI-generated content is provided "as is" and should be used as a
              supplementary learning tool. Teachers and educators should review
              AI-generated content before assigning it to students.
            </p>

            <h2 className="text-2xl font-semibold my-2">7. Gamification Features</h2>
            <p>
              The Service includes gamification features such as points, levels,
              achievements, and rewards. These features are designed to enhance
              engagement and motivation. The accumulation of points, levels,
              achievements, or rewards does not entitle you to any monetary or
              tangible benefits unless explicitly stated.
            </p>
            <p>
              We reserve the right to modify, adjust, or reset gamification
              features at any time.
            </p>

            <h2 className="text-2xl font-semibold my-2">8. Intellectual Property Rights</h2>
            <p>
              The Service and its original content, features, and functionality
              are owned by GamifyEd-AI, Inc. and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property or proprietary rights laws.
            </p>

            <h2 className="text-2xl font-semibold my-2">9. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service
              immediately, without prior notice or liability, for any reason,
              including if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service or contact us to request account
              deletion.
            </p>

            <h2 className="text-2xl font-semibold my-2">10. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT
              NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR
              ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE OR
              THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER
              HARMFUL COMPONENTS.
            </p>

            <h2 className="text-2xl font-semibold my-2">11. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL GAMIFYED-AI, INC., ITS AFFILIATES, DIRECTORS, EMPLOYEES,
              AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES,
              INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS,
              GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM
              THE USE OF, OR INABILITY TO USE, THE SERVICE.
            </p>

            <h2 className="text-2xl font-semibold my-2">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days'
              notice prior to any new terms taking effect. What constitutes a
              material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after any revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, you are no longer authorized to
              use the Service.
            </p>

            <h2 className="text-2xl font-semibold my-2">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to its conflict of
              law provisions.
            </p>

            <h2 className="text-2xl font-semibold my-2">14. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              GamifyEd-AI, Inc.
              <br />
              123 Education Lane
              <br />
              Learning City, LC 12345
              <br />
              Email: legal@gamifyed-ai.com
            </p>
          </section>

          <div className="flex justify-center mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <Home className="mr-2" />
              Return to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
