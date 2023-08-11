import TeamsPage from "../../components/TeamsPage"
import { getFoundingMemberData } from "../../helpers/avatar.db"
import { getTeamMemberData } from "../../helpers/team.db"

export async function getStaticProps() {
  const [foundingMemberData, teamMemberData] = await Promise.all([
    await getFoundingMemberData(),
    await getTeamMemberData(),
  ])
  return {
    props: {
      foundingMemberData,
      teamMemberData,
    },
  }
}
const Teams = ({ foundingMemberData, teamMemberData }) => (
  <TeamsPage foundingMemberData={foundingMemberData} teamMemberData={teamMemberData} />
)

export default Teams
