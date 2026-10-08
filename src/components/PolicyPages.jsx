import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../css/PolicyPages.css";
import { showCookieSettings } from "../utils/cookieConsent";

export function PrivacyPolicy() {
  return (
    <main className="policy-page" aria-labelledby="privacy-title">
      <Helmet>
        <title>Privacy Policy | Ty&apos;s Ginseng</title>
        <meta name="description" content="How Ty's Ginseng uses website information, Microsoft Clarity, and Google Analytics to improve your experience." />
      </Helmet>
      <h1 id="privacy-title">Privacy Policy</h1>
      <p className="policy-updated">Last updated: October 7, 2026</p>
      <p>Ty&apos;s Ginseng uses information you provide and information about website visits to operate our website, respond to inquiries, and improve the user experience.</p>

      <h2>Information we collect and use</h2>
      <p>When you contact us or sign up for our newsletter, we receive the information you choose to provide, such as your name, email address, and message. We use this information to respond to you and send updates you request. You can unsubscribe from newsletters using the link in those emails.</p>
      <p>Our analytics services collect information about website activity, such as pages visited, clicks, scrolling, referral sources, browser and device details, and approximate location. Cookies and similar technologies help measure visits and interactions.</p>

      <h2>Microsoft Clarity</h2>
      <p>We use Microsoft Clarity to understand how visitors interact with our website through behavioral metrics, heatmaps, and session replays. Clarity uses first-party and third-party cookies and other tracking technologies to capture website activity. We use these insights to identify usability issues and improve our pages and the user experience. Microsoft also collects and processes this information under its own privacy terms. Learn more in the <a href="https://www.microsoft.com/privacy/privacystatement">Microsoft Privacy Statement</a>.</p>

      <h2>Google Analytics</h2>
      <p>We use Google Analytics to measure website traffic, understand which pages visitors use, and evaluate interactions with our website. Google Analytics uses cookies and similar technologies to produce reports that help us improve content, navigation, and the user experience. Google processes this information as described in its <a href="https://policies.google.com/privacy">Privacy Policy</a> and its explanation of <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from sites that use its services</a>.</p>

      <h2>Service providers and external websites</h2>
      <p>Information is processed by providers that support our website, analytics, and newsletter services. Our shopping and newsletter links may take you to external services, including Barn2Door and Mailchimp. Information you submit on those services is subject to their privacy policies.</p>

      <h2>Your choices and privacy requests</h2>
      <p>Google Analytics and Microsoft Clarity load only after you accept optional analytics through our cookie banner. You can change your choice anytime using Cookie Settings in the footer. See our <Link to="/cookies-policy">Cookies Policy</Link> for details and the Google Analytics opt-out link. For questions about your information, or to request access, correction, or deletion where applicable, email <a href="mailto:tylersaemrow@gmail.com">tylersaemrow@gmail.com</a>.</p>

      <h2>Policy updates</h2>
      <p>We may update this policy as our website or practices change. The date above identifies the latest revision.</p>
    </main>
  );
}

export function CookiesPolicy() {
  return (
    <main className="policy-page" aria-labelledby="cookies-title">
      <Helmet>
        <title>Cookies Policy | Ty&apos;s Ginseng</title>
        <meta name="description" content="Learn about cookies and browser storage used by Ty's Ginseng, Microsoft Clarity, and Google Analytics." />
      </Helmet>
      <h1 id="cookies-title">Cookies Policy</h1>
      <p className="policy-updated">Last updated: October 7, 2026</p>
      <p>We use Microsoft Clarity and Google Analytics to understand how visitors use our website and improve the user experience.</p>

      <h2>What are cookies?</h2>
      <p>Cookies are small files stored in your browser when you visit a website. They can help a website recognize a browser and measure activity across visits. Similar technologies, such as local storage, can save information on your device.</p>

      <h2>How we use cookies and browser storage</h2>
      <ul>
        <li><strong>Cookie preferences:</strong> The necessary <code>tys_cookie_consent</code> cookie remembers whether you accept or reject analytics for 182 days.</li>
        <li><strong>Website functionality:</strong> Our website uses local storage to remember cart contents and support administrator sign-in. Local storage stays in your browser until it is cleared or removed by the website.</li>
        <li><strong>Google Analytics:</strong> Analytics cookies, including <code>_ga</code> and <code>_ga_*</code>, distinguish browsers and sessions so we can measure traffic and page interactions. Their default lifetime is two years, although browser limits and provider settings can shorten or change that period.</li>
        <li><strong>Microsoft Clarity:</strong> Cookies and similar technologies support behavioral metrics, heatmaps, and session replays that help us find usability issues. Cookie availability and lifetime depend on consent, browser behavior, and Microsoft&apos;s settings. See <a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies">Microsoft&apos;s cookie documentation</a> for details.</li>
      </ul>

      <h2>Managing cookies</h2>
      <p>Our cookie banner lets you accept or reject optional analytics. Google Analytics and Microsoft Clarity do not load until you accept. Your choice is remembered for 182 days unless you clear the consent cookie sooner. You can reopen <button type="button" className="policy-settings-button" onClick={showCookieSettings}>Cookie Settings</button> anytime, including from the footer. Turning analytics off after accepting refreshes the page to stop the loaded analytics tools and removes their accessible cookies on this website.</p>
      <p>You can use your browser&apos;s privacy settings to block or delete cookies and clear local storage. Blocking storage may affect features such as remembering your cart or administrator sign-in. Deleting cookies alone does not prevent them from being set again on a later visit.</p>
      <p>Google also offers a <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out browser add-on</a>. Browser cookie controls may not prevent all data collection through other technologies.</p>

      <h2>External services</h2>
      <p>When you follow links to our shopping, newsletter, or social media services, those services may use their own cookies. Review their policies to learn about their practices and controls.</p>

      <h2>More information</h2>
      <p>Read our <Link to="/privacy-policy">Privacy Policy</Link> for more about how information is used. For questions, email <a href="mailto:tylersaemrow@gmail.com">tylersaemrow@gmail.com</a>.</p>
    </main>
  );
}
