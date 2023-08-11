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

const TermsPage = () => {
  const sections: SectionType[] = [
    {
      id: "terms_greeting",
      content: (
        <>
          Website Terms Of Service <br />
          Last Updated: [June 1 2023]
        </>
      ),
      mobile_content: (
        <>
          Website Terms Of Service <br />
          Last Updated: [June 1 2023]
        </>
      ),
    },
    {
      id: "terms_care",
      content: (
        <>
          Please read these Terms of Use (the “Terms”) and our Privacy Policy (“Privacy Policy”)
          carefully <br />
          because they govern your use of the website located at https://defient.co/ and the content
          and <br />
          functionalities accessible via the Site (collectively, the “Site”) offered by Defi
          Entertainment, Inc.
          <br />
          (“Defient”), a Delaware corporation.
        </>
      ),
      mobile_content: (
        <>
          Please read these Terms of Use (the “Terms”) and our Privacy Policy (“Privacy Policy”)
          carefully because they govern your use of the website located at https://defient.co/ and
          the content and functionalities accessible via the Site (collectively, the “Site”) offered
          by Defi Entertainment, Inc. (“Defient”), a Delaware corporation.
        </>
      ),
    },
    {
      id: "terms_important",
      content: (
        <>
          IMPORTANT NOTICE REGARDING ARBITRATION: WHEN YOU AGREE TO THESE TERMS YOU ARE <br />
          AGREEING (WITH LIMITED EXCEPTION) TO RESOLVE ANY DISPUTE BETWEEN YOU AND DEFIENT <br />
          THROUGH BINDING, INDIVIDUAL ARBITRATION RATHER THAN IN COURT. PLEASE REVIEW CAREFULLY{" "}
          <br />
          SECTION 14 “DISPUTE RESOLUTION” BELOW FOR DETAILS REGARDING ARBITRATION. HOWEVER, IF
          <br />
          YOU ARE A RESIDENT OF A JURISDICTION WHERE APPLICABLE LAW PROHIBITS ARBITRATION OF
          <br />
          DISPUTES, THE AGREEMENT TO ARBITRATE IN SECTION 14 WILL NOT APPLY TO YOU BUT THE
          <br />
          PROVISIONS OF SECTION 13 (GOVERNING LAW) WILL APPLY INSTEAD.
        </>
      ),
      mobile_content: (
        <>
          IMPORTANT NOTICE REGARDING ARBITRATION: WHEN YOU AGREE TO THESE TERMS YOU ARE AGREEING
          (WITH LIMITED EXCEPTION) TO RESOLVE ANY DISPUTE BETWEEN YOU AND DEFIENT THROUGH BINDING,
          INDIVIDUAL ARBITRATION RATHER THAN IN COURT. PLEASE REVIEW CAREFULLY SECTION 14 “DISPUTE
          RESOLUTION” BELOW FOR DETAILS REGARDING ARBITRATION. HOWEVER, IF YOU ARE A RESIDENT OF A
          JURISDICTION WHERE APPLICABLE LAW PROHIBITS ARBITRATION OF DISPUTES, THE AGREEMENT TO
          ARBITRATE IN SECTION 14 WILL NOT APPLY TO YOU BUT THE PROVISIONS OF SECTION 13 (GOVERNING
          LAW) WILL APPLY INSTEAD.
        </>
      ),
    },
    {
      id: "terms_1",
      content: (
        <>
          1. Agreement to Terms. By using our Site, you agree to be bound by these Terms. If you
          don’t agree to
          <br />
          be bound by these Terms, do not use the Site.
        </>
      ),
      mobile_content: (
        <>
          1. Agreement to Terms. By using our Site, you agree to be bound by these Terms. If you
          don’t agree to be bound by these Terms, do not use the Site.
        </>
      ),
    },
    {
      id: "terms_2",
      content: (
        <>
          2. Privacy Policy. Please review our Privacy Policy, which also governs your use of the
          Site, for information on how we collect, use and share your information.
        </>
      ),
      mobile_content: (
        <>
          2. Privacy Policy. Please review our Privacy Policy, which also governs your use of the
          Site, for information on how we collect, use and share your information.
        </>
      ),
    },
    {
      id: "terms_3",
      content: (
        <>
          3. Changes to these Terms or the Site. We may update the Terms from time to time at our
          sole
          <br />
          discretion. If we do, we’ll let you know by posting the updated Terms on the Site. It’s
          important that you
          <br />
          review the Terms whenever we update them or you use the Site. If you continue to use the
          Site after
          <br />
          we have posted updated Terms it means that you accept and agree to the changes. If you
          don’t agree
          <br />
          to be bound by the changes, you may not use the Site anymore. We may change or discontinue
          all or
          <br />
          any part of the Site, at any time and without notice, at our sole discretion.
        </>
      ),
      mobile_content: (
        <>
          3. Changes to these Terms or the Site. We may update the Terms from time to time at our
          sole discretion. If we do, we’ll let you know by posting the updated Terms on the Site.
          It’s important that you review the Terms whenever we update them or you use the Site. If
          you continue to use the Site after we have posted updated Terms it means that you accept
          and agree to the changes. If you don’t agree to be bound by the changes, you may not use
          the Site anymore. We may change or discontinue all or any part of the Site, at any time
          and without notice, at our sole discretion.
        </>
      ),
    },
    {
      id: "terms_4",
      content: (
        <>
          4. Who May Use the Site? You may use the Site only if you are 18 years or older and
          capable
          <br />
          of forming a binding contract with Defient, and not otherwise barred from using the Site
          under applicable
          <br />
          law.
        </>
      ),
      mobile_content: (
        <>
          4. Who May Use the Site? You may use the Site only if you are 18 years or older and
          capable of forming a binding contract with Defient, and not otherwise barred from using
          the Site under applicable law.
        </>
      ),
    },
    {
      id: "terms_5",
      content: (
        <>
          5. Feedback. We value your feedback on the Site, but please don’t send us suggestions for
          <br />
          improvements, creative ideas, designs, pitch portfolios or other materials (collectively
          “Unsolicited
          <br />
          Ideas”). This policy is aimed at avoiding potential disputes or misunderstandings when our
          Site might
          <br />
          seem similar to Unsolicited Ideas that people submit. We may currently be developing, have
          developed
          <br />
          or in the future will develop ideas or materials internally or receive ideas or materials
          from other
          <br />
          parties that may be similar to Unsolicited Ideas. If you ignore this policy and send us
          your Unsolicited
          <br />
          Ideas anyway, you grant us a non-exclusive, worldwide, perpetual, irrevocable, fully-paid,
          royalty-free,
          <br />
          sub-licensable and transferable license under any and all intellectual property or other
          rights that you
          <br />
          own or control to use, copy, modify, create derivative works based upon, make, have made,
          sell, offer
          <br />
          for sale, import and otherwise exploit in any manner or medium whatsoever known now or in
          the
          <br />
          future your Unsolicited Ideas for any purpose, without compensation to you.
        </>
      ),
      mobile_content: (
        <>
          5. Feedback. We value your feedback on the Site, but please don’t send us suggestions for
          improvements, creative ideas, designs, pitch portfolios or other materials (collectively
          “Unsolicited Ideas”). This policy is aimed at avoiding potential disputes or
          misunderstandings when our Site might seem similar to Unsolicited Ideas that people
          submit. We may currently be developing, have developed or in the future will develop ideas
          or materials internally or receive ideas or materials from other parties that may be
          similar to Unsolicited Ideas. If you ignore this policy and send us your Unsolicited Ideas
          anyway, you grant us a non-exclusive, worldwide, perpetual, irrevocable, fully-paid,
          royalty-free, sub-licensable and transferable license under any and all intellectual
          property or other rights that you own or control to use, copy, modify, create derivative
          works based upon, make, have made, sell, offer for sale, import and otherwise exploit in
          any manner or medium whatsoever known now or in the future your Unsolicited Ideas for any
          purpose, without compensation to you.
        </>
      ),
    },
    {
      id: "terms_6",
      content: (
        <>
          6. Defients’ Intellectual Property. We may make available through the Site content that is
          subject to
          <br />
          intellectual property rights. We or our licensors, or the third parties who otherwise own
          the intellectual
          <br />
          property rights, retain all rights to that content.
        </>
      ),
      mobile_content: (
        <>
          6. Defients’ Intellectual Property. We may make available through the Site content that is
          subject to intellectual property rights. We or our licensors, or the third parties who
          otherwise own the intellectual property rights, retain all rights to that content.
        </>
      ),
    },
    {
      id: "terms_7",
      content: (
        <>
          7. General Prohibitions and Defients’’ Enforcement Rights. You agree not to do any of the
          following:
          <br />
          <ul className="pl-8">
            <li className="list-disc">
              (a) Use, display, mirror or frame the Site or any individual element within the Site,
              Site’s name, any
              <br />
              Defient trademark, logo or other proprietary information, or the layout and design of
              any page
              <br />
              or form contained on a page, without Defients’ express written consent;
            </li>
            <li className="list-disc">
              (b) Access, tamper with, or use non-public areas of the Site, Defients’ computer
              systems, or the
              <br />
              technical delivery systems of Defients’ providers;
            </li>
            <li className="list-disc">
              (c) Attempt to probe, scan or test the vulnerability of any Defients’ system or
              network or breach
              <br />
              any security or authentication measures;
            </li>
            <li className="list-disc">
              (d) Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any
              <br />
              technological measure implemented by Defient or any of Defients’ providers or any
              other third
              <br />
              party (including another user) to protect the Site;
            </li>
            <li className="list-disc">
              (e) Attempt to access or search the Site or download content from the Site using any
              engine,
              <br />
              software, tool, agent, device or mechanism (including spiders, robots, crawlers, data
              mining tools or
              <br />
              the like) other than the software and/or search agents provided by Defient or other
              generally
              <br />
              available third-party web browsers;
            </li>
            <li className="list-disc">
              (f) Use the Site, or any portion thereof, for any commercial purpose or for the
              benefit of any third
              <br />
              party or in any manner not permitted by these Terms;
            </li>
            <li className="list-disc">
              (g) Attempt to decipher, decompile, disassemble or reverse engineer any of the
              software used to
              <br />
              provide the Site;
            </li>
            <li className="list-disc">
              (h) Interfere with, or attempt to interfere with, the access of any user, host or
              network, including,
              <br />
              without limitation, sending a virus, overloading, flooding, spamming, or mail-bombing
              the Site;
            </li>
            <li className="list-disc">
              (i) Impersonate or misrepresent your affiliation with any person or entity;
            </li>
            <li className="list-disc">(j) Violate any applicable law or regulation; or</li>
            <li className="list-disc">
              (k) Encourage or enable any other individual to do any of the foregoing.
            </li>
          </ul>{" "}
          <br />
          Defient is not obligated to monitor access to or use of the Site or to review or edit any
          content.
          <br />
          However, we have the right to do so for the purpose of operating the Site, to ensure
          compliance with
          <br />
          these Terms and to comply with applicable law or other legal requirements. We reserve the
          right, but
          <br />
          are not obligated, to remove or disable access to any content, at any time and without
          notice,
          <br />
          including, but not limited to, if we, at our sole discretion, consider it objectionable or
          in violation of
          <br />
          these Terms. We have the right to investigate violations of these Terms or conduct that
          affects the
          <br />
          Site. We may also consult and cooperate with law enforcement authorities to prosecute
          users who
          <br />
          violate the law.
        </>
      ),
      mobile_content: (
        <>
          7. General Prohibitions and Defients’’ Enforcement Rights. You agree not to do any of the
          following:
          <br />
          <ul className="pl-8">
            <li className="list-disc">
              (a) Use, display, mirror or frame the Site or any individual element within the Site,
              Site’s name, any Defient trademark, logo or other proprietary information, or the
              layout and design of any page or form contained on a page, without Defients’ express
              written consent;
            </li>
            <li className="list-disc">
              (b) Access, tamper with, or use non-public areas of the Site, Defients’ computer
              systems, or the technical delivery systems of Defients’ providers;
            </li>
            <li className="list-disc">
              (c) Attempt to probe, scan or test the vulnerability of any Defients’ system or
              network or breach any security or authentication measures;
            </li>
            <li className="list-disc">
              (d) Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any
              technological measure implemented by Defient or any of Defients’ providers or any
              other third party (including another user) to protect the Site;
            </li>
            <li className="list-disc">
              (e) Attempt to access or search the Site or download content from the Site using any
              engine, software, tool, agent, device or mechanism (including spiders, robots,
              crawlers, data mining tools or the like) other than the software and/or search agents
              provided by Defient or other generally available third-party web browsers;
            </li>
            <li className="list-disc">
              (f) Use the Site, or any portion thereof, for any commercial purpose or for the
              benefit of any third party or in any manner not permitted by these Terms;
            </li>
            <li className="list-disc">
              (g) Attempt to decipher, decompile, disassemble or reverse engineer any of the
              software used to provide the Site;
            </li>
            <li className="list-disc">
              (h) Interfere with, or attempt to interfere with, the access of any user, host or
              network, including, without limitation, sending a virus, overloading, flooding,
              spamming, or mail-bombing the Site;
            </li>
            <li className="list-disc">
              (i) Impersonate or misrepresent your affiliation with any person or entity;
            </li>
            <li className="list-disc">(j) Violate any applicable law or regulation; or</li>
            <li className="list-disc">
              (k) Encourage or enable any other individual to do any of the foregoing.
            </li>
          </ul>{" "}
          <br />
          Defient is not obligated to monitor access to or use of the Site or to review or edit any
          content. However, we have the right to do so for the purpose of operating the Site, to
          ensure compliance with these Terms and to comply with applicable law or other legal
          requirements. We reserve the right, but are not obligated, to remove or disable access to
          any content, at any time and without notice, including, but not limited to, if we, at our
          sole discretion, consider it objectionable or in violation of these Terms. We have the
          right to investigate violations of these Terms or conduct that affects the Site. We may
          also consult and cooperate with law enforcement authorities to prosecute users who violate
          the law.
        </>
      ),
    },
    {
      id: "terms_8",
      content: (
        <>
          8. Links to Third Party Websites or Resources. The Site may allow you to access
          third-party websites or
          <br />
          other resources. We provide access only as a convenience and are not responsible for the
          content,
          <br />
          products or services on or available from those resources or links displayed on such
          websites. You
          <br />
          acknowledge sole responsibility for and assume all risk arising from, your use of any
          third-party
          <br />
          resources.
        </>
      ),
      mobile_content: (
        <>
          8. Links to Third Party Websites or Resources. The Site may allow you to access
          third-party websites or other resources. We provide access only as a convenience and are
          not responsible for the content, products or services on or available from those resources
          or links displayed on such websites. You acknowledge sole responsibility for and assume
          all risk arising from, your use of any third-party resources.
        </>
      ),
    },
    {
      id: "terms_9",
      content: (
        <>
          9. Termination. We may suspend or terminate your access to and use of the Site, at our
          sole discretion,
          <br />
          at any time and without notice to you. Upon any termination, discontinuation or
          cancellation of these
          <br />
          Terms or the Site, the following Sections will survive: 5, 6, 8, 9, 10, 11, 12, 13, 14,
          and 15.
        </>
      ),
      mobile_content: (
        <>
          9. Termination. We may suspend or terminate your access to and use of the Site, at our
          sole discretion, at any time and without notice to you. Upon any termination,
          discontinuation or cancellation of these Terms or the Site, the following Sections will
          survive: 5, 6, 8, 9, 10, 11, 12, 13, 14, and 15.
        </>
      ),
    },
    {
      id: "terms_10",
      content: (
        <>
          10. Warranty Disclaimers. THE SITE IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND.
          <br />
          WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY IMPLIED WARRANTIES OF
          <br />
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT AND NON-
          <br />
          INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
          <br />
          We make no warranty that the Site will meet your requirements or be available on an
          uninterrupted,
          <br />
          secure, or error-free basis. We make no warranty regarding the quality, accuracy,
          timeliness,
          <br />
          truthfulness, completeness or reliability of any information or content on the Site. Any
          reliance you
          <br />
          place on such information or content is strictly at your own risk
        </>
      ),
      mobile_content: (
        <>
          10. Warranty Disclaimers. THE SITE IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND.
          WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT AND NON- INFRINGEMENT,
          AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. We make no warranty
          that the Site will meet your requirements or be available on an uninterrupted, secure, or
          error-free basis. We make no warranty regarding the quality, accuracy, timeliness,
          truthfulness, completeness or reliability of any information or content on the Site. Any
          reliance you place on such information or content is strictly at your own risk
        </>
      ),
    },
    {
      id: "terms_11",
      content: (
        <>
          11. Indemnity. You will indemnify and hold Defient and its officers, directors, employees
          and agents,
          <br />
          harmless from and against any claims, disputes, demands, liabilities, damages, losses, and
          costs and
          <br />
          expenses, including, without limitation, reasonable legal and accounting fees arising out
          of or in any
          <br />
          way connected with (a) your access to or use of the Site, or (b) your violation of these
          Terms.
        </>
      ),
      mobile_content: (
        <>
          11. Indemnity. You will indemnify and hold Defient and its officers, directors, employees
          and agents, harmless from and against any claims, disputes, demands, liabilities, damages,
          losses, and costs and expenses, including, without limitation, reasonable legal and
          accounting fees arising out of or in any way connected with (a) your access to or use of
          the Site, or (b) your violation of these Terms.
        </>
      ),
    },
    {
      id: "terms_12",
      content: (
        <>
          12. Limitation of Liability.
          <ul className="pl-8">
            <li className="list-disc">
              (a) TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER DEFIENT NOR ITS SERVICE
              <br />
              PROVIDERS INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SITE WILL BE LIABLE FOR
              <br />
              ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST
              <br />
              PROFITS, LOST REVENUES, LOST SAVINGS, LOST BUSINESS OPPORTUNITY, LOSS OF DATA OR
              <br />
              GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF
              <br />
              SUBSTITUTE SERVICES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR
              <br />
              FROM THE USE OF OR INABILITY TO USE THE SITE, WHETHER BASED ON WARRANTY, CONTRACT,
              <br />
              TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND
              <br />
              WHETHER OR NOT DEFIENT OR ITS SERVICE PROVIDERS HAVE BEEN INFORMED OF THE
              <br />
              POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE
              <br />
              FAILED OF ITS ESSENTIAL PURPOSE.
            </li>
            <li className="list-disc">
              (b) TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL DEFIENTS’ TOTAL LIABILITY
              <br />
              ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO
              <br />
              USE THE SITE EXCEED ONE HUNDRED U.S. DOLLARS ($100).
            </li>
            <li className="list-disc">
              (c) THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL
              <br />
              ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN DEFIENT AND YOU.
            </li>
          </ul>
        </>
      ),
      mobile_content: (
        <>
          12. Limitation of Liability.
          <ul className="pl-8">
            <li className="list-disc">
              (a) TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER DEFIENT NOR ITS SERVICE PROVIDERS
              INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SITE WILL BE LIABLE FOR ANY
              INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST PROFITS,
              LOST REVENUES, LOST SAVINGS, LOST BUSINESS OPPORTUNITY, LOSS OF DATA OR GOODWILL,
              SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE
              SERVICES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE
              OF OR INABILITY TO USE THE SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
              NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT DEFIENT
              OR ITS SERVICE PROVIDERS HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF
              A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
            </li>
            <li className="list-disc">
              (b) TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL DEFIENTS’ TOTAL LIABILITY
              ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO
              USE THE SITE EXCEED ONE HUNDRED U.S. DOLLARS ($100).
            </li>
            <li className="list-disc">
              (c) THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS
              OF THE BASIS OF THE BARGAIN BETWEEN DEFIENT AND YOU.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "terms_13",
      content: (
        <>
          13. Governing Law and Forum Choice. These Terms and any action related thereto will be
          governed by
          <br />
          the U.S. Federal Arbitration Act, federal arbitration law, and the laws of the State of
          Delaware, without
          <br />
          regard to its conflict of laws provisions. Except as otherwise expressly set forth in
          Section 14 “Dispute
          <br />
          Resolution,” the exclusive jurisdiction for all Disputes (defined below) that you and
          Defient are not
          <br />
          required to arbitrate will be the state and federal courts located in the State of
          Delaware, and you
          <br />
          and Defient each waive any objection to jurisdiction and venue in such courts.
        </>
      ),
      mobile_content: (
        <>
          13. Governing Law and Forum Choice. These Terms and any action related thereto will be
          governed by the U.S. Federal Arbitration Act, federal arbitration law, and the laws of the
          State of Delaware, without regard to its conflict of laws provisions. Except as otherwise
          expressly set forth in Section 14 “Dispute Resolution,” the exclusive jurisdiction for all
          Disputes (defined below) that you and Defient are not required to arbitrate will be the
          state and federal courts located in the State of Delaware, and you and Defient each waive
          any objection to jurisdiction and venue in such courts.
        </>
      ),
    },
    {
      id: "terms_14",
      content: (
        <>
          14. Dispute Resolution.
          <ul className="pl-8">
            <li className="list-disc">
              (a) Informal Resolution of Disputes. You and Defient must first attempt to resolve any
              dispute,
              <br />
              claim or controversy arising out of or relating to these Terms or the breach,
              termination,
              <br />
              enforcement, interpretation or validity thereof or the use of the Services
              (collectively, “Disputes”)
              <br />
              informally. Accordingly, neither you nor Defient may start a formal arbitration
              proceeding for at
              <br />
              least sixty (60) days after one party notifies the other party of a claim in writing.
              As part of this
              <br />
              informal resolution process, you must deliver your written notices via first-class
              mail to us
              <br />
              at Defient, Attn: 14613 Round Valley Dr. Sherman Oaks CA. 91403
            </li>
            <li className="list-disc">
              (b) Mandatory Arbitration of Disputes. We each agree that any Dispute will be resolved
              solely by
              <br />
              binding, individual arbitration and not in a class, representative or consolidated
              action or
              <br />
              proceeding. You and Defient agree that the U.S. Federal Arbitration Act governs the
              interpretation
              <br />
              and enforcement of these Terms, and that you and Defient are each waiving the right to
              a trial by
              <br />
              jury or to participate in a class action. This arbitration provision shall survive
              termination of these
              <br />
              Terms.
            </li>
            <li className="list-disc">
              (c) Exceptions. As limited exceptions to Section 14(b) above: (i) we both may seek to
              resolve a<br />
              Dispute in small claims court if it qualifies; and (ii) we each retain the right to
              seek injunctive or
              <br />
              other equitable relief from a court to prevent (or enjoin) the infringement or
              misappropriation of
              <br />
              our intellectual property rights.
            </li>
            <li className="list-disc">
              (d) Conducting Arbitration and Arbitration Rules. The arbitration will be conducted by
              the American
              <br />
              Arbitration Association (“AAA”) under its Consumer Arbitration Rules (the “AAA Rules”)
              then in
              <br />
              effect, except as modified by these Terms. The AAA Rules are available at www.adr.org
              or by calling
              <br />
              1-800-778-7879. A party who wishes to start arbitration must submit a written Demand
              for
              <br />
              Arbitration to AAA and give notice to the other party as specified in the AAA Rules.
              The AAA
              <br />
              provides a form Demand for Arbitration at www.adr.org. Any arbitration hearings will
              take place in
              <br />
              the county (or parish) where you live, unless we both agree to a different location.
              The parties
              <br />
              agree that the arbitrator shall have exclusive authority to decide all issues relating
              to the
              <br />
              interpretation, applicability, enforceability and scope of this arbitration agreement.
            </li>
            <li className="list-disc">
              (e) Arbitration Costs. Payment of all filing, administration and arbitrator fees will
              be governed by
              <br />
              the AAA Rules, and we won’t seek to recover the administration and arbitrator fees we
              are
              <br />
              responsible for paying, unless the arbitrator finds your Dispute frivolous. If we
              prevail in arbitration,
              <br />
              we’ll pay all of our attorneys’ fees and costs and won’t seek to recover them from
              you. If you
              <br />
              prevail in arbitration you will be entitled to an award of attorneys’ fees and
              expenses to the extent
              <br />
              provided under applicable law.
            </li>
            <li className="list-disc">
              (f) Injunctive and Declaratory Relief. Except as provided in Section 14(c) above, the
              arbitrator shall
              <br />
              determine all issues of liability on the merits of any claim asserted by either party
              and may award
              <br />
              declaratory or injunctive relief only in favor of the individual party seeking relief
              and only to the
              <br />
              extent necessary to provide relief warranted by that party’s individual claim. To the
              extent that you
              <br />
              or we prevail on a claim and seek public injunctive relief (that is, injunctive relief
              that has the
              <br />
              primary purpose and effect of prohibiting unlawful acts that threaten future injury to
              the public),
              <br />
              the entitlement to and extent of such relief must be litigated in a civil court of
              competent
              <br />
              jurisdiction and not in arbitration. The parties agree that litigation of any issues
              of public injunctive
              <br />
              relief shall be stayed pending the outcome of the merits of any individual claims in
              arbitration.
            </li>
            <li className="list-disc">
              (g) Class Action Waiver. YOU AND DEFIENT AGREE THAT EACH MAY BRING CLAIMS AGAINST THE
              <br />
              OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER
              <br />
              IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, if the parties’ Dispute
              is
              <br />
              resolved through arbitration, the arbitrator may not consolidate another person’s
              claims with your
              <br />
              claims, and may not otherwise preside over any form of a representative or class
              proceeding. If
              <br />
              this specific provision is found to be unenforceable, then the entirety of this
              Dispute Resolution
              <br />
              section shall be null and void.
            </li>
            <li className="list-disc">
              (h) Severability. With the exception of any of the provisions in Section 14(g) of
              these Terms (“Class
              <br />
              Action Waiver”), if an arbitrator or court of competent jurisdiction decides that any
              part of these
              <br />
              Terms is invalid or unenforceable, the other parts of these Terms will still apply.
            </li>
          </ul>
        </>
      ),
      mobile_content: (
        <>
          14. Dispute Resolution.
          <ul className="pl-8">
            <li className="list-disc">
              (a) Informal Resolution of Disputes. You and Defient must first attempt to resolve any
              dispute, claim or controversy arising out of or relating to these Terms or the breach,
              termination, enforcement, interpretation or validity thereof or the use of the
              Services (collectively, “Disputes”) informally. Accordingly, neither you nor Defient
              may start a formal arbitration proceeding for at least sixty (60) days after one party
              notifies the other party of a claim in writing. As part of this informal resolution
              process, you must deliver your written notices via first-class mail to us at Defient,
              Attn: 14613 Round Valley Dr. Sherman Oaks CA. 91403
            </li>
            <li className="list-disc">
              (b) Mandatory Arbitration of Disputes. We each agree that any Dispute will be resolved
              solely by binding, individual arbitration and not in a class, representative or
              consolidated action or proceeding. You and Defient agree that the U.S. Federal
              Arbitration Act governs the interpretation and enforcement of these Terms, and that
              you and Defient are each waiving the right to a trial by jury or to participate in a
              class action. This arbitration provision shall survive termination of these Terms.
            </li>
            <li className="list-disc">
              (c) Exceptions. As limited exceptions to Section 14(b) above: (i) we both may seek to
              resolve a Dispute in small claims court if it qualifies; and (ii) we each retain the
              right to seek injunctive or other equitable relief from a court to prevent (or enjoin)
              the infringement or misappropriation of our intellectual property rights.
            </li>
            <li className="list-disc">
              (d) Conducting Arbitration and Arbitration Rules. The arbitration will be conducted by
              the American Arbitration Association (“AAA”) under its Consumer Arbitration Rules (the
              “AAA Rules”) then in effect, except as modified by these Terms. The AAA Rules are
              available at www.adr.org or by calling 1-800-778-7879. A party who wishes to start
              arbitration must submit a written Demand for Arbitration to AAA and give notice to the
              other party as specified in the AAA Rules. The AAA provides a form Demand for
              Arbitration at www.adr.org. Any arbitration hearings will take place in the county (or
              parish) where you live, unless we both agree to a different location. The parties
              agree that the arbitrator shall have exclusive authority to decide all issues relating
              to the interpretation, applicability, enforceability and scope of this arbitration
              agreement.
            </li>
            <li className="list-disc">
              (e) Arbitration Costs. Payment of all filing, administration and arbitrator fees will
              be governed by the AAA Rules, and we won’t seek to recover the administration and
              arbitrator fees we are responsible for paying, unless the arbitrator finds your
              Dispute frivolous. If we prevail in arbitration, we’ll pay all of our attorneys’ fees
              and costs and won’t seek to recover them from you. If you prevail in arbitration you
              will be entitled to an award of attorneys’ fees and expenses to the extent provided
              under applicable law.
            </li>
            <li className="list-disc">
              (f) Injunctive and Declaratory Relief. Except as provided in Section 14(c) above, the
              arbitrator shall determine all issues of liability on the merits of any claim asserted
              by either party and may award declaratory or injunctive relief only in favor of the
              individual party seeking relief and only to the extent necessary to provide relief
              warranted by that party’s individual claim. To the extent that you or we prevail on a
              claim and seek public injunctive relief (that is, injunctive relief that has the
              primary purpose and effect of prohibiting unlawful acts that threaten future injury to
              the public), the entitlement to and extent of such relief must be litigated in a civil
              court of competent jurisdiction and not in arbitration. The parties agree that
              litigation of any issues of public injunctive relief shall be stayed pending the
              outcome of the merits of any individual claims in arbitration.
            </li>
            <li className="list-disc">
              (g) Class Action Waiver. YOU AND DEFIENT AGREE THAT EACH MAY BRING CLAIMS AGAINST THE
              OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER
              IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, if the parties’ Dispute
              is resolved through arbitration, the arbitrator may not consolidate another person’s
              claims with your claims, and may not otherwise preside over any form of a
              representative or class proceeding. If this specific provision is found to be
              unenforceable, then the entirety of this Dispute Resolution section shall be null and
              void.
            </li>
            <li className="list-disc">
              (h) Severability. With the exception of any of the provisions in Section 14(g) of
              these Terms (“Class Action Waiver”), if an arbitrator or court of competent
              jurisdiction decides that any part of these Terms is invalid or unenforceable, the
              other parts of these Terms will still apply.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "terms_15",
      content: (
        <>
          15. General Terms.
          <ul className="pl-8">
            <li className="list-disc">
              (a) Reservation of Rights. Defient and its licensors exclusively own all right, title
              and interest in and
              <br />
              to the Site, including all associated intellectual property rights. You acknowledge
              that the Site is
              <br />
              protected by copyright, trademark, and other laws of the United States and other
              jurisdictions. You
              <br />
              agree not to remove, alter or obscure any copyright, trademark, service mark or other
              proprietary
              <br />
              rights notices incorporated in or accompanying the Site.
            </li>
            <li className="list-disc">
              (b) Entire Agreement. These Terms constitute the entire and exclusive understanding
              and
              <br />
              agreement between Defient and you regarding the Site, and these Terms supersede and
              replace all
              <br />
              prior oral or written understandings or agreements between Defient and you regarding
              the Site. If
              <br />
              any provision of these Terms is held invalid or unenforceable by a court of competent
              jurisdiction,
              <br />
              that provision will be enforced to the maximum extent permissible and the other
              provisions of these
              <br />
              Terms will remain in full force and effect. Except where provided by applicable law in
              your
              <br />
              jurisdiction, you may not assign or transfer these Terms, by operation of law or
              otherwise, without
              <br />
              Defients’ prior written consent. Any attempt by you to assign or transfer these Terms
              absent our
              <br />
              consent or your statutory right, without such consent, will be null. Defient may
              freely assign or
              <br />
              transfer these Terms without restriction. Subject to the foregoing, these Terms will
              bind and insure
              <br />
              to the benefit of the parties, their successors and permitted assigns.
            </li>
            <li className="list-disc">
              (c) Notices. Any notices or other communications provided by Defient under these Terms
              will be
              <br />
              given by posting to the Site.
            </li>
            <li className="list-disc">
              (d) Waiver of Rights. Defients’ failure to enforce any right or provision of these
              Terms will not
              <br />
              be considered a waiver of such right or provision. The waiver of any such right or
              provision will be
              <br />
              effective only if in writing and signed by a duly authorized representative ofDefient.
              Except as
              <br />
              expressly set forth in these Terms, the exercise by either party of any of its
              remedies under these
              <br />
              Terms will be without prejudice to its other remedies under these Terms or otherwise.
            </li>
          </ul>
        </>
      ),
      mobile_content: (
        <>
          15. General Terms.
          <ul className="pl-8">
            <li className="list-disc">
              (a) Reservation of Rights. Defient and its licensors exclusively own all right, title
              and interest in and to the Site, including all associated intellectual property
              rights. You acknowledge that the Site is protected by copyright, trademark, and other
              laws of the United States and other jurisdictions. You agree not to remove, alter or
              obscure any copyright, trademark, service mark or other proprietary rights notices
              incorporated in or accompanying the Site.
            </li>
            <li className="list-disc">
              (b) Entire Agreement. These Terms constitute the entire and exclusive understanding
              and agreement between Defient and you regarding the Site, and these Terms supersede
              and replace all prior oral or written understandings or agreements between Defient and
              you regarding the Site. If any provision of these Terms is held invalid or
              unenforceable by a court of competent jurisdiction, that provision will be enforced to
              the maximum extent permissible and the other provisions of these Terms will remain in
              full force and effect. Except where provided by applicable law in your jurisdiction,
              you may not assign or transfer these Terms, by operation of law or otherwise, without
              Defients’ prior written consent. Any attempt by you to assign or transfer these Terms
              absent our consent or your statutory right, without such consent, will be null.
              Defient may freely assign or transfer these Terms without restriction. Subject to the
              foregoing, these Terms will bind and insure to the benefit of the parties, their
              successors and permitted assigns.
            </li>
            <li className="list-disc">
              (c) Notices. Any notices or other communications provided by Defient under these Terms
              will be given by posting to the Site.
            </li>
            <li className="list-disc">
              (d) Waiver of Rights. Defients’ failure to enforce any right or provision of these
              Terms will not be considered a waiver of such right or provision. The waiver of any
              such right or provision will be effective only if in writing and signed by a duly
              authorized representative ofDefient. Except as expressly set forth in these Terms, the
              exercise by either party of any of its remedies under these Terms will be without
              prejudice to its other remedies under these Terms or otherwise.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "terms_16",
      content: (
        <>
          <div className="pb-[1.5rem]">
            16. Contact Information. If you have any questions about these Terms or the Site, please
            contact
            <br />
            Defient at [ support@defient.co ].
          </div>
          <div className="pb-[1.5rem]">
            NFT TERMS & CONDITIONS
            <br />
            Cre8ors is a collection of digital artworks (NFTs) running on the Ethereum network. This
            website is only
            <br />
            an interface allowing participants to exchange digital collectibles. Users are entirely
            responsible for the
            <br />
            safety and management of their own private Ethereum wallets and validating all
            transactions and
            <br />
            contracts generated by this website before approval. Furthermore, as the Cre8ors smart
            contract runs
            <br />
            on the Ethereum network, there is no ability to undo, reverse, or restore any
            transactions.
          </div>
          <div className="pb-[1.5rem]">
            This website and its connected services are provided “as is” and “as available” without
            warranty of any
            <br />
            kind. By using this website you are accepting sole responsibility for any and all
            transactions involving
            <br />
            Cre8ors digital collectibles.
          </div>
          <div className="pb-[1.5rem]">
            NFT OWNERSHIP
            <br />
            <div>
              i. You Own the NFT. Each Cre8or is an NFT on the Ethereum blockchain. When you
              purchase an NFT,
              <br />
              you own the underlying Cre8or, the Art, completely. Ownership of the NFT is mediated
              entirely by the
              <br />
              Smart Contract and the Ethereum Network: at no point may we seize, freeze, or
              otherwise modify
              <br />
              the ownership of any Cre8or.
            </div>
            <div className="pb-[1.5rem]">
              ii. Personal Use. Subject to your continued compliance with these Terms, Defi
              Entertainment Inc. grants
              <br />
              you a worldwide, royalty-free license to use, copy, and display the purchased Art,
              along with any
              <br />
              extensions that you choose to create or use, solely for the following purposes: (i)
              for your own
              <br />
              personal, non-commercial use; (ii) as part of a marketplace that permits the purchase
              and sale of
              <br />
              your Cre8or / NFT, provided that the marketplace cryptographically verifies each
              Cre8or owner’s
              <br />
              rights to display the Art for their Cre8or to ensure that only the actual owner can
              display the Art; or (iii)
              <br />
              as part of a third party website or application that permits the inclusion,
              involvement, or participation
              <br />
              of your Cre8or, provided that the website/application cryptographically verifies each
              Cre8or owner’s
              <br />
              rights to display the Art for their Cre8or to ensure that only the actual owner can
              display the Art, and
              <br />
              provided that the Art is no longer visible once the owner of the Cre8or leaves the
              website/application.
            </div>
            <div className="pb-[1.5rem]">
              iii. Commercial Use. Subject to your continued compliance with these Terms, Defi
              Entertainment Inc.
              <br />
              grants you an unlimited, worldwide license to use, copy, and display the purchased Art
              for the purpose
              <br />
              of creating derivative works based upon the Art (“Commercial Use”). Examples of such
              Commercial
              <br />
              Use would e.g. be the use of the Art to produce and sell merchandise products
              (T-Shirts etc.)
              <br />
              displaying copies of the Art. For the sake of clarity, nothing in this Section will be
              deemed to restrict
              <br />
              you from (i) owning or operating a marketplace that permits the use and sale of
              Cre8ors generally,
              <br />
              provided that the marketplace cryptographically verifies each Cre8or owner’s rights to
              display the Art
              <br />
              for their Cre8or to ensure that only the actual owner can display the Art; (ii) owning
              or operating a<br />
              third party website or application that permits the inclusion, involvement, or
              participation of Cre8ors
              <br />
              generally, provided that the third party website or application cryptographically
              verifies each Cre8or
              <br />
              owner’s rights to display the Art for their Cre8or to ensure that only the actual
              owner can display the
              <br />
              Art, and provided that the Art is no longer visible once the owner of the Purchased
              Cre8or leaves the
              <br />
              website/application; or (iii) earning revenue from any of the foregoing.
            </div>
          </div>
        </>
      ),
      mobile_content: (
        <>
          <div>
            16. Contact Information. If you have any questions about these Terms or the Site, please
            contact Defient at [ support@defient.co ].
          </div>
          <div>
            NFT TERMS & CONDITIONS Cre8ors is a collection of digital artworks (NFTs) running on the
            Ethereum network. This website is only an interface allowing participants to exchange
            digital collectibles. Users are entirely responsible for the safety and management of
            their own private Ethereum wallets and validating all transactions and contracts
            generated by this website before approval. Furthermore, as the Cre8ors smart contract
            runs on the Ethereum network, there is no ability to undo, reverse, or restore any
            transactions.
          </div>
          <div>
            This website and its connected services are provided “as is” and “as available” without
            warranty of any kind. By using this website you are accepting sole responsibility for
            any and all transactions involving Cre8ors digital collectibles.
          </div>
          <div>
            NFT OWNERSHIP
            <br />
            <div>
              i. You Own the NFT. Each Cre8or is an NFT on the Ethereum blockchain. When you
              purchase an NFT, you own the underlying Cre8or, the Art, completely. Ownership of the
              NFT is mediated entirely by the Smart Contract and the Ethereum Network: at no point
              may we seize, freeze, or otherwise modify the ownership of any Cre8or.
            </div>
            <div>
              ii. Personal Use. Subject to your continued compliance with these Terms, Defi
              Entertainment Inc. grants you a worldwide, royalty-free license to use, copy, and
              display the purchased Art, along with any extensions that you choose to create or use,
              solely for the following purposes: (i) for your own personal, non-commercial use; (ii)
              as part of a marketplace that permits the purchase and sale of your Cre8or / NFT,
              provided that the marketplace cryptographically verifies each Cre8or owner’s rights to
              display the Art for their Cre8or to ensure that only the actual owner can display the
              Art; or (iii) as part of a third party website or application that permits the
              inclusion, involvement, or participation of your Cre8or, provided that the
              website/application cryptographically verifies each Cre8or owner’s rights to display
              the Art for their Cre8or to ensure that only the actual owner can display the Art, and
              provided that the Art is no longer visible once the owner of the Cre8or leaves the
              website/application.
            </div>
            <div>
              iii. Commercial Use. Subject to your continued compliance with these Terms, Defi
              Entertainment Inc. grants you an unlimited, worldwide license to use, copy, and
              display the purchased Art for the purpose of creating derivative works based upon the
              Art (“Commercial Use”). Examples of such Commercial Use would e.g. be the use of the
              Art to produce and sell merchandise products (T-Shirts etc.) displaying copies of the
              Art. For the sake of clarity, nothing in this Section will be deemed to restrict you
              from (i) owning or operating a marketplace that permits the use and sale of Cre8ors
              generally, provided that the marketplace cryptographically verifies each Cre8or
              owner’s rights to display the Art for their Cre8or to ensure that only the actual
              owner can display the Art; (ii) owning or operating a third party website or
              application that permits the inclusion, involvement, or participation of Cre8ors
              generally, provided that the third party website or application cryptographically
              verifies each Cre8or owner’s rights to display the Art for their Cre8or to ensure that
              only the actual owner can display the Art, and provided that the Art is no longer
              visible once the owner of the Purchased Cre8or leaves the website/application; or
              (iii) earning revenue from any of the foregoing.
            </div>
          </div>
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
            Terms of Service
          </div>
          <div
            className="md:mx-12 md:pl-[90px]
            mx-5 pl-0"
          >
            <div className="w-[265px] samsungS8:w-[310px] xs:w-[340px] md:w-[917px]">
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

export default TermsPage
