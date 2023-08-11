import TeamMembersCard from "../../components/Cards/Team"

const TeamMembers = ({ teamMemberData }) => (
  <div className="flex flex-col items-start px-6 md:px-0">
    <div
      className="md:px-12 
        text-[33px] xs:text-[36px] md:text-[65px] 
        font-bold font-eigerdals 
        text-[black] dark:text-[white]
        w-[290px] md:w-[600px]"
    >
      Team Members
    </div>
    <div
      className="md:mx-12 w-full 
        text-[12px] samsungS8:text-[13px] xs:text-[15px] 
        w-[290px] samsungS8:w-[300px] xs:w-[350px] md:w-[693px]
        font-medium font-quicksand
        md:text-[19px] dark:text-[white]"
    >
      Our powerhouse team includes 14+ music, media, and web3 industry veterans from companies like
      Amazon, Apple, Universal, Stem, Mint Songs and more.
    </div>
    <div className="md:px-12 w-full grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 pt-[2rem]">
      {teamMemberData.map(({ name, role, favQuote, imgSrc, twitterHandle }) => (
        <TeamMembersCard
          key={name}
          name={name}
          role={role}
          favQuote={favQuote}
          imgSrc={imgSrc}
          twitterHandle={twitterHandle}
        />
      ))}
    </div>
  </div>
)

export default TeamMembers
