import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-policy">
      <FrameComponent1 />
      <div className="refund-policy-wrapper">
        <h1 className="refund-policy1">Refund Policy</h1>
      </div>
      <main className="lilylamb-kids-we-us-or-parent">
        <div className="lilylamb-kids-we">
          Welcome to LinklyGifts's Refund Policy page. We strive to provide the
          best possible service and customer satisfaction. This Refund Policy
          explains your rights regarding refunds for purchases made through
          LinklyGifts, as well as the conditions under which refunds will be
          issued. Please read this policy carefully before making a purchase.
        </div>
        <div className="general-refund-policy-parent">
          <h1 className="general-refund-policy-container">
            <ol className="general-refund-policy">
              <li>General Refund Policy</li>
            </ol>
          </h1>
          <div className="content-rows-parent">
            <div className="content-rows">
              <h3 className="eligibility-for-refunds">
                1.1 Eligibility for Refunds
              </h3>
              <div className="to-be-eligible-container">
                <p className="to-be-eligible">
                  To be eligible for a refund, you must meet the conditions
                  outlined in this policy. Refunds will only be considered if
                  you comply with the following: 
                </p>
                <ul className="the-request-is-made-within-14">
                  <li className="the-request-is">
                    The request is made within 14 days of the purchase date.
                  </li>
                  <li className="the-esim-service">
                    The eSIM service could not be activated or used due to a
                    fault on our part.
                  </li>
                  <li>
                    You have contacted our customer support team and provided
                    all necessary information and documentation.
                  </li>
                </ul>
              </div>
            </div>
            <div className="situation-details">
              <h3 className="non-refundable-situations">
                1.2 Non-Refundable Situations
              </h3>
              <div className="refunds-will-not-container">
                <p className="refunds-will-not">
                  Refunds will not be issued in the following situations: 
                </p>
                <ul className="you-changed-your-mind-after-th">
                  <li className="you-changed-your">
                    You changed your mind after the purchase.
                  </li>
                  <li className="you-did-not">
                    You did not follow the activation instructions correctly.
                  </li>
                  <li className="your-device-is">
                    Your device is not compatible with the eSIM.
                  </li>
                  <li className="you-used-the">
                    You used the eSIM and exhausted the data allowance.
                  </li>
                  <li>
                    Service interruptions caused by factors beyond our control,
                    such as network coverage or local regulations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="how-to-request-a-refund-parent">
          <h1 className="how-to-request-container">
            <ol className="how-to-request-a-refund">
              <li>How to Request a Refund</li>
            </ol>
          </h1>
          <div className="frame-parent">
            <div className="contact-customer-support-parent">
              <h3 className="contact-customer-support">
                2.1 Contact Customer Support
              </h3>
              <div className="to-request-a-container">
                <p className="to-request-a">
                  To request a refund, contact our customer support team at
                  support@LinklyGifts.com or call +1-800-123-4567. Provide the
                  following information:
                </p>
                <p className="blank-line">&nbsp;</p>
                <ul className="your-name-and-contact-details">
                  <li className="your-name-and">
                    Your name and contact details
                  </li>
                  <li className="order-number-and">
                    Order number and purchase date
                  </li>
                  <li className="reason-for-the">
                    Reason for the refund request
                  </li>
                  <li>
                    Any supporting documentation (e.g., screenshots, error
                    messages)
                  </li>
                </ul>
              </div>
            </div>
            <div className="refund-request-review-parent">
              <h3 className="refund-request-review">
                2.2 Refund Request Review
              </h3>
              <div className="our-customer-support">
                Our customer support team will review your refund request within
                5 business days. During this period, we may contact you for
                additional information or clarification. We strive to process
                all refund requests promptly and fairly.
              </div>
            </div>
          </div>
        </div>
        <FrameComponent
          refundProcess="Refund Process"
          approvalOfRefund="3.1 Approval of Refund"
          ifYourRefundRequestIsAppr="If your refund request is approved, we will notify you via email. The refund will be processed using the original payment method within 7 business days. Please note that it may take additional time for the refund to appear on your bank or credit card statement, depending on your financial institution."
          partialRefunds="3.2 Partial Refunds"
          inSomeCasesWeMayIssueAPar="In some cases, we may issue a partial refund if you have used a portion of the eSIM service. The amount of the partial refund will be determined based on the unused data allowance and the time elapsed since the purchase."
        />
        <FrameComponent
          refundProcess="Special Circumstances"
          approvalOfRefund="4.1 Technical Issues"
          ifYourRefundRequestIsAppr="If you experience technical issues with the eSIM service that prevent you from using it, please contact our customer support team immediately. We will work with you to resolve the issue and may issue a refund if the problem cannot be fixed."
          partialRefunds="4.2 Service Outages"
          inSomeCasesWeMayIssueAPar="While we strive to provide uninterrupted service, there may be occasions when the eSIM service is temporarily unavailable due to maintenance, upgrades, or unforeseen circumstances. In such cases, we will not issue refunds for service outages beyond our control."
          propLineHeight="135%"
        />
        <FrameComponent
          refundProcess="Legal Rights"
          approvalOfRefund="5.1 Consumer Protection Laws"
          ifYourRefundRequestIsAppr="This Refund Policy does not affect your statutory rights under applicable consumer protection laws. If you are entitled to a refund by law, this policy will not limit your legal rights."
          partialRefunds="5.2 Dispute Resolution"
          inSomeCasesWeMayIssueAPar="If you are not satisfied with our decision regarding a refund request, you may escalate the issue by contacting our customer support team. We are committed to resolving disputes amicably and fairly. If a resolution cannot be reached, you may seek assistance from relevant consumer protection authorities or pursue legal remedies."
          propLineHeight="135%"
        />
        <FrameComponent
          refundProcess="Amendments to Refund Policy"
          approvalOfRefund="6.1 Changes to Policy"
          ifYourRefundRequestIsAppr="We reserve the right to amend this Refund Policy at any time by posting the updated policy on our website. It is your responsibility to review this policy periodically for any changes. Your continued use of our services after any changes are made constitutes your acceptance of the revised policy."
          partialRefunds="6.2 Effective Date"
          inSomeCasesWeMayIssueAPar="This Refund Policy is effective as of [Effective Date]. Any changes to the policy will apply to purchases made on or after the effective date."
          propLineHeight="22px"
        />
        <div className="contact-information-parent">
          <h1 className="contact-information">
            <ol className="contact-information1">
              <li>Contact Information</li>
            </ol>
          </h1>
          <div className="if-you-have-any-questions-or-c-wrapper">
            <div className="if-you-have-container">
              <p className="if-you-have">
                If you have any questions or concerns about this Refund Policy,
                please contact us at:
              </p>
              <p className="blank-line1">&nbsp;</p>
              <p className="linklygifts-customer-support">
                LinklyGifts Customer Support
              </p>
              <p className="email-supportlinklygiftscom">
                Email: support@LinklyGifts.com
              </p>
              <p className="phone-1-800-123-4567">Phone: +1-800-123-4567</p>
              <p className="address-123-main">
                Address: 123 Main Street, Suite 456, City, Country, ZIP Code
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
