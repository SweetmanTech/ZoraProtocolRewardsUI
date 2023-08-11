import { ReactNode, useRef } from "react"
import { useMediaQuery } from "usehooks-ts"
import { useScroll } from "framer-motion"
import useScrollEnded from "../../hooks/useScrollEnded"
import Layout from "../Layout"

type SectionType = {
  id: string
  content: ReactNode
  mobile_content: ReactNode
}

const PrivacyPage = () => {
  const sections: SectionType[] = [
    {
      id: "privacy_date",
      content: <>Last Updated: [June 1 2023]</>,
      mobile_content: <>Last Updated: [June 1 2023]</>,
    },
    {
      id: "privacy_summary",
      content: (
        <>
          This Privacy Policy is designed to help you understand how Defi Entertainment, Inc.
          (collectively with
          <br /> any subsidiaries, called “Defient”, “we,” “us,” and “our”) collects, uses, and
          shares your personal
          <br /> information and to help you understand and exercise your privacy rights.
        </>
      ),
      mobile_content: (
        <>
          This Privacy Policy is designed to help you understand how Defi Entertainment, Inc.
          (collectively with any subsidiaries, called “Defient”, “we,” “us,” and “our”) collects,
          uses, and shares your personal information and to help you understand and exercise your
          privacy rights.
        </>
      ),
    },
    {
      id: "privacy_important",
      content: (
        <ul className="pl-8">
          <li className="list-disc">1. SCOPE</li>
          <li className="list-disc">2. CHANGES TO OUR PRIVACY POLICY</li>
          <li className="list-disc">3. PERSONAL INFORMATION WE COLLECT</li>
          <li className="list-disc">4. HOW WE USE YOUR INFORMATION</li>
          <li className="list-disc">5. HOW WE DISCLOSE YOUR INFORMATION</li>
          <li className="list-disc">6. YOUR PRIVACY CHOICES AND RIGHTS</li>
          <li className="list-disc">7. SECURITY OF YOUR INFORMATION</li>
          <li className="list-disc">8. INTERNATIONAL DATA TRANSFERS</li>
          <li className="list-disc">9. SUPPLEMENTAL NOTICE FOR CALIFORNIA RESIDENTS</li>
          <li className="list-disc">10. SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS</li>
          <li className="list-disc">11. CHILDREN’S INFORMATION</li>
          <li className="list-disc">12. THIRD-PARTY’S WEBSITES/APPLICATIONS</li>
          <li className="list-disc">13. SUPERVISORY AUTHORITY</li>
          <li className="list-disc">14. CONTACT US</li>
        </ul>
      ),
      mobile_content: (
        <ul className="pl-8">
          <li className="list-disc">1. SCOPE</li>
          <li className="list-disc">2. CHANGES TO OUR PRIVACY POLICY</li>
          <li className="list-disc">3. PERSONAL INFORMATION WE COLLECT</li>
          <li className="list-disc">4. HOW WE USE YOUR INFORMATION</li>
          <li className="list-disc">5. HOW WE DISCLOSE YOUR INFORMATION</li>
          <li className="list-disc">6. YOUR PRIVACY CHOICES AND RIGHTS</li>
          <li className="list-disc">7. SECURITY OF YOUR INFORMATION</li>
          <li className="list-disc">8. INTERNATIONAL DATA TRANSFERS</li>
          <li className="list-disc">9. SUPPLEMENTAL NOTICE FOR CALIFORNIA RESIDENTS</li>
          <li className="list-disc">10. SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS</li>
          <li className="list-disc">11. CHILDREN’S INFORMATION</li>
          <li className="list-disc">12. THIRD-PARTY’S WEBSITES/APPLICATIONS</li>
          <li className="list-disc">13. SUPERVISORY AUTHORITY</li>
          <li className="list-disc">14. CONTACT US</li>
        </ul>
      ),
    },
    {
      id: "privacy_1",
      content: (
        <>
          1. SCOPE
          <br />
          This Privacy Policy applies to personal information processed by us, through our websites,
          mobile
          <br /> applications and any other services or interfaces owned or controlled by Defient
          that post a link to
          <br /> this Privacy Policy (each a “Service” and together, the “Services”). For the
          avoidance of doubt, Defient
          <br /> does not control the blockchain protocol (“Protocol”) on which fungible tokens and
          various non-
          <br />
          fungible tokens (“NFTs”) are tradable or useable and cannot control activity and data on
          the Protocol, the validation of transactions on the Protocol, or use of the Protocol.
        </>
      ),
      mobile_content: (
        <>
          1. SCOPE
          <br />
          This Privacy Policy applies to personal information processed by us, through our websites,
          mobile applications and any other services or interfaces owned or controlled by Defient
          that post a link to this Privacy Policy (each a “Service” and together, the “Services”).
          For the avoidance of doubt, Defient does not control the blockchain protocol (“Protocol”)
          on which fungible tokens and various non- fungible tokens (“NFTs”) are tradable or useable
          and cannot control activity and data on the Protocol, the validation of transactions on
          the Protocol, or use of the Protocol.
        </>
      ),
    },
    {
      id: "privacy_2",
      content: (
        <>
          2. CHANGES TO OUR PRIVACY POLICY
          <br />
          We may revise this Privacy Policy from time to time at our sole discretion. If there are
          any material
          <br /> changes to this Privacy Policy, we will notify you as required by applicable law.
          You understand and <br />
          agree that you will be deemed to have accepted the updated Privacy Policy if you continue
          to use our
          <br /> Services after the new Privacy Policy takes effect.
        </>
      ),
      mobile_content: (
        <>
          2. CHANGES TO OUR PRIVACY POLICY
          <br />
          We may revise this Privacy Policy from time to time at our sole discretion. If there are
          any material changes to this Privacy Policy, we will notify you as required by applicable
          law. You understand and agree that you will be deemed to have accepted the updated Privacy
          Policy if you continue to use our Services after the new Privacy Policy takes effect.
        </>
      ),
    },
    {
      id: "privacy_3",
      content: (
        <>
          3. PERSONAL INFORMATION WE COLLECT
          <br />
          The categories of personal information we collect depend on how you interact with us, our
          Services
          <br /> and the requirements of applicable law. We collect information that you provide to
          us, information we
          <br /> obtain automatically when you use our Services, and information from other sources
          such as third-
          <br />
          party services and organizations, as described below.
          <div className="pt-[1.5rem]">A. Information You Provide to Us Directly</div>
          <div className="pt-[1.5rem]">
            We may collect the following personal information that you provide to us.
            <br />
            <ul className="pl-8">
              <li className="list-disc">
                Account Creation. We may collect information when you create an account with us or
                our service
                <br /> providers (e.g., Shopify), such as name and email address. We may also
                require that you provide additional identity
                <br />
                and verification information.
              </li>
              <li className="list-disc">
                Purchases, Wallet and Transaction Information. In order to engage in certain
                transactions or <br /> purchases on the Services, you may need to provide us or our
                third-party payment processors with <br /> your payment information and allow us to
                connect to your digital wallet by providing us with your <br /> public wallet
                address. We will never ask you or collect your private keys. We do not directly
                collect
                <br /> or store any payment card information entered through our Services or access
                your digital wallet,
                <br /> but we may receive from our third-party payment processing providers
                information associated
                <br />
                with your payment card information (e.g.,your billing details).
              </li>
              <li className="list-disc">
                Other Transactions. We may collect personal information and details associated with
                your activities <br />
                on our Services.
              </li>
              <li className="list-disc">
                Your Communications with Us. We may collect personal information, such as email
                address, phone
                <br /> number or mailing address when you request information about our Services,
                register for our <br /> newsletter, apply for a job or otherwise communicate with
                us.
              </li>
              <li className="list-disc">
                Interactive Features. We and others who use our Services may collect personal
                information that <br /> you submit or make available through our interactive
                features (e.g., via the Defient communities on
                <br /> Discord, messaging and chat features, and social media pages). Any personal
                information you
                <br /> provide on the public sections of these features will be considered “public,”
                (the “User Content”) <br /> unless otherwise required by applicable law, and is not
                subject to the privacy protections
                <br /> referenced herein. Please exercise caution before revealing any information
                that may identify
                <br /> you in the real world to other users.
              </li>
              <li className="list-disc">
                Surveys. We may contact you to participate in surveys. If you decide to participate,
                you may <br /> be asked to provide certain information which may include personal
                information.
              </li>
              <li className="list-disc">
                Sweepstakes, Giveaways or Contests. We may collect personal information you provide
                for any
                <br /> sweepstakes, giveaways or contests that we offer. In some jurisdictions, we
                are required to publicly
                <br /> share information of sweepstakes and contest winners.
              </li>
              <li className="list-disc">
                Conferences, Trade Shows, and Other Events. We may collect personal information from
                individuals
                <br /> when we attend or host conferences, trade shows, and other events.
              </li>
              <li className="list-disc">
                Business Development and Strategic Partnerships. We may collect personal information
                from <br />
                individuals and third parties to assess and pursue potential business opportunities.
              </li>
            </ul>
          </div>
          <div className="pt-[1.5rem]">B. Information Collected Automatically</div>
          <div className="pt-[1.5rem]">
            We may collect personal information automatically when you use our Services such as:
            <br />
            <ul className="pl-8">
              <li className="list-disc">
                Automatic Data Collection. We may collect certain information automatically when you
                use our
                <br /> Services, such as your Internet protocol (IP) address, user settings, MAC
                address, cookie identifiers,
                <br /> mobile carrier and other unique identifiers, browser or device information,
                location information
                <br /> (including approximate location derived from IP address), Internet service
                provider, and metadata <br />
                about the content you provide. We may also automatically collect information
                regarding your use
                <br /> of our Services, such as pages that you visit before, during and after using
                our Services,
                <br />
                information about the links you click, the types of content you interact with, the
                frequency and
                <br /> duration of your activities, and other information about how you use our
                Services.
              </li>
              <li className="list-disc">
                Cookie Policy for Cookies and Other Technologies. We, as well as third parties that
                provide content
                <br /> or other functionality on our Services, may use cookies, local storage, and
                other technologies
                <br />
                (“Technologies”) to automatically collect information through your use of our
                Services.
              </li>
              <li className="list-disc">
                Cookies. Cookies are small text files placed in device browsers that store
                preferences and facilitate
                <br /> and enhance your experience.
              </li>
            </ul>
            Our uses of these Technologies fall into the following general categories:
            <br />
            <ul className="pl-8">
              <li className="list-disc">
                Operationally Necessary. This includes Technologies that allow you access to our
                Services,
                <br /> applications, and tools that are required to identify irregular website
                behavior, prevent fraudulent
                <br /> activity, improve security, or allow you to make use of our functionality;
              </li>
              <li className="list-disc">
                Performance-Related. We may use Technologies to assess the performance of our
                Services, <br /> including as part of our analytic practices to help us understand
                how individuals use our Services <br /> (see Analytics below);
              </li>
              <li className="list-disc">
                Functionality-Related. We may use Technologies that allow us to offer you enhanced
                functionality
                <br /> when accessing or using our Services. This may include identifying you when
                you sign into our
                <br /> Services or keeping track of your specified preferences, interests, or past
                items viewed;
              </li>
            </ul>
            See “Your Privacy Choices and Rights” below to understand your choices regarding these
            Technologies.
            <br />
            <ul className="pl-8">
              <li className="list-disc">
                Analytics. We may use our Technologies and other third-party tools to process
                analytics
                <br /> information on our Services. These technologies allow us to process usage
                data to better
                <br /> understand how our Services are used, and to continually improve and
                <br />
                personalize our Services. Some of our analytics partners include:
              </li>
              <li className="list-disc">
                Plausible. We use Plausible to analyze usage of and traffic to our Services.
                Plausible does not use <br />
                cookies to track website visitors. To learn more about Plausible and its use of your
                information,
                <br /> please review the{" "}
                <span className="underline">Plausible Privacy Policy.</span>
              </li>
              <li className="list-disc">
                Social Media Platforms. Our Services may contain social media buttons, such as
                Discord, Snapchat,
                <br /> Twitter, and Telegram, which might include widgets such as the “share this”
                button or other <br />
                interactive mini programs). These features may collect your IP address and which
                page you are <br /> visiting on our Services and may set a cookie to enable the
                feature to function properly. Your <br />
                interactions with these platforms are governed by the privacy policy of the company
                providing it.
              </li>
            </ul>
          </div>
          <div className="pt-[1.5rem]">C. Information Collected from Other Sources</div>
          <div className="pt-[1.5rem]">
            <ul className="pl-8">
              <li className="list-disc">
                Third-Party Sources. We may obtain information about you from other sources,
                including through
                <br /> third-party services and organizations. For example, if you access our
                Services through a third-
                <br />
                party application, such as an app store, a third-party login service, or a social
                networking site, we <br /> may collect information about you from that third-party
                application that you have made available
                <br /> via your privacy settings.
              </li>
              <li className="list-disc">
                Sharing Features. Our Services may offer various tools and functionalities that
                allow you to provide <br />
                information about your friends; third parties may also use these services to upload
                information
                <br /> about you. Our services may also allow you to forward or share certain
                content with a friend or <br />
                colleague, such as an email inviting your friend to use our Services. Please only
                share with us
                <br /> contact information of people with whom you have a relationship (e.g.,
                relative, friend, neighbor, or
                <br /> co-worker).
              </li>
            </ul>
          </div>
        </>
      ),
      mobile_content: (
        <>
          3. PERSONAL INFORMATION WE COLLECT
          <br />
          The categories of personal information we collect depend on how you interact with us, our
          Services and the requirements of applicable law. We collect information that you provide
          to us, information we obtain automatically when you use our Services, and information from
          other sources such as third-party services and organizations, as described below.
          <br />
          <div>A. Information You Provide to Us Directly</div>
          <div>
            We may collect the following personal information that you provide to us.
            <br />
            <ul className="pl-8">
              <li className="list-disc">
                Account Creation. We may collect information when you create an account with us or
                our service providers (e.g., Shopify), such as name and email address. We may also
                require that you provide additional identity and verification information.
              </li>
              <li className="list-disc">
                Purchases, Wallet and Transaction Information. In order to engage in certain
                transactions or purchases on the Services, you may need to provide us or our
                third-party payment processors with your payment information and allow us to connect
                to your digital wallet by providing us with your public wallet address. We will
                never ask you or collect your private keys. We do not directly collect or store any
                payment card information entered through our Services or access your digital wallet,
                but we may receive from our third-party payment processing providers information
                associated with your payment card information (e.g., your billing details).
              </li>
              <li className="list-disc">
                Other Transactions. We may collect personal information and details associated with
                your activities on our Services.
              </li>
              <li className="list-disc">
                Your Communications with Us. We may collect personal information, such as email
                address, phone number or mailing address when you request information about our
                Services, register for our newsletter, apply for a job or otherwise communicate with
                us.
              </li>
              <li className="list-disc">
                Interactive Features. We and others who use our Services may collect personal
                information that you submit or make available through our interactive features
                (e.g., via the Defient communities on Discord, messaging and chat features, and
                social media pages). Any personal information you provide on the public sections of
                these features will be considered “public,” (the “User Content”) unless otherwise
                required by applicable law, and is not subject to the privacy protections referenced
                herein. Please exercise caution before revealing any information that may identify
                you in the real world to other users.
              </li>
              <li className="list-disc">
                Surveys. We may contact you to participate in surveys. If you decide to participate,
                you may be asked to provide certain information which may include personal
                information.
              </li>
              <li className="list-disc">
                Sweepstakes, Giveaways or Contests. We may collect personal information you provide
                for any sweepstakes, giveaways or contests that we offer. In some jurisdictions, we
                are required to publicly share information of sweepstakes and contest winners.
              </li>
              <li className="list-disc">
                Conferences, Trade Shows, and Other Events. We may collect personal information from
                individuals when we attend or host conferences, trade shows, and other events.
              </li>
              <li className="list-disc">
                Business Development and Strategic Partnerships. We may collect personal information
                from individuals and third parties to assess and pursue potential business
                opportunities.
              </li>
            </ul>
          </div>
          <div>B. Information Collected Automatically</div>
          <div>
            We may collect personal information automatically when you use our Services such as:
            <br />
            <ul className="pl-8">
              <li className="list-disc">
                Automatic Data Collection. We may collect certain information automatically when you
                use our Services, such as your Internet protocol (IP) address, user settings, MAC
                address, cookie identifiers, mobile carrier and other unique identifiers, browser or
                device information, location information (including approximate location derived
                from IP address), Internet service provider, and metadata about the content you
                provide. We may also automatically collect information regarding your use of our
                Services, such as pages that you visit before, during and after using our Services,
                information about the links you click, the types of content you interact with, the
                frequency and duration of your activities, and other information about how you use
                our Services.
              </li>
              <li className="list-disc">
                Cookie Policy for Cookies and Other Technologies. We, as well as third parties that
                provide content or other functionality on our Services, may use cookies, local
                storage, and other technologies (“Technologies”) to automatically collect
                information through your use of our Services.
              </li>
              <li className="list-disc">
                Cookies. Cookies are small text files placed in device browsers that store
                preferences and facilitate and enhance your experience.
              </li>
            </ul>
            Our uses of these Technologies fall into the following general categories:
            <br />
            <ul className="pl-8">
              <li className="list-disc">
                Operationally Necessary. This includes Technologies that allow you access to our
                Services, applications, and tools that are required to identify irregular website
                behavior, prevent fraudulent activity, improve security, or allow you to make use of
                our functionality;
              </li>
              <li className="list-disc">
                Performance-Related. We may use Technologies to assess the performance of our
                Services, including as part of our analytic practices to help us understand how
                individuals use our Services (see Analytics below);
              </li>
              <li className="list-disc">
                Functionality-Related. We may use Technologies that allow us to offer you enhanced
                functionality when accessing or using our Services. This may include identifying you
                when you sign into our Services or keeping track of your specified preferences,
                interests, or past items viewed;
              </li>
            </ul>
            See “Your Privacy Choices and Rights” below to understand your choices regarding these
            Technologies.
            <br />
            <ul className="pl-8">
              <li className="list-disc">
                Analytics. We may use our Technologies and other third-party tools to process
                analytics information on our Services. These technologies allow us to process usage
                data to better understand how our Services are used, and to continually improve and
                personalize our Services. Some of our analytics partners include:
              </li>
              <li className="list-disc">
                Plausible. We use Plausible to analyze usage of and traffic to our Services.
                Plausible does not use cookies to track website visitors. To learn more about
                Plausible and its use of your information, please review the{" "}
                <span className="underline">Plausible Privacy Policy.</span>
              </li>
              <li className="list-disc">
                Social Media Platforms. Our Services may contain social media buttons, such as
                Discord, Snapchat, Twitter, and Telegram, which might include widgets such as the
                “share this” button or other interactive mini programs). These features may collect
                your IP address and which page you are visiting on our Services and may set a cookie
                to enable the feature to function properly. Your interactions with these platforms
                are governed by the privacy policy of the company providing it.
              </li>
            </ul>
          </div>
          <div>C. Information Collected from Other Sources</div>
          <div>
            <ul className="pl-8">
              <li className="list-disc">
                Third-Party Sources. We may obtain information about you from other sources,
                including through third-party services and organizations. For example, if you access
                our Services through a third-party application, such as an app store, a third-party
                login service, or a social networking site, we may collect information about you
                from that third-party application that you have made available via your privacy
                settings.
              </li>
              <li className="list-disc">
                Sharing Features. Our Services may offer various tools and functionalities that
                allow you to provide information about your friends; third parties may also use
                these services to upload information about you. Our services may also allow you to
                forward or share certain content with a friend or colleague, such as an email
                inviting your friend to use our Services. Please only share with us contact
                information of people with whom you have a relationship (e.g., relative, friend,
                neighbor, or co-worker).
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "privacy_4",
      content: (
        <>
          4. HOW WE USE YOUR INFORMATION
          <br />
          We use your information for a variety of business purposes, including to provide our
          Services, for <br /> administrative purposes, and to market our products and services, as
          described below.
          <div className="pt-[1.5rem]">A. Provide Our Services</div>
          <div className="pt-[1.5rem]">
            We use your information to fulfill our contract with you and provide you with our
            Services and perform
            <br /> our contract with you, such as:
            <br />
            <ul className="pl-8">
              <li className="list-disc">Managing your information;</li>
              <li className="list-disc">
                Providing access to certain areas, functionalities, and features of our Services;
              </li>
              <li className="list-disc">Answering requests for customer or technical support;</li>
              <li className="list-disc">
                Communicating with you about your account, activities on our Services, and policy
                changes
              </li>
              <li className="list-disc">
                Processing your financial information and other payment methods to facilitate
                purchases and transfers <br />
                via the Services;
              </li>
              <li className="list-disc">Allowing you to register for events.</li>
            </ul>
          </div>
          <div className="pt-[1.5rem]">B. Administrative Purposes</div>
          <div className="pt-[1.5rem]">
            We use your information for our legitimate interest, such as:
            <br />
            <ul className="pl-8">
              <li className="list-disc">
                Pursuing our legitimate interests such as direct marketing, research and development
                (including
                <br /> marketing research), network and information security, and fraud prevention;
              </li>
              <li className="list-disc">
                Detecting security incidents, protecting against malicious, deceptive, fraudulent or
                illegal activity,
                <br /> and prosecuting those responsible for that activity;
              </li>
              <li className="list-disc">Measuring interest and engagement in our Services;</li>
              <li className="list-disc">Improving, upgrading or enhancing our Services;</li>
              <li className="list-disc">Developing new products and Services;</li>
              <li className="list-disc">Ensuring internal quality control and safety;</li>
              <li className="list-disc">Authenticating and verifying individual identities;</li>
              <li className="list-disc">
                Debugging to identify and repair errors with our Services;
              </li>
              <li className="list-disc">
                Auditing relating to interactions, transfers and other compliance activities;
              </li>
              <li className="list-disc">
                Sharing information with third parties as needed to provide the Services;
              </li>
              <li className="list-disc">Enforcing our agreements and policies; and</li>
              <li className="list-disc">
                Other uses as required to comply with our legal obligations.
              </li>
            </ul>
          </div>
          <div className="pt-[1.5rem]">C. Marketing our Products and Services</div>
          <div className="pt-[1.5rem]">
            We may use personal information to tailor and provide you with content. We may provide
            you with
            <br /> these materials as permitted by applicable law. Some of the ways we may market to
            you include
            <br /> email campaigns.
          </div>
          <div className="pt-[1.5rem]">
            If you have any questions about our marketing practices or if you would like to opt out
            of the use of
            <br /> your personal information for marketing purposes, you may contact us at any time
            as set forth in
            <br /> “Contact Us” below.
          </div>
          <div className="pt-[1.5rem]">D. With Your Consent</div>
          <div>
            We may use personal information for other purposes that are clearly disclosed to you at
            the time
            <br /> you provide personal information or with your consent.
          </div>
          <div className="pt-[1.5rem]">E. Other Purposes</div>
          <div className="pt-[1.5rem]">
            We also use your information for other purposes as requested by you or as permitted by
            applicable
            <br /> law.
            <ul className="pl-8">
              <li className="list-disc">
                De-identified and Aggregated Information. We may use personal information and other
                <br /> information about you to create de- identified and/or aggregated information,
                such as de-
                <br />
                identified demographic information, de-identified location information, information
                about the
                <br /> device from which you access our Services, or other analyses we create.
                <br />
              </li>
            </ul>
          </div>
        </>
      ),
      mobile_content: (
        <>
          4. HOW WE USE YOUR INFORMATION
          <br />
          We use your information for a variety of business purposes, including to provide our
          Services, for administrative purposes, and to market our products and services, as
          described below.
          <div>A. Provide Our Services</div>
          <div>
            We use your information to fulfill our contract with you and provide you with our
            Services and perform our contract with you, such as:
            <br />
            <ul className="pl-8">
              <li className="list-disc">Managing your information;</li>
              <li className="list-disc">
                Providing access to certain areas, functionalities, and features of our Services;
              </li>
              <li className="list-disc">Answering requests for customer or technical support;</li>
              <li className="list-disc">
                Communicating with you about your account, activities on our Services, and policy
                changes
              </li>
              <li className="list-disc">
                Processing your financial information and other payment methods to facilitate
                purchases and transfers via the Services;
              </li>
              <li className="list-disc">Allowing you to register for events.</li>
            </ul>
          </div>
          <div>B. Administrative Purposes</div>
          <div>
            We use your information for our legitimate interest, such as:
            <br />
            <ul className="pl-8">
              <li className="list-disc">
                Pursuing our legitimate interests such as direct marketing, research and development
                (including marketing research), network and information security, and fraud
                prevention;
              </li>
              <li className="list-disc">
                Detecting security incidents, protecting against malicious, deceptive, fraudulent or
                illegal activity, and prosecuting those responsible for that activity;
              </li>
              <li className="list-disc">Measuring interest and engagement in our Services;</li>

              <li className="list-disc">Improving, upgrading or enhancing our Services;</li>
              <li className="list-disc">Developing new products and Services;</li>
              <li className="list-disc">Ensuring internal quality control and safety;</li>
              <li className="list-disc">Authenticating and verifying individual identities;</li>
              <li className="list-disc">
                Debugging to identify and repair errors with our Services;
              </li>
              <li className="list-disc">
                Auditing relating to interactions, transfers and other compliance activities;
              </li>
              <li className="list-disc">
                Sharing information with third parties as needed to provide the Services;
              </li>
              <li className="list-disc">Enforcing our agreements and policies; and</li>
              <li className="list-disc">
                Other uses as required to comply with our legal obligations.
              </li>
            </ul>
          </div>
          <div>C. Marketing our Products and Services</div>
          <div>
            We may use personal information to tailor and provide you with content. We may provide
            you with these materials as permitted by applicable law. Some of the ways we may market
            to you include email campaigns.
          </div>
          <div>
            If you have any questions about our marketing practices or if you would like to opt out
            of the use of your personal information for marketing purposes, you may contact us at
            any time as set forth in “Contact Us” below.
          </div>
          <div>D. With Your Consent</div>
          <div>
            We may use personal information for other purposes that are clearly disclosed to you at
            the time you provide personal information or with your consent.
          </div>
          <div>E. Other Purposes</div>
          <div>
            We also use your information for other purposes as requested by you or as permitted by
            applicable law.
            <ul className="pl-8">
              <li className="list-disc">
                De-identified and Aggregated Information. We may use personal information and other
                information about you to create de- identified and/or aggregated information, such
                as de-identified demographic information, de-identified location information,
                information about the device from which you access our Services, or other analyses
                we create.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "privacy_5",
      content: (
        <>
          5. HOW WE DISCLOSE YOUR INFORMATION
          <br />
          We disclose your information to third parties for a variety of business purposes,
          including to provide
          <br /> our Services, to protect us or others, or in the event of a major business
          transaction such as a merger,
          <br /> sale, or asset transfer, as described below.
          <div className="pt-[1.5rem]">
            A. Disclosures to Provide our Services
            <br />
            The categories of third parties with whom we may share your information are described
            below.
            <ul className="pl-8">
              <li className="list-disc">
                Notice Regarding Use of Blockchain. Transactions involving our NFTs will be
                conducted on
                <br /> the relevant Protocol. Information about your transfers will be provided to
                the blockchain and may be <br />
                accessible to third parties due to the public nature of the blockchain. Because
                entries to the
                <br /> blockchain are, by their nature, public, and because it may be possible for
                someone to identify you
                <br /> through your pseudonymous, public wallet address using external sources of
                information, any
                <br /> transaction you enter onto the blockchain could possibly be used to identify
                you, or information <br />
                about you.
              </li>
              <li className="list-disc">
                Other Users of the Services and Parties You Transact With. Some of your personal
                information may
                <br /> be visible to other users of the Services (e.g., information featured on
                generally accessible parts of
                <br /> the contracts or on a user profile). In addition, to complete transfers via
                the Services, we will need
                <br /> to share some of your personal information with the party that you are
                transacting with.
              </li>
              <li className="list-disc">
                Third Party Websites and Applications. You may choose to share personal information
                or interact
                <br /> with third-party websites and/ or third-party applications, including, but
                not limited to, third-party
                <br /> electronic wallet extensions. Once your personal information has been shared
                with a third-party
                <br /> website or a third-party application, it will also be subject to such third
                party’s privacy policy. We
                <br /> encourage you to closely read each third-party website or third-party
                application privacy policy
                <br />
                before sharing your personal information or otherwise interacting with them.
                <br />
                Please note that we do not control, and we are not responsible for the third-party
                website’s or the third-party
                <br /> application’s processing of your personal information.
              </li>
              <li className="list-disc">
                Service Providers. We may share your personal information with our third-party
                service providers
                <br /> who use that information to help us provide our Services. This includes
                service providers that
                <br /> provide us with IT support, hosting, customer service, and related services.
              </li>
              <li className="list-disc">
                Business Partners. We may share your personal information with business partners to
                provide you
                <br /> with a product or service you have requested. We may also share your personal
                information to
                <br /> business partners with whom we jointly offer products or services.
              </li>
              <li className="list-disc">
                Affiliates. We may share your personal information with members of our corporate
                family.
              </li>
              <li className="list-disc">
                APIs/SDKs. We may use third-party application program interfaces (“APIs”) and
                software
                <br /> development kits (“SDKs”) as part of the functionality of our Services. For
                more information about
                <br /> our use of APIs and SDKs, please contact us as set forth in “Contact Us”
                below.
              </li>
            </ul>
          </div>
          <div className="pt-[1.5rem]">
            B. Disclosures to Protect Us or Others
            <br />
            We may access, preserve, and disclose any information we store associated with you to
            external parties if we, in good faith, believe doing so is required or appropriate to:
            comply with law enforcement
            <br />
            or national security requests and legal process, such as a court order or subpoena;
            protect your, our,
            <br />
            or others’ rights, property, or safety; enforce our policies or contracts; collect
            amounts owed to us; or <br />
            assist with an investigation or prosecution of suspected or actual illegal activity.
          </div>
          <div className="pt-[1.5rem]">
            C. Disclosure in the Event of Merger, Sale, or Other Asset Transfers
            <br />
            If we are involved in a merger, acquisition, financing due diligence, reorganization,
            bankruptcy,
            <br />
            receivership, purchase or sale of assets, or transition of service to another provider,
            your information
            <br />
            may be sold or transferred as part of such a transaction, as permitted by law and/or
            contract.
          </div>
        </>
      ),
      mobile_content: (
        <>
          5. HOW WE DISCLOSE YOUR INFORMATION
          <br />
          Your Privacy Choices. The privacy choices you may have about your personal information are
          determined by applicable law and are described below.
          <div>
            A. Disclosures to Provide our Services
            <br />
            The categories of third parties with whom we may share your information are described
            below.
            <ul className="pl-8">
              <li className="list-disc">
                Notice Regarding Use of Blockchain. Transactions involving our NFTs will be
                conducted on the relevant Protocol. Information about your transfers will be
                provided to the blockchain and may be accessible to third parties due to the public
                nature of the blockchain. Because entries to the blockchain are, by their nature,
                public, and because it may be possible for someone to identify you through your
                pseudonymous, public wallet address using external sources of information, any
                transaction you enter onto the blockchain could possibly be used to identify you, or
                information about you.
              </li>
              <li className="list-disc">
                Other Users of the Services and Parties You Transact With. Some of your personal
                information may be visible to other users of the Services (e.g., information
                featured on generally accessible parts of the contracts or on a user profile). In
                addition, to complete transfers via the Services, we will need to share some of your
                personal information with the party that you are transacting with.
              </li>
              <li className="list-disc">
                Third Party Websites and Applications. You may choose to share personal information
                or interact with third-party websites and/ or third-party applications, including,
                but not limited to, third-party electronic wallet extensions. Once your personal
                information has been shared with a third-party website or a third-party application,
                it will also be subject to such third party’s privacy policy. We encourage you to
                closely read each third-party website or third-party application privacy policy
                before sharing your third-party website’s or the third-party application’s
                processing of your personal information.
              </li>
              <li className="list-disc">
                Service Providers. We may share your personal information with our third-party
                service providers who use that information to help us provide our Services. This
                includes service providers that provide us with IT support, hosting, customer
                service, and related services.
              </li>
              <li className="list-disc">
                Business Partners. We may share your personal information with business partners to
                provide you with a product or service you have requested. We may also share your
                personal information to business partners with whom we jointly offer products or
                services.
              </li>
              <li className="list-disc">
                Affiliates. We may share your personal information with members of our corporate
                family.
              </li>
              <li className="list-disc">
                APIs/SDKs. We may use third-party application program interfaces (“APIs”) and
                software development kits (“SDKs”) as part of the functionality of our Services. For
                more information about our use of APIs and SDKs, please contact us as set forth in
                “Contact Us” below.
              </li>
            </ul>
          </div>
          <div>
            B. Disclosures to Protect Us or Others
            <br />
            We may access, preserve, and disclose any information we store associated with you to
            external parties if we, in good faith, believe doing so is required or appropriate to:
            comply with law enforcement or national security requests and legal process, such as a
            court order or subpoena; protect your, our, or others’ rights, property, or safety;
            enforce our policies or contracts; collect amounts owed to us; or assist with an
            investigation or prosecution of suspected or actual illegal activity.
          </div>
          <div>
            C. Disclosure in the Event of Merger, Sale, or Other Asset Transfers
            <br />
            If we are involved in a merger, acquisition, financing due diligence, reorganization,
            bankruptcy, receivership, purchase or sale of assets, or transition of service to
            another provider, your information may be sold or transferred as part of such a
            transaction, as permitted by law and/or contract.
          </div>
        </>
      ),
    },
    {
      id: "privacy_6",
      content: (
        <>
          6. YOUR PRIVACY CHOICES AND RIGHTS
          <br />
          Your Privacy Choices. The privacy choices you may have about your personal information are{" "}
          <br /> determined by applicable law and are described below.
          <ul className="pl-8">
            <li className="list-disc">
              Email Communications. If you receive an unwanted email from us, you can use the
              unsubscribe link
              <br />
              found at the bottom of the email to opt out of receiving future emails. Note that you
              will continue to receive transfer-related emails regarding services you have
              requested. We may also send you
              <br />
              certain non-promotional communications regarding us and our Services, and you will not
              be able
              <br />
              to opt out of those communications (e.g., communications regarding our Services or
              updates to our
              <br />
              Terms of Service or this Privacy Policy).
            </li>
            <li className="list-disc">
              “Do Not Track.” Do Not Track (“DNT”) is a privacy preference that users can set in
              certain web
              <br />
              browsers. Please note that we do not respond to or honor DNT signals or similar
              mechanisms
              <br />
              transmitted by web browsers.
            </li>
            <li className="list-disc">
              Cookies. You may stop or restrict the placement of Technologies on your device or
              remove them by
              <br />
              adjusting your preferences as your browser or device permits. However, if you adjust
              <br />
              your preferences, our Services may not work properly. Please note that cookie-based
              opt-outs are not
              <br />
              effective on mobile applications.
            </li>
          </ul>
          <div className="pt-[1.5rem]">
            Your Privacy Rights. In accordance with applicable law, you may have the right to:
            <ul className="pl-8">
              <li className="list-disc">
                Access Personal Information about you, including: (i) confirming whether we are
                processing your
                <br />
                personal information; (ii) obtaining access to or a copy of your personal
                information; or (iii)
                <br />
                receiving an electronic copy of personal information that you have provided to us,
                or asking us to
                <br />
                send that information to another company (aka the right of data portability);
              </li>
              <li className="list-disc">
                Request Correction of your personal information where it is inaccurate or
                incomplete. In some <br />
                cases, we may provide self-service tools that enable you to update your personal
                information;
              </li>
              <li className="list-disc">Request Deletion of your personal information;</li>
              <li className="list-disc">
                Request Restriction of or Object to our processing of your personal information,
                including where <br />
                the processing of your personal information is based on our legitimate interest or
                for direct <br />
                marketing purposes; and
              </li>
              <li className="list-disc">
                Withdraw Your Consent to our processing of your personal information. Please note
                that your <br />
                withdrawal will only take effect for future processing and will not affect the
                lawfulness of
                <br />
                processing before the withdrawal.
              </li>
            </ul>
          </div>
          <div className="pt-[1.5rem]">
            If you would like to exercise any of these rights, please contact us as set forth in
            “Contact Us” below. We will process such requests in accordance with applicable laws
          </div>
        </>
      ),
      mobile_content: (
        <>
          6. YOUR PRIVACY CHOICES AND RIGHTS
          <br />
          Your Privacy Choices. The privacy choices you may have about your personal information are
          determined by applicable law and are described below.
          <ul className="pl-8">
            <li className="list-disc">
              Email Communications. If you receive an unwanted email from us, you can use the
              unsubscribe link found at the bottom of the email to opt out of receiving future
              emails. Note that you will continue to receive transfer-related emails regarding
              services you have requested. We may also send you certain non-promotional
              communications regarding us and our Services, and you will not be able to opt out of
              those communications (e.g., communications regarding our Services or updates to our
              Terms of Service or this Privacy Policy).
            </li>
            <li className="list-disc">
              “Do Not Track.” Do Not Track (“DNT”) is a privacy preference that users can set in
              certain web browsers. Please note that we do not respond to or honor DNT signals or
              similar mechanisms transmitted by web browsers.
            </li>
            <li className="list-disc">
              Cookies. You may stop or restrict the placement of Technologies on your device or
              remove them by adjusting your preferences as your browser or device permits. However,
              if you adjust your preferences, our Services may not work properly. Please note that
              cookie-based opt-outs are not effective on mobile applications.
            </li>
          </ul>
          <div>
            Your Privacy Rights. In accordance with applicable law, you may have the right to:
            <ul className="pl-8">
              <li className="list-disc">
                Access Personal Information about you, including: (i) confirming whether we are
                processing your personal information; (ii) obtaining access to or a copy of your
                personal information; or (iii) receiving an electronic copy of personal information
                that you have provided to us, or asking us to send that information to another
                company (aka the right of data portability);
              </li>
              <li className="list-disc">
                Request Correction of your personal information where it is inaccurate or
                incomplete. In some cases, we may provide self- service tools that enable you to
                update your personal information;
              </li>
              <li className="list-disc">Request Deletion of your personal information;</li>
              <li className="list-disc">
                Request Restriction of or Object to our processing of your personal information,
                including where the processing of your personal information is based on our
                legitimate interest or for direct marketing purposes; and
              </li>
              <li className="list-disc">
                Withdraw Your Consent to our processing of your personal information. Please note
                that your withdrawal will only take effect for future processing and will not affect
                the lawfulness of processing before the withdrawal.
              </li>
            </ul>
          </div>
          <div>
            If you would like to exercise any of these rights, please contact us as set forth in
            “Contact Us” below. We will process such requests in accordance with applicable laws
          </div>
        </>
      ),
    },
    {
      id: "privacy_7",
      content: (
        <>
          7. SECURITY OF YOUR INFORMATION
          <br />
          We take steps designed to ensure that your information is treated securely and in
          accordance with this
          <br />
          Privacy Policy. Unfortunately, no system is 100% secure, and we cannot ensure or warrant
          the security
          <br />
          of any information you provide to us. To the fullest extent permitted by applicable law,
          we do not
          <br />
          accept liability for unauthorized disclosure.
          <div className="pt-[1.5rem]">
            By using our Services or providing personal information to us, you agree that we may
            communicate <br />
            with you electronically regarding security, privacy, and administrative issues relating
            to your use of our
            <br />
            Services. If we learn of a security system’s breach, we may attempt to notify you
            electronically by
            <br />
            posting a notice on our Services, by mail or by sending an email to you.
          </div>
        </>
      ),
      mobile_content: (
        <>
          7. SECURITY OF YOUR INFORMATION
          <br />
          We take steps designed to ensure that your information is treated securely and in
          accordance with this Privacy Policy. Unfortunately, no system is 100% secure, and we
          cannot ensure or warrant the security of any information you provide to us. To the fullest
          extent permitted by applicable law, we do not accept liability for unauthorized
          disclosure.
          <div>
            By using our Services or providing personal information to us, you agree that we may
            communicate with you electronically regarding security, privacy, and administrative
            issues relating to your use of our Services. If we learn of a security system’s breach,
            we may attempt to notify you electronically by posting a notice on our Services, by mail
            or by sending an email to you.
          </div>
        </>
      ),
    },
    {
      id: "privacy_8",
      content: (
        <>
          8. INTERNATIONAL DATA TRANSFERS
          <br />
          All information processed by us may be transferred, processed, and stored anywhere in the
          world, <br />
          including, but not limited to, the United States or other countries, which may have data
          protection laws <br />
          that are different from the laws where you live. We endeavor to safeguard your information
          consistent <br />
          with the requirements of applicable laws.
        </>
      ),
      mobile_content: (
        <>
          8. INTERNATIONAL DATA TRANSFERS
          <br />
          All information processed by us may be transferred, processed, and stored anywhere in the
          world, including, but not limited to, the United States or other countries, which may have
          data protection laws that are different from the laws where you live. We endeavor to
          safeguard your information consistent with the requirements of applicable laws.
        </>
      ),
    },
    {
      id: "privacy_9",
      content: (
        <>
          9. RETENTION OF PERSONAL INFORMATION
          <br />
          We store the personal information we collect as described in this Privacy Policy for as
          long as you use
          <br />
          our Services or as necessary to fulfill the purpose(s) for which it was collected, provide
          our Services,
          <br />
          resolve disputes, establish legal defenses, conduct audits, pursue legitimate business
          purposes,
          <br />
          enforce our agreements, and comply with applicable laws.
        </>
      ),
      mobile_content: (
        <>
          9. RETENTION OF PERSONAL INFORMATION
          <br />
          We store the personal information we collect as described in this Privacy Policy for as
          long as you use our Services or as necessary to fulfill the purpose(s) for which it was
          collected, provide our Services, resolve disputes, establish legal defenses, conduct
          audits, pursue legitimate business purposes, enforce our agreements, and comply with
          applicable laws.
        </>
      ),
    },
    {
      id: "privacy_10",
      content: (
        <>
          10. SUPPLEMENTAL NOTICE FOR CALIFORNIA RESIDENTS
          <br />
          This Supplemental Notice for California Residents only applies to our processing of
          personal
          <br />
          information that is subject to the California Consumer Privacy Act of 2018 (“CCPA”). The
          CCPA provides
          <br />
          California residents with the right to know what categories of personal information
          Defient has
          <br />
          collected about them and whether Defient disclosed that personal information for a
          business purpose
          <br />
          (e.g., to a service provider) in the preceding twelve months. California residents can
          find this <br />
          information below.
          <br />
          The categories of sources from which we collect personal information and our business and
          <br />
          commercial purposes for using personal information are set forth in “Personal Information
          we Collect”
          <br />
          and “How We Use Your Information” above, respectively.
          <br />
          “Sales” of Personal Information under the CCPA. For purposes of the CCPA, Defient does not
          “sell”
          <br />
          personal information, nor do we have actual knowledge of any “sale” of personal
          information of <br />
          minors under 16 years of age.
          <div className="pt-[1.5rem]">
            Additional Privacy Rights for California Residents
            <br />
            Non-Discrimination. California residents have the right not to receive discriminatory
            treatment by us <br />
            for the exercise of their rights conferred by the CCPA.
          </div>
          <div className="pt-[1.5rem]">
            Authorized Agent. Only you, or someone legally authorized to act on your behalf, may
            make a<br />
            verifiable consumer request related to your personal information. To designate an
            authorized agent,
            <br />
            please contact us as set forth in “Contact Us” below.
            <br />
            Verification. When you make a request, we will ask you to provide sufficient information
            that allows us
            <br />
            to reasonably verify you are the person about whom we collected personal information or
            an <br />
            authorized representative, which may include confirming the email address associated
            with any <br />
            personal information we have about you. If you are a California resident and would like
            to exercise any
            <br />
            of your rights under the CCPA, please contact us as set forth in “Contact Us” below. We
            will process
            <br />
            such requests in accordance with applicable laws.
          </div>
          <div className="pt-[1.5rem]">
            If you are a California resident and would like to exercise any of your rights under the
            CCPA, please
            <br />
            contact us as set forth in “Contact Us” below. We will process such requests in
            accordance with
            <br />
            applicable laws.
          </div>
          <div className="pt-[1.5rem]">
            Accessibility. This Privacy Policy uses industry-standard technologies and was developed
            in line with
            <br />
            the World Wide Web Consortium’s Web Content Accessibility Guidelines, version 2.1. If
            you wish to print
            <br />
            this policy, please do so from your web browser or by saving the page as a PDF.
          </div>
          <div className="pt-[1.5rem]">
            California Shine the Light. The California “Shine the Light” law permits users who are
            California
            <br />
            residents to request and obtain from us once a year, free of charge, a list of the third
            parties to whom
            <br />
            we have disclosed their personal information (if any) for their direct marketing
            purposes in the prior
            <br />
            calendar year, as well as the type of personal information disclosed to those parties.
          </div>
        </>
      ),
      mobile_content: (
        <>
          10. SUPPLEMENTAL NOTICE FOR CALIFORNIA RESIDENTS
          <br />
          This Supplemental Notice for California Residents only applies to our processing of
          personal information that is subject to the California Consumer Privacy Act of 2018
          (“CCPA”). The CCPA provides California residents with the right to know what categories of
          personal information Defient has collected about them and whether Defient disclosed that
          personal information for a business purpose (e.g., to a service provider) in the preceding
          twelve months. California residents can find this information below. The categories of
          sources from which we collect personal information and our business and commercial
          purposes for using personal information are set forth in “Personal Information we Collect”
          and “How We Use Your Information” above, respectively. “Sales” of Personal Information
          under the CCPA. For purposes of the CCPA, Defient does not “sell” personal information,
          nor do we have actual knowledge of any “sale” of personal information of minors under 16
          years of age.
          <div>
            Additional Privacy Rights for California Residents Non-Discrimination. California
            residents have the right not to receive discriminatory treatment by us for the exercise
            of their rights conferred by the CCPA.
          </div>
          <div>
            Authorized Agent. Only you, or someone legally authorized to act on your behalf, may
            make a verifiable consumer request related to your personal information. To designate an
            authorized agent, please contact us as set forth in “Contact Us” below. Verification.
            When you make a request, we will ask you to provide sufficient information that allows
            us to reasonably verify you are the person about whom we collected personal information
            or an authorized representative, which may include confirming the email address
            associated with any personal information we have about you. If you are a California
            resident and would like to exercise any of your rights under the CCPA, please contact us
            as set forth in “Contact Us” below. We will process such requests in accordance with
            applicable laws.
          </div>
          <div>
            If you are a California resident and would like to exercise any of your rights under the
            CCPA, please contact us as set forth in “Contact Us” below. We will process such
            requests in accordance with applicable laws.
          </div>
          <div>
            Accessibility. This Privacy Policy uses industry-standard technologies and was developed
            in line with the World Wide Web Consortium’s Web Content Accessibility Guidelines,
            version 2.1. If you wish to print this policy, please do so from your web browser or by
            saving the page as a PDF.
          </div>
          <div>
            California Shine the Light. The California “Shine the Light” law permits users who are
            California residents to request and obtain from us once a year, free of charge, a list
            of the third parties to whom we have disclosed their personal information (if any) for
            their direct marketing purposes in the prior calendar year, as well as the type of
            personal information disclosed to those parties.
          </div>
        </>
      ),
    },
    {
      id: "privacy_11",
      content: (
        <>
          11. SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS
          <br />
          If you are a resident of Nevada, you have the right to opt-out of the sale of certain
          personal
          <br />
          information to third parties who intend to license or sell that personal information. You
          can exercise
          <br />
          this right by contacting us as set forth in “Contact Us” below with the subject line
          “Nevada Do Not Sell
          <br />
          Request” and providing us with your name and the email address associated with your
          account. Please
          <br />
          note that we do not currently sell your personal information as sales are defined in
          Nevada Revised
          <br />
          Statutes Chapter 603A.
        </>
      ),
      mobile_content: (
        <>
          11. SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS
          <br />
          If you are a resident of Nevada, you have the right to opt-out of the sale of certain
          personal information to third parties who intend to license or sell that personal
          information. You can exercise this right by contacting us as set forth in “Contact Us”
          below with the subject line “Nevada Do Not Sell Request” and providing us with your name
          and the email address associated with your account. Please note that we do not currently
          sell your personal information as sales are defined in Nevada Revised Statutes Chapter
          603A.
        </>
      ),
    },
    {
      id: "privacy_12",
      content: (
        <>
          12. CHILDREN’S INFORMATION
          <br />
          The Services are not directed to children under 13 (or other age as required by local
          law), and we do
          <br />
          not knowingly collect personal information from children. If you are a parent or guardian
          and believe
          <br />
          your child has provided us with personal information without your consent, you may contact
          us as set
          <br />
          forth in “Contact Us” below. If we learn that a child has provided us with personal
          information in
          <br />
          violation of applicable law, we will promptly take steps to delete such information,
          unless we have a<br />
          legal obligation to keep it.
        </>
      ),
      mobile_content: (
        <>
          12. CHILDREN’S INFORMATION
          <br />
          The Services are not directed to children under 13 (or other age as required by local
          law), and we do not knowingly collect personal information from children. If you are a
          parent or guardian and believe your child has provided us with personal information
          without your consent, you may contact us as set forth in “Contact Us” below. If we learn
          that a child has provided us with personal information in violation of applicable law, we
          will promptly take steps to delete such information, unless we have a legal obligation to
          keep it.
        </>
      ),
    },
    {
      id: "privacy_13",
      content: (
        <>
          13. THIRD-PARTY WEBSITES/APPLICATIONS
          <br />
          The Services may contain links to other websites/applications and other
          websites/applications may
          <br />
          reference or link to our Services. These third-party services are not controlled by us. We
          encourage
          <br />
          our users to read the privacy policies of each website and application with which they
          interact. We do <br />
          not endorse, screen or approve, and are not responsible for, the privacy practices or
          content of such
          <br />
          other websites or applications. Providing personal information to third-party websites or
          applications
          <br />
          is at your own risk.
        </>
      ),
      mobile_content: (
        <>
          13. THIRD-PARTY WEBSITES/APPLICATIONS
          <br />
          The Services may contain links to other websites/applications and other
          websites/applications may reference or link to our Services. These third-party services
          are not controlled by us. We encourage our users to read the privacy policies of each
          website and application with which they interact. We do not endorse, screen or approve,
          and are not responsible for, the privacy practices or content of such other websites or
          applications. Providing personal information to third-party websites or applications is at
          your own risk.
        </>
      ),
    },
    {
      id: "privacy_14",
      content: (
        <>
          14. SUPERVISORY AUTHORITY
          <br />
          If you are located in the European Economic Area, Switzerland, or the United Kingdom you
          have the
          <br />
          right to lodge a complaint with a supervisory authority if you believe our processing of
          your personal
          <br />
          information violates applicable law.
        </>
      ),
      mobile_content: (
        <>
          14. SUPERVISORY AUTHORITY
          <br />
          If you are located in the European Economic Area, Switzerland, or the United Kingdom you
          have the right to lodge a complaint with a supervisory authority if you believe our
          processing of your personal information violates applicable law.
        </>
      ),
    },
    {
      id: "privacy_15",
      content: (
        <>
          15. CONTACT US <br />
          If you have any questions about our privacy practices or this Privacy Policy, or to
          exercise your rights
          <br />
          as detailed in this Privacy Policy, please contact us at support@defient.co
        </>
      ),
      mobile_content: (
        <>
          15. CONTACT US <br />
          If you have any questions about our privacy practices or this Privacy Policy, or to
          exercise your rights as detailed in this Privacy Policy, please contact us at
          support@defient.co
        </>
      ),
    },
  ]

  const containerRef = useRef<any>()

  const isMobile = useMediaQuery("(max-width: 799px)")

  const { scrollY } = useScroll({ container: containerRef })

  const { isScrollEnded } = useScrollEnded({
    ref: containerRef,
    scrollY,
  })

  return (
    <Layout type="contained">
      <div className="relative pb-[2rem] w-[100vw] overflow-y-scroll" ref={containerRef}>
        {!isScrollEnded && (
          <div
            className="fixed 
              w-[100vw] h-[265px] 
              left-0 bottom-0
              pointer-events-none
              bg-gradient-to-t from-[white] dark:from-[black] to-[transparent]
              z-[20]"
          />
        )}
        <div className="relative w-full">
          <div
            className="font-eigerdals 
              text-[36px] md:text-[65px] 
              pt-[10rem] pb-[40px] 
              dark:text-[white] 
              mx-5 md:mx-12"
          >
            Privacy Policy
          </div>
          <div
            className="md:mx-12 md:pl-[90px]
            mx-5 pl-0"
          >
            <div className="w-[270px] samsungS8:w-[320px] xs:w-[350px] md:w-[917px]">
              {sections.map((section: SectionType) => (
                <div key={section.id} className="pb-[1.5rem] font-quicksand">
                  <div className="text-[14.5px] samsungS8:text-[16px] xs:text-[19px] font-medium dark:text-[white] leading-[137%]">
                    {isMobile ? section.mobile_content : section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPage
