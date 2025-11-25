import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | HighRiskHomeowners.com"
        description="Our privacy policy outlines how we collect, use, and protect your personal information."
        noindex={true}
      />
      
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
      
      <div className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">HighRiskHomeowners.com Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600">
              <strong>Effective Date:</strong> October 20, 2025<br />
              <strong>Last Updated:</strong> October 20, 2025
            </p>
            
            <h2>1) Scope and who we are</h2>
            <p>
              This Privacy Policy explains how HighRiskHomeowners.com, collects, uses, discloses, and protects personal information in connection with the HighRiskHomeowners.com website, forms, chat, email, SMS, and related services. We are a referral and lead generation service that connects users with independent licensed insurance agents or specialists. We do not underwrite, bind, or sell insurance. This Policy applies to users in the United States. If you do not agree, do not use the Site.
            </p>

            <h2>2) Notice at collection summary</h2>
            <p>
              <strong>Categories collected:</strong> identifiers such as name, email, phone, address, IP address, device identifiers; commercial information such as inquiry details and quotes requested; internet or device activity such as pages viewed and interaction events; approximate location inferred from IP; inferences about interests; audio or chat transcripts if you call or use chat; professional information you provide; limited sensitive information only if you choose to provide it for a specific purpose such as identity verification.
            </p>
            <p>
              <strong>Purposes:</strong> to provide referrals and customer support, to process and respond to your requests, to operate, secure, and improve the Site, to prevent fraud and abuse, for analytics and advertising, to comply with law, and with your consent for additional purposes.
            </p>
            <p>
              <strong>Disclosure recipients:</strong> service providers and processors, referral partners and agents, analytics and advertising partners, affiliates within our corporate group, entities for legal and safety reasons, and parties to a corporate transaction.
            </p>
            <p>
              <strong>Sale or sharing for targeted advertising:</strong> we may sell or share certain personal information as those terms are defined by state law, for example when we provide lead information to an agent in exchange for compensation or when we allow third party advertising partners to collect data on our Site. You can opt out at any time.
            </p>
            <p>
              <strong>Retention:</strong> we keep personal information for as long as needed for the purposes set out in this Policy, including legal, accounting, and compliance requirements, then delete or deidentify it.
            </p>

            <h2>3) Personal information we collect</h2>
            <p>
              <strong>Information you provide directly:</strong> contact information such as name, email, phone, address; property details related to your inquiry; communication contents such as messages sent through forms, chat transcripts, and call recordings where permitted by law and with notice; preferences and selections; any documents you upload.
            </p>
            <p>
              <strong>Information from your use of the Site:</strong> IP address, device and browser characteristics, cookie identifiers, pages and links viewed, timestamps, referral URLs, interaction events, and approximate location.
            </p>
            <p>
              <strong>Information from third parties:</strong> agents and referral partners may provide status updates about your request; advertising and analytics partners provide audience and campaign metrics; public and commercial sources may provide property and demographic data.
            </p>
            <p>
              <strong>Sensitive information:</strong> we do not intentionally collect sensitive personal information such as Social Security numbers unless you choose to provide it for a specific purpose such as identity verification. If we receive sensitive information, we will limit its use and disclosure to what is necessary for the requested service or as required by law.
            </p>

            <h2>4) How we use information</h2>
            <p>
              To connect you with licensed agents or specialists and to manage referrals. To respond to inquiries, provide customer support, and send service communications. To operate, maintain, troubleshoot, and improve the Site and our services. For analytics, measurement, and research. To personalize content and advertising and to measure advertising effectiveness. To detect, investigate, and prevent fraud, spam, abuse, and security incidents. To comply with legal obligations and enforce our Terms. For any additional purposes that we disclose at the time of collection or that you authorize.
            </p>

            <h2>5) Cookies, tracking technologies, and advertising</h2>
            <p>
              We use cookies, pixels, SDKs, and similar technologies for site operations, analytics, and advertising. You can control cookies in your browser settings. Where required, we obtain consent before setting non essential cookies. We honor recognized opt out preference signals such as Global Privacy Control as a request to opt out of sale or sharing for targeted advertising. Some third parties may collect information on our Site over time for interest based advertising. You can opt out using the choices described in Section 9.
            </p>

            <h2>6) Disclosures of personal information</h2>
            <p>
              <strong>Service providers and processors:</strong> hosting, customer support, analytics, security, communications, and marketing vendors may access personal information under contracts that limit use to our instructions.
            </p>
            <p>
              <strong>Referral partners and agents:</strong> when you request a referral or quote, we disclose your information so that licensed agents can contact you and provide quotes and related services.
            </p>
            <p>
              <strong>Advertising and analytics partners:</strong> we allow partners to collect or receive certain information to provide analytics and to deliver and measure ads.
            </p>
            <p>
              <strong>Affiliates:</strong> we may disclose information within our corporate family for the purposes described in this Policy.
            </p>
            <p>
              <strong>Legal and safety:</strong> we may disclose information as required by law, regulation, subpoena, or court order, to enforce our Terms, or to protect rights, safety, and property.
            </p>
            <p>
              <strong>Corporate transactions:</strong> in a merger, acquisition, financing, or sale of assets, information may be transferred as part of that transaction subject to continued protection.
            </p>

            <h2>7) Sale, sharing, and targeted advertising choices</h2>
            <p>
              Certain state laws define sale and sharing broadly. We may be considered to sell or share personal information when we disclose leads to agents for compensation or when we allow advertising partners to collect data on the Site for cross context behavioral advertising. You can opt out of sale or sharing and targeted advertising by visiting our Privacy Choices page at /privacy-choices or by sending a request to info@HighRiskHomeowners.com. If your browser sends a recognized opt out preference signal such as GPC, we will treat it as a valid request to opt out for that browser. We do not knowingly sell or share the personal information of users under 16.
            </p>

            <h2>8) Your communications preferences</h2>
            <p>
              If you provide your phone number or email, you consent to be contacted by us and by agents regarding your inquiry, including by calls, texts, and emails. Message and data rates may apply. You can opt out of texts by replying STOP and can adjust email preferences using unsubscribe links or by contacting us. Opting out of marketing does not stop service or transactional messages.
            </p>

            <h2>9) Your privacy choices and controls</h2>
            <p>
              <strong>Cookie controls:</strong> use your browser settings to block or delete cookies.
            </p>
            <p>
              <strong>Interest based advertising choices:</strong> visit the Digital Advertising Alliance or Network Advertising Initiative websites for opt out tools.
            </p>
            <p>
              <strong>Do Not Track:</strong> industry standards for DNT are not uniform. We do not respond to DNT signals, but we do honor Global Privacy Control signals as described in Section 5 and Section 7.
            </p>
            <p>
              <strong>State opt out links:</strong> if you are a resident of a state with an opt out right for sale, sharing, or targeted advertising, you can exercise that right at /privacy-choices or by emailing info@HighRiskHomeowners.com.
            </p>

            <h2>10) State privacy rights</h2>
            <p>
              Depending on your state, you may have rights to access, correct, delete, or obtain a portable copy of certain personal information, and to opt out of sale or sharing and targeted advertising and automated profiling for decisions that produce legal or similarly significant effects. California residents also have the right to limit the use and disclosure of sensitive personal information to purposes that are necessary to provide requested services or as permitted by law. We will not discriminate against you for exercising your rights. To submit a request, use our web form at /privacy-requests or email info@HighRiskHomeowners.com. We will verify your request by matching information you provide with information we maintain. If we cannot verify your identity, we may request additional information or deny the request. You may use an authorized agent. We will respond within the time periods required by law. If we deny your request, you may appeal by replying to our denial with the subject line Privacy Appeal. If your appeal is denied, you may contact your state attorney general.
            </p>

            <h2>11) California notice at collection details</h2>
            <p>
              <strong>Categories collected in the last 12 months:</strong> identifiers, commercial information, internet or device activity, approximate location, inferences, audio or chat transcripts, and professional information you provide.
            </p>
            <p>
              <strong>Purposes:</strong> as described in Section 4.
            </p>
            <p>
              <strong>Sources:</strong> you, your devices, agents and partners, public sources, and advertising and analytics partners.
            </p>
            <p>
              <strong>Disclosures for business purposes:</strong> to service providers and processors.
            </p>
            <p>
              <strong>Sale or sharing:</strong> identifiers, commercial information, and internet or device activity may be sold or shared with referral partners and with advertising and analytics partners.
            </p>
            <p>
              <strong>Retention:</strong> we retain information for the periods described in Section 14.
            </p>
            <p>
              <strong>Rights:</strong> access, delete, correct, opt out of sale or sharing, limit sensitive personal information, and non discrimination.
            </p>
            <p>
              <strong>Sensitive personal information:</strong> we do not use or disclose sensitive personal information for purposes other than those permitted by law without your consent.
            </p>
            <p>
              <strong>Shine the Light:</strong> we provide separate CPRA rights as described above.
            </p>
            <p>
              <strong>Metrics:</strong> if required by law, we will publish request metrics.
            </p>

            <h2>12) Nevada privacy rights</h2>
            <p>
              Nevada residents may opt out of the sale of covered information under NRS 603A by emailing info@HighRiskHomeowners.com with Nevada Opt Out in the subject line.
            </p>

            <h2>13) Deidentified and aggregated information</h2>
            <p>
              We may create deidentified or aggregated data that cannot reasonably be used to infer information about a particular individual. We commit to maintain and use deidentified data without attempting to reidentify it except as permitted by law to test our deidentification.
            </p>

            <h2>14) Data retention</h2>
            <p>
              We retain personal information for the time necessary to achieve the purposes described in this Policy, including recordkeeping for compliance with telemarketing, TCPA, and insurance advertising rules, fraud prevention, dispute resolution, and tax and accounting requirements. Typical retention periods include lead and consent records for at least 4 years, call recordings for up to 2 years, cookie and analytics identifiers for 13 to 26 months, and business records for 7 years, unless a longer period is required or permitted by law. When retention ends, we will delete or deidentify the information.
            </p>

            <h2>15) Security</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards designed to protect personal information. No system is perfectly secure. You use the Site at your own risk. If we discover a security incident that affects your information, we will notify you as required by law.
            </p>

            <h2>16) Children's privacy</h2>
            <p>
              The Site is not directed to children under 13 and we do not knowingly collect personal information from them. If you believe a child has provided personal information, contact us and we will take appropriate steps to delete it.
            </p>

            <h2>17) Financial information and payments</h2>
            <p>
              If payments are offered, they are processed by third party payment processors. We do not store full payment card numbers on our systems. Payment processors handle your payment data under their own privacy policies.
            </p>

            <h2>18) Credit and consumer reports</h2>
            <p>
              We do not obtain consumer reports directly. If an agent or insurer obtains a consumer report such as a credit based insurance score or claims history, that activity is subject to their policies and to the Fair Credit Reporting Act. Contact the reporting agency for FCRA rights including adverse action notices and disputes.
            </p>

            <h2>19) International data transfers</h2>
            <p>
              We store and process information in the United States and may use service providers in other countries. Your information may be subject to the laws of those jurisdictions.
            </p>

            <h2>20) Changes to this Policy</h2>
            <p>
              We may update this Policy from time to time. Changes take effect when posted with the Last Updated date. If material changes are made, we will provide additional notice consistent with applicable law.
            </p>

            <h2>21) How to contact us</h2>
            <p>
              Email: info@HighRiskHomeowners.com
            </p>

            <h2>22) Summary of your key choices</h2>
            <p>
              Submit privacy rights requests by emailing info@HighRiskHomeowners.com. Opt out of sale or sharing and targeted advertising at /privacy-choices or by enabling a recognized opt out preference signal such as Global Privacy Control. Opt out of SMS by replying STOP. Opt out of marketing emails by using the unsubscribe link in the message or by emailing info@HighRiskHomeowners.com. Adjust cookie settings in your browser.
            </p>

            <h2>23) Additional disclosures for SMS program</h2>
            <p>
              If you participate in our SMS program, we collect your mobile number, message content, device and carrier information, and delivery and engagement data. We use this data to send messages related to your inquiry and for program integrity, fraud prevention, troubleshooting, and compliance. Message frequency varies. Reply STOP to cancel and HELP for help. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages. For assistance, contact info@HighRiskHomeowners.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}