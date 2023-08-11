import { ReactNode, useRef } from "react"
import { useMediaQuery } from "usehooks-ts"
import { useScroll } from "framer-motion"
import useScrollEnded from "../../hooks/useScrollEnded"
import Layout from "../Layout"

type SectionType = {
  title: string
  content: ReactNode
  mobile_content: ReactNode
}

const FaqPage = () => {
  const sections: SectionType[] = [
    {
      title: "What is Cre8ors?",
      content: (
        <>
          Cre8ors is a next-gen media brand made for the metaverse; powered by a curated collective
          of web3 <br /> creators, collaborative IP protocols, and AI-enabled NFTs.
        </>
      ),
      mobile_content: (
        <>
          Cre8ors is a next-gen media brand
          <br /> made for the metaverse; powered by
          <br /> a curated collective of web3
          <br /> creators, collaborative IP protocols,
          <br /> and AI-enabled NFTs.
        </>
      ),
    },
    {
      title: "What is Cre8ors vision?",
      content: (
        <>
          We envision a world where AI-tools and blockchain technology 100x the number of creators
          in the <br /> world, from 50M to 500M, ushering in a “golden-age” of accessible creativity
          for all.
        </>
      ),
      mobile_content: (
        <>
          We envision a world where AI-tools
          <br /> and blockchain technology 100x the
          <br /> number of creators in the world,
          <br /> from 50M to 500M, ushering in a<br /> “golden-age” of accessible creativity
          <br /> for all.
        </>
      ),
    },
    {
      title: "What is Cre8ors mission?",
      content: (
        <>
          Our mission is to unleash humanities creative potential and unlock individual financial
          freedom by
          <br /> providing networks, resources, and tools to drive mass adoption around the
          co-creation, co-licensing, <br /> and co-ownership of digital assets.
        </>
      ),
      mobile_content: (
        <>
          Our mission is to unleash humanities
          <br /> creative potential and unlock
          <br /> individual financial freedom by
          <br /> providing networks, resources, and
          <br /> tools to drive mass adoption around
          <br /> the co-creation, co-licensing, and co-
          <br />
          ownership of digital assets.
        </>
      ),
    },
    {
      title: "How do you become a Cre8or?",
      content: (
        <>
          Cre8ors is a curated members-only community. Membership is obtained by owning a Cre8ors{" "}
          <br /> Collective Passport NFT or Cre8ors AiPEP NFT.
        </>
      ),
      mobile_content: (
        <>
          Cre8ors is a curated members-only
          <br /> community. Membership
          <br /> is obtained by owning a Cre8ors
          <br /> Collective Passport NFT or Cre8ors
          <br /> AiPEP NFT.
        </>
      ),
    },
    {
      title: "What is the Cre8ors Collective Passport?",
      content: (
        <>
          The Cre8ors Collective Passport is VIP membership across the entire Cre8ors ecosystem.
          They are
          <br /> ERC721 NFT tokens on the Ethereum blockchain. Cre8ors Passport holders get priority
          entry to all
          <br /> upcoming Cre8ors products and services, plus exclusive access to the Cre8ors
          network, resources, and <br /> software tools.
        </>
      ),
      mobile_content: (
        <>
          The Cre8ors Collective Passport is
          <br /> VIP membership across the entire Cre8ors ecosystem. They are ERC721
          <br /> NFT tokens on the Ethereum
          <br /> blockchain. Cre8ors Passport holders
          <br /> get priority entry to all upcoming
          <br /> Cre8ors products and services, plus
          <br /> exclusive access to the Cre8ors
          <br /> network, resources, and software
          <br /> tools.
        </>
      ),
    },
    {
      title: "What are the benefits of a Cre8ors Collective Passport?",
      content: (
        <ul className="pl-8">
          <li className="list-disc">
            Expedited allowlist allocation to all upcoming Cre8ors drops.
          </li>
          <li className="list-disc">$0 transaction fees on the CR8 protocol.</li>
          <li className="list-disc">Early access to all CR8 dApps.</li>
          <li className="list-disc">Voting rights on all Cre8ors proposals.</li>
          <li className="list-disc">VIP entry to all Cre8ors events.</li>
          <li className="list-disc">Priority Cre8ors IP pitching.</li>
          <li className="list-disc">Designated Cre8ors Collective user profiles and badges</li>
        </ul>
      ),
      mobile_content: (
        <ul className="pl-6">
          <li className="list-disc">
            Expedited allowlist allocation to
            <br /> all upcoming Cre8ors drops.
          </li>
          <li className="list-disc">
            $0 transaction fees on the CR8
            <br /> protocol.
          </li>
          <li className="list-disc">Early access to all CR8 dApps.</li>
          <li className="list-disc">
            Voting rights on all Cre8ors
            <br /> proposals.
          </li>
          <li className="list-disc">VIP entry to all Cre8ors events.</li>
          <li className="list-disc">Priority Cre8ors IP pitching.</li>
          <li className="list-disc">
            Designated Cre8ors Collective
            <br /> user profiles and badges
          </li>
        </ul>
      ),
    },
    {
      title: "How many Cre8ors Collective Passports are there?",
      content: (
        <>
          There will only ever be a total of 888 Cre8ors Collective Passports, separated into two
          categories: 88
          <br /> Founders Passports, reserved for the most engaged community members during the our
          “build-in-
          <br />
          public” phase, and 800 Collective Passports available to our private-sale reserve list.
          Remaining
          <br /> Passports will be available on a first-come-first-serve basis during a public drop
          on June 30th 2023 (in
          <br /> partnership with Magic Eden).
        </>
      ),
      mobile_content: (
        <>
          There will only ever be a total of 888
          <br /> Cre8ors Collective Passports,
          <br /> separated into two categories: 88
          <br /> Founders Passports, reserved for the
          <br /> most engaged community members
          <br /> during the our “build-in-public”
          <br /> phase, and 800 Collective Passports
          <br /> available to our private-sale reserve
          <br /> list. Remaining Passports will be
          <br /> available on a first-come-first-serve
          <br /> basis during a public drop on June
          <br /> 30th 2023 (in partnership with Magic
          <br /> Eden).
        </>
      ),
    },
    {
      title: "How much does each Cre8ors Collective Passport cost?",
      content: (
        <>
          Each Cre8ors Collective Passport costs 0.8
          <br /> ETH, 88 Pendants, or any variation of the two. For example: If you hold 17 Pendant
          NFTs, the final price
          <br /> for the Passport would be 0.8 - (17*0.009) = 0.64 ETH.
        </>
      ),
      mobile_content: (
        <>
          Each Cre8ors Collective Passport costs 0.8
          <br /> ETH, 88 Pendants, or any variation of
          <br /> the two. For example: If you hold 17
          <br /> Pendant NFTs, the final price for the
          <br /> Passport would be 0.8 - (17*0.009) =<br /> 0.64 ETH.
        </>
      ),
    },
    {
      title: "What are Pendant NFTs?",
      content: (
        <>
          The Cre8ors Collective is built on collaboration. We believe that when an entire community
          works
          <br /> together anything is possible. Divine Ancestral Pendant NFTs are ERC1155 tokens
          that we use to reward
          <br /> involvement in our community-building activities. It&apos; s our way to track and
          give value back for
          <br /> contributions to the collective. Each Divine Ancestral Pendant NFT can be burnt for
          a 0.009 ETH
          <br /> discount when reserving a Cre8ors Collective Passport.
        </>
      ),
      mobile_content: (
        <>
          The Cre8ors Collective is built on
          <br /> collaboration. We believe that when
          <br /> an entire community works together
          <br /> anything is possible. Divine Ancestral
          <br /> Pendant NFTs are ERC1155 tokens
          <br /> that we use to reward involvement in
          <br /> our community-building activities. It&apos; s <br />
          our way to track and give value back
          <br /> for contributions to the collective.
          <br /> Each Divine Ancestral Pendant NFT
          <br /> can be burnt for a 0.009 ETH
          <br /> discount when reserving a Cre8ors
          <br /> Collective Passport.
        </>
      ),
    },
    {
      title: "What is the Reserve List?",
      content: (
        <>
          The Reserve List is a private passport pre-sale, available to a select group of
          contributors. Reserving
          <br /> guarantees you a Cre8ors Passport during public launch on June 30th 2023.
        </>
      ),
      mobile_content: (
        <>
          The Reserve List is a private
          <br /> passport pre-sale, available to
          <br /> a select group of contributors.
          <br /> Reserving guarantees you a Cre8ors
          <br /> Passport during public launch on
          <br /> June 30th 2023.
        </>
      ),
    },
    {
      title: "How are reservations proven?",
      content: (
        <>
          All reservations are documented on-chain by minting a Cre8ors Claim Ticket. Each claim
          ticket is a<br /> unique ERC-721A NFT on the Ethereum Blockchain.
        </>
      ),
      mobile_content: (
        <>
          All reservations are documented on-
          <br />
          chain by minting a Cre8ors Claim
          <br /> Ticket. Each claim ticket is a unique
          <br /> ERC-721A NFT on the Ethereum
          <br /> Blockchain.
        </>
      ),
    },
    {
      title: "When can Passports be redeemed?",
      content: (
        <>
          Burn a Cre8ors Claim Ticket to redeem your passport during our public launch on June 30th
          2023.
        </>
      ),
      mobile_content: (
        <>
          Burn a Cre8ors Claim Ticket to
          <br /> redeem your passport during our
          <br /> public launch on June 30th 2023.
        </>
      ),
    },
    {
      title: "What are the maximum reservations per wallet?",
      content: (
        <>
          There is no mint limit when reserving a passport, although we are committed to curating a
          well-
          <br />
          intentioned, diverse group of creators and collectors.
        </>
      ),
      mobile_content: (
        <>
          There is no mint limit when reserving
          <br /> a passport, although we are
          <br /> committed to curating a well-
          <br />
          intentioned, diverse group of
          <br /> creators and collectors.
        </>
      ),
    },
    {
      title: "Will any Cre8ors Passports be withheld?",
      content: (
        <>
          88 Cre8ors Passports (10% of the supply) will be withheld. Each member of the team will
          receive
          <br /> one Cre8ors Passport and the remainder are reserved for marketing, promotions, and
          partnerships.
        </>
      ),
      mobile_content: (
        <>
          88 Cre8ors Passports (10% of the
          <br /> supply) will be withheld. Each
          <br /> member of the team will receive one
          <br /> Cre8ors Passport and the remainder
          <br /> are reserved for marketing,
          <br /> promotions, and partnerships.
        </>
      ),
    },
    {
      title: "What is a Cre8ors AiPEP?",
      content: (
        <>
          AiPEP or Artificially Intelligent Protocol-Enabled Picture, is the technology behind the
          Cre8ors PFP
          <br /> collection.
        </>
      ),
      mobile_content: (
        <>
          AiPEP or Artificially Intelligent
          <br /> Protocol-Enabled Picture, is the
          <br /> technology behind the Cre8ors PFP
          <br /> collection.
        </>
      ),
    },
    {
      title: "What will the supply and price be for the Cre8ors AiPEP collection?",
      content: <>[Redacted]</>,
      mobile_content: <>[Redacted]</>,
    },
    {
      title: "Can you get on the Cre8ors AiPEP Allowlist without a passport?",
      content: (
        <>
          Yes, to get on the Cre8ors AiPEP Allowlist without a passport: <br />
          1) Apply by taking the Everything Corp. Personality Quiz.
          <br />
          2) View your quiz results via @Cre8orList Twitter. <br />
          3) Retweet your quiz results to expedite your application review. <br />
          4) If accepted, you will be notified via Twitter with your creative DNA archetype.
        </>
      ),
      mobile_content: (
        <>
          Yes, to get on the Cre8ors AiPEP
          <br /> Allowlist without a passport: <br />
          1) Apply by taking the Everything
          <br /> Corp. Personality Quiz. <br />
          2) View your quiz results via
          <br /> @Cre8orList Twitter. <br />
          3) Retweet your quiz results to
          <br /> expedite your application review. <br />
          4) If accepted, you will be notified via
          <br /> Twitter with your creative DNA
          <br /> archetype.
        </>
      ),
    },
    {
      title: "When will the Cre8ors AiPEP collection be released?",
      content: <>The Cre8ors AiPEP collection drops on August 8th-10th 2023.</>,
      mobile_content: (
        <>
          The Cre8ors AiPEP collection drops
          <br /> on August 8th-10th 2023.
        </>
      ),
    },
    {
      title: "When will the Cre8ors AiPEP collection be revealed?",
      content: <>[Redacted]</>,
      mobile_content: <>[Redacted]</>,
    },
    {
      title: "When can Cre8ors start Cre8ing (soft-staking)?",
      content: <>Cre8ors can start Cre8ing (soft-staking) immediately after mint.</>,
      mobile_content: (
        <>
          Cre8ors can start Cre8ing (soft-
          <br />
          staking) immediately after mint.
        </>
      ),
    },
    {
      title: "What are the benefits of Cre8ing (soft-staking)?",
      content: (
        <>
          The longer your Cre8or is Cre8ing, the more Cre8tive it becomes (the more benefits you
          get).
          <br /> Earn badges, rewards, access CR8 Protocol, and unlock flow-state.
        </>
      ),
      mobile_content: (
        <>
          The longer your Cre8or is Cre8ing,
          <br /> the more Cre8tive it becomes (the
          <br /> more benefits you get).
          <br /> Earn badges, rewards, access CR8
          <br /> Protocol, and unlock flow-state.
        </>
      ),
    },
    {
      title: "What is the CR8 Protocol?",
      content: (
        <>
          The CR8 Protocol is an interoperable smart contract built using novel community-bonding
          mechanics
          <br /> to generate and track composable media catalogs at scale. (If you are a 3rd party
          company,
          <br /> community, or developer interested building a CR8 dApp, please contact
          info@cre8ors.com)
        </>
      ),
      mobile_content: (
        <>
          The CR8 Protocol is an interoperable
          <br /> smart contract built using novel
          <br /> community-bonding mechanics to
          <br /> generate and track composable
          <br /> media catalogs at scale. (If you are a<br /> 3rd party company, community, or
          <br /> developer interested building a CR8
          <br /> dApp, please contact
          <br />
          info@cre8ors.com)
        </>
      ),
    },
    {
      title: "What are CR8 dApps?",
      content: (
        <>
          CR8 dApps are a series decentralized applications built on-top of the CR8 Protocol
          enabling all Cre8ors
          <br /> to easily create, license, and get paid from original media IP made on-chain.
        </>
      ),
      mobile_content: (
        <>
          CR8 dApps are a series decentralized
          <br /> applications built on-top of the CR8
          <br /> Protocol enabling all Cre8ors to
          <br /> easily create, license, and get paid
          <br /> from original media IP made on-
          <br />
          chain.
        </>
      ),
    },
    {
      title: "How are mint funds distributed?",
      content: (
        <>
          Funds generated by Cre8ors NFT collections and/or CR8 dApps are collected via Cre8ors
          smart
          <br /> contracts or 3rd party payment processors (ex. Crossmint, Moonpay) and distributed
          to Defi
          <br /> Entertainment Inc. (parent company of Cre8ors) which reserves all rights for
          processing
          <br /> and accounting purposes. Vendors please contact accountspayable@defient.co for more
          info.
        </>
      ),
      mobile_content: (
        <>
          Funds generated by Cre8ors NFT
          <br /> collections and/or CR8 dApps are
          <br /> collected via Cre8ors smart contracts
          <br /> or 3rd party payment processors (ex.
          <br /> Crossmint, Moonpay) and distributed
          <br />
          to Defi Entertainment Inc. (parent
          <br /> company of Cre8ors) which reserves
          <br /> all rights for processing and
          <br /> accounting purposes. Vendors please
          <br /> contact
          <br /> accountspayable@defient.co for
          <br />
          more info.
        </>
      ),
    },
    {
      title: "What are mint funds used for?",
      content: (
        <>
          Mint funds are used by Defi Entertainment Inc. for business expenses such as but not
          limited to:
          <br /> product development, service management, production, marketing, community, sales,
          and staff.
        </>
      ),
      mobile_content: (
        <>
          Mint funds are used by Defi
          <br /> Entertainment Inc. for business
          <br /> expenses such as but not limited to:
          <br /> product development, service
          <br /> management, production, marketing,
          <br /> community, sales, and staff.
        </>
      ),
    },
    {
      title: "How are the founders and team paid?",
      content: (
        <>
          The founders and team are employees and/or contractors of Defi Entertainment Inc. and are
          paid via
          <br /> crypto/fiat payroll on a recurring month-to-month basis while under contract by the
          company.
        </>
      ),
      mobile_content: (
        <>
          The founders and team are
          <br /> employees and/or contractors of
          <br /> Defi Entertainment Inc. and are paid
          <br /> via crypto/fiat payroll on a recurring
          <br /> month-to-month basis while under
          <br /> contract by the company.
        </>
      ),
    },
    {
      title: "What is Defi Entertainment Inc.?",
      content: (
        <>
          Defi Entertainment Inc. (p/k/a Defient) is an award-winning entertainment studio and
          parent
          <br /> company of Cre8ors Inc. Founded by a 10x platinum-selling entertainment industry
          veteran along-side
          <br /> powerhouse teams from Amazon, Apple, Universal, Stem, Mint and more; Defient has
          amassed over
          <br /> two billion streams, five hundred million YouTube views, and is partnered with some
          of the largest
          <br /> creators and brands in the world. To learn more about Defient visit:{" "}
          <a href="https://defient.co" target="_blank" rel="noreferrer">
            <span className="underline cursor-pointer">https://defient.co</span>
          </a>
        </>
      ),
      mobile_content: (
        <>
          Defi Entertainment Inc. (p/k/a
          <br /> Defient) is an award-winning
          <br /> entertainment studio and parent
          <br /> company of Cre8ors Inc. Founded
          <br /> by a 10x platinum-selling entertainment
          <br /> industry veteran along-side
          <br /> powerhouse teams from Amazon,
          <br /> Apple, Universal, Stem, Mint and
          <br /> more; Defient has amassed over two
          <br /> billion streams, five hundred million
          <br /> YouTube views, and is partnered with
          <br /> some of the largest creators and
          <br /> brands in the world. To learn more
          <br /> about Defient visit:{" "}
          <a href="https://defient.co" target="_blank" rel="noreferrer">
            <span className="underline">
              https://
              <br />
              defient.co
            </span>
          </a>
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
              mx-4 md:mx-12"
          >
            FAQ
          </div>
          <div
            className="md:mx-12 md:pl-[90px]
            mx-4 pl-0"
          >
            <div className="w-[290px] samsungS8:w-[320px] xs:w-[350px] md:w-[917px]">
              {sections.map((section: SectionType) => (
                <div key={section.title} className="pb-[1.5rem] font-quicksand">
                  <div className="text-[16px] xs:text-[19px] font-bold dark:text-[white] leading-[137%]">
                    {section.title}
                  </div>
                  <div className="text-[14.5px] samsungS8:text-[17px] xs:text-[19px] font-medium dark:text-[white] leading-[137%]">
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

export default FaqPage
