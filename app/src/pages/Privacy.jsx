import {Link} from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import ThreeBackground from "../components/ThreeBackground"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
      <main className="flex-1 container py-12 relative z-10">
        <Card className="backdrop-blur bg-background/80 border-primary/20 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground">Last Updated: March 22, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              At GamifyEd-AI, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our platform, including any websites, mobile
              applications, and services (collectively, the "Service") operated by GamifyEd-AI, Inc. ("we," "us," or
              "our").
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the Service.
            </p>

            <h2>2. Information We Collect</h2>

            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for an account</li>
              <li>Express interest in obtaining information about us or our products</li>
              <li>Participate in activities on the Service</li>
              <li>Contact us</li>
            </ul>
            <p>The personal information we collect may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Password</li>
              <li>Educational information</li>
              <li>Profile information (such as profile pictures, bio, etc.)</li>
              <li>Content you create, upload, or share on the Service</li>
            </ul>

            <h3>2.2 Usage Information</h3>
            <p>
              We automatically collect certain information when you visit, use, or navigate the Service. This
              information may include:
            </p>
            <ul>
              <li>Device information (such as your IP address, browser type, operating system)</li>
              <li>Usage patterns (such as pages visited, time spent on pages, links clicked)</li>
              <li>Learning activities (such as quizzes taken, podcasts listened to)</li>
              <li>Performance metrics (such as quiz scores, completion rates)</li>
              <li>Gamification data (such as points earned, achievements unlocked, levels reached)</li>
            </ul>

            <h3>2.3 Information from Third Parties</h3>
            <p>
              We may receive information about you from third parties, such as social media platforms, if you choose to
              link your account with those services.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve the Service</li>
              <li>Create and manage your account</li>
              <li>Process your requests and transactions</li>
              <li>Personalize your experience</li>
              <li>Generate and provide AI-powered educational content</li>
              <li>Track and analyze your learning progress</li>
              <li>Implement gamification features</li>
              <li>Communicate with you about the Service</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with the Service</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. How We Share Your Information</h2>
            <p>We may share your information in the following situations:</p>

            <h3>4.1 With Your Consent</h3>
            <p>We may share your information with third parties when you have given us your consent to do so.</p>

            <h3>4.2 With Service Providers</h3>
            <p>
              We may share your information with third-party vendors, service providers, contractors, or agents who
              perform services for us or on our behalf and require access to such information to do that work.
            </p>

            <h3>4.3 For Educational Purposes</h3>
            <p>
              If you are a student, we may share your information with your teachers, school administrators, or
              parents/guardians as necessary for educational purposes.
            </p>

            <h3>4.4 For Business Transfers</h3>
            <p>
              We may share or transfer your information in connection with, or during negotiations of, any merger, sale
              of company assets, financing, or acquisition of all or a portion of our business to another company.
            </p>

            <h3>4.5 For Legal Purposes</h3>
            <p>
              We may disclose your information where we are legally required to do so in order to comply with applicable
              law, governmental requests, a judicial proceeding, court order, or legal process.
            </p>

            <h3>4.6 To Protect Rights</h3>
            <p>
              We may disclose your information where we believe it is necessary to investigate, prevent, or take action
              regarding potential violations of our policies, suspected fraud, situations involving potential threats to
              the safety of any person, or as evidence in litigation.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the
              security of any personal information we process. However, despite our safeguards and efforts to secure
              your information, no electronic transmission over the Internet or information storage technology can be
              guaranteed to be 100% secure.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in
              this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p>
              When we have no ongoing legitimate business need to process your personal information, we will either
              delete or anonymize such information.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our Service is intended for users who are at least 13 years of age. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and you are aware that your child has
              provided us with personal information, please contact us so that we can take necessary actions.
            </p>
            <p>
              For users between the ages of 13 and 18, we collect and process information with the consent of a parent
              or guardian, in compliance with applicable laws.
            </p>

            <h2>8. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access the personal information we have about you</li>
              <li>The right to request that we correct or update any personal information we have about you</li>
              <li>The right to request that we delete any personal information we have about you</li>
              <li>The right to request that we restrict the processing of your personal information</li>
              <li>The right to object to the processing of your personal information</li>
              <li>
                The right to data portability (receiving a copy of your personal information in a structured, commonly
                used format)
              </li>
            </ul>
            <p>To exercise these rights, please contact us using the contact information provided below.</p>

            <h2>9. Third-Party Websites</h2>
            <p>
              The Service may contain links to third-party websites and applications. We are not responsible for the
              privacy practices or the content of these third-party sites. We encourage you to read the privacy policy
              of every website you visit.
            </p>

            <h2>10. Analytics and Cookies</h2>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies to collect information
              about your browsing activities on our Service. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent.
            </p>
            <p>
              We use analytics services such as Google Analytics to help us understand how users engage with the
              Service. These services may use cookies and similar technologies to collect information about your use of
              the Service and report website trends.
            </p>

            <h2>11. AI and Machine Learning</h2>
            <p>
              Our Service uses artificial intelligence and machine learning technologies to provide personalized
              educational content and experiences. These technologies may process your information, including your
              learning activities and performance, to generate content and recommendations tailored to your needs.
            </p>
            <p>
              We take measures to ensure that our AI systems process your information fairly and in a way that respects
              your privacy.
            </p>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>

            <h2>13. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              GamifyEd-AI, Inc.
              <br />
              123 Education Lane
              <br />
              Learning City, LC 12345
              <br />
              Email: privacy@gamifyed-ai.com
            </p>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
