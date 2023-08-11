import FoundingMembers from "./sections/FoundingMembers"
import TeamMembers from "./sections/TeamMembers"

import Layout from "../Layout"

const TeamsPage = ({ foundingMemberData, teamMemberData }) => (
  <Layout type="contained">
    <div className="relative pt-[12rem]">
      <TeamMembers teamMemberData={teamMemberData} />
      <FoundingMembers foundingMemberData={foundingMemberData} />
    </div>
  </Layout>
)

export default TeamsPage
