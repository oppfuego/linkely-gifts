import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent from "../components/FrameComponent";
import Footer1 from "../components/Footer1";
import "./CookiePolicy.css";

const CookiePolicy = () => {
  return (
    <div className="cookie-policy">
      <FrameComponent4 />
      <div className="cookie-policy-wrapper">
        <h1 className="cookie-policy1">Cookie Policy</h1>
      </div>
      <main className="lilylamb-kids-we-us-or-container">
        <div className="lilylamb-kids-we2">
          Welcome to LinklyGifts's Cookie Policy page. This policy explains how
          we use cookies and similar tracking technologies on our website and
          services. By using our website and services, you consent to the use of
          cookies as described in this policy. Please read this policy carefully
          to understand what cookies are, how we use them, and how you can
          manage your cookie preferences.
        </div>
        <FrameComponent
          refundProcess="Introduction"
          approvalOfRefund="1.1 What Are Cookies?"
          ifYourRefundRequestIsAppr={`Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work, improve user experience, and provide information to the website owners. Cookies can be either "session cookies," which are deleted when you close your browser, or "persistent cookies," which remain on your device until they expire or are deleted.`}
          partialRefunds="1.2 Why We Use Cookies"
          inSomeCasesWeMayIssueAPar="LinklyGifts uses cookies to enhance your experience on our website, provide personalized services, analyze website traffic, and improve our marketing efforts. Cookies help us understand how you interact with our website, remember your preferences, and provide you with relevant content and advertisements."
          propLineHeight="135%"
        />
        <div className="types-of-cookies-we-use-parent">
          <h1 className="types-of-cookies-container">
            <ol className="types-of-cookies-we-use">
              <li>Types of Cookies We Use</li>
            </ol>
          </h1>
          <div className="cookie-types">
            <div className="cookie-categories">
              <h3 className="essential-cookies">2.1 Essential Cookies</h3>
              <div className="these-cookies-are">
                These cookies are necessary for the basic functionality of our
                website. They enable you to navigate our website, use its
                features, and access secure areas. Without these cookies,
                certain services you request, such as account login or purchase
                processing, cannot be provided.
              </div>
            </div>
            <div className="cookie-categories1">
              <h3 className="performance-and-analytics">
                2.2 Performance and Analytics Cookies
              </h3>
              <div className="these-cookies-collect">
                These cookies collect information about how visitors use our
                website, such as which pages are visited most often and any
                error messages encountered. We use this information to improve
                the performance and functionality of our website. These cookies
                do not collect personally identifiable information; all data is
                aggregated and anonymous.
              </div>
            </div>
            <div className="cookie-categories2">
              <h3 className="functionality-cookies">
                2.3 Functionality Cookies
              </h3>
              <div className="functionality-cookies-allow">
                Functionality cookies allow our website to remember choices you
                make (such as your username, language, or region) and provide
                enhanced, more personalized features. These cookies can also be
                used to remember changes you have made to text size, fonts, and
                other parts of web pages that you can customize.
              </div>
            </div>
            <div className="cookie-categories3">
              <h3 className="targeting-and-advertising">
                2.4 Targeting and Advertising Cookies
              </h3>
              <div className="these-cookies-are1">
                These cookies are used to deliver advertisements that are
                relevant to you and your interests. They also help limit the
                number of times you see an advertisement and measure the
                effectiveness of advertising campaigns. These cookies remember
                that you have visited our website, and this information may be
                shared with other organizations, such as advertisers.
              </div>
            </div>
            <div className="cookie-categories4">
              <h3 className="third-party-cookies">2.5 Third-Party Cookies</h3>
              <div className="we-may-allow">
                We may allow third-party service providers to place cookies on
                your device to collect information about your online activities
                on our website and other sites you visit. This information is
                used to provide you with more relevant advertisements and to
                help measure the effectiveness of our marketing campaigns.
              </div>
            </div>
          </div>
        </div>
        <div className="how-we-use-cookies-parent">
          <h1 className="how-we-use-container">
            <ol className="how-we-use-cookies">
              <li>How We Use Cookies</li>
            </ol>
          </h1>
          <div className="cookie-uses">
            <div className="use-categories">
              <h3 className="website-functionality">
                3.1 Website Functionality
              </h3>
              <div className="cookies-enable-the">
                Cookies enable the website to provide enhanced functionality and
                personalization. They may be set by us or by third-party
                providers whose services we have added to our pages.
              </div>
            </div>
            <div className="use-categories1">
              <h3 className="performance-monitoring">
                3.2 Performance Monitoring
              </h3>
              <div className="we-use-cookies">
                We use cookies to monitor and analyze the performance of our
                website. This helps us identify and fix issues, improve our
                services, and provide a better user experience.
              </div>
            </div>
            <div className="use-categories2">
              <h3 className="user-experience">3.3 User Experience</h3>
              <div className="cookies-allow-us">
                Cookies allow us to remember your settings and preferences,
                making your visit to our website more convenient and personal.
                For example, we use cookies to remember your login details so
                that you do not have to re-enter them each time you visit our
                website.
              </div>
            </div>
            <div className="use-categories3">
              <h3 className="advertising-and-marketing">
                3.4 Advertising and Marketing
              </h3>
              <div className="we-use-cookies1">
                We use cookies to make advertising more engaging to users and
                more valuable to publishers and advertisers. These cookies help
                select advertisements that are relevant to you, measure the
                performance of advertising campaigns, and track conversion
                rates.
              </div>
            </div>
          </div>
        </div>
        <FrameComponent
          refundProcess="Managing Cookies"
          approvalOfRefund="4.1 Cookie Preferences"
          ifYourRefundRequestIsAppr="You can manage your cookie preferences by adjusting your browser settings. Most browsers allow you to refuse cookies or to alert you when a cookie is being placed on your device. Please note that if you disable cookies, some parts of our website may not function properly."
          partialRefunds="4.2 Opt-Out Options"
          inSomeCasesWeMayIssueAPar="You can opt out of interest-based advertising from third-party advertisers and ad networks that are members of the Network Advertising Initiative (NAI) or that follow the Digital Advertising Alliance's Self-Regulatory Principles for Online Behavioral Advertising by visiting the opt-out pages on the NAI website and DAA website."
          propLineHeight="135%"
        />
        <FrameComponent
          refundProcess="Your Rights"
          approvalOfRefund="5.1 Access to Information"
          ifYourRefundRequestIsAppr="You have the right to request access to the personal data we hold about you. To make such a request, please contact us at the information provided below."
          partialRefunds="5.2 Data Correction and Deletion"
          inSomeCasesWeMayIssueAPar="If you believe that any information we hold about you is incorrect or incomplete, you have the right to request correction or deletion of that information. Please contact us using the information provided below."
          propLineHeight="135%"
        />
        <div className="privacy-policy-parent">
          <h1 className="privacy-policy">
            <ol className="privacy-policy1">
              <li>Privacy Policy</li>
            </ol>
          </h1>
          <div className="frame-wrapper">
            <div className="integration-with-privacy-polic-parent">
              <h3 className="integration-with-privacy">
                6.1 Integration with Privacy Policy
              </h3>
              <div className="this-cookie-policy">
                This Cookie Policy is part of our broader Privacy Policy, which
                provides further information on how we collect, use, and protect
                your personal data. For more details, please refer to our
                Privacy Policy.\
              </div>
            </div>
          </div>
        </div>
        <div className="changes-to-this-policy-parent">
          <h1 className="changes-to-this-container">
            <ol className="changes-to-this-policy">
              <li>Changes to This Policy</li>
            </ol>
          </h1>
          <div className="policy-updates-parent">
            <h3 className="policy-updates">7.1 Policy Updates</h3>
            <div className="we-may-update">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or applicable laws. We will notify you of
              any significant changes by posting the updated policy on our
              website. Your continued use of our website and services after any
              changes are made constitutes your acceptance of the revised
              policy.
            </div>
          </div>
        </div>
        <div className="contact-information-container">
          <h1 className="contact-information4">
            <ol className="contact-information5">
              <li>Contact Information</li>
            </ol>
          </h1>
          <div className="if-you-have-container2">
            <p className="if-you-have2">
              If you have any questions or concerns about this Cookie Policy,
              please contact us at:
            </p>
            <p className="linklygifts-customer-support2">
              LinklyGifts Customer Support
            </p>
            <p className="email-supportlinklygiftscom2">{`Email: support@LinklyGifts.com `}</p>
            <p className="phone-1-800-123-45672">{`Phone: +1-800-123-4567 `}</p>
            <p className="address-123-main2">
              Address: 123 Main Street, Suite 456, City, Country, ZIP Code
            </p>
          </div>
        </div>
      </main>
      <Footer1 />
    </div>
  );
};

export default CookiePolicy;
