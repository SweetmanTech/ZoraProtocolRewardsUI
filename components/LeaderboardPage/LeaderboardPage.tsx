import React, { useState, useEffect } from "react"
import * as _ from "lodash"
import { useMediaQuery } from "usehooks-ts"
import getOwnersForCollection from "../../lib/alchemy/getOwnersForCollection"
import getParticipants from "../../lib/getParticipants"
import LeaderboardRow from "./LeaderboardRow"
import SkeletonTableBody from "./SkeletonTableBody"
import Layout from "../Layout"

const LeaderboardPage = () => {
  const [collectors, setCollectors] = useState([])
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const fetchTopCollectors = async () => {
      const { ownerAddresses } = await getOwnersForCollection()
      const newCollectors = _.orderBy(ownerAddresses, ["tokenBalances[0].balance"], ["desc"])
      const addressToTwitter = await getParticipants()
      const mappedData = newCollectors.map((collector) => ({
        walletAddress: collector.ownerAddress,
        nftsOwned: collector.tokenBalances[0].balance,
      }))
      const tableData = mappedData.map((item) => ({
        ...item,
        twitterHandle: addressToTwitter[item.walletAddress.toString()],
      }))
      setCollectors(tableData)
    }
    fetchTopCollectors()
  }, [])

  return (
    <Layout type="contained">
      <div className="w-full pt-24 mx-auto">
        <div
          className="
          font-[eigerdals] 
          dark:text-white text-center 
          text-[40px] md:text-[75px] 
          font-bold pt-6
        "
        >
          Leaderboard
        </div>
        <div className="w-full flex justify-center pb-4">
          <div
            className="font-quicksand 
            dark:text-white text-center 
            w-[300px] xs:w-[350px] md:w-[430px] 
            text-[13px] xs:text-[15px] md:text-[18px] 
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)] 
            font-[500]"
          >
            Currently Tracking: Divine Ancestral Pendants Collect and burn 88 to redeem a Passport
          </div>
        </div>
        <div className="md:px-4 w-full flex justify-center">
          <div
            className="w-[310px] xs:w-[370px] md:w-full 
            border-[2px] border-[black] border-solid
            h-[470px] rounded-lg 
            overflow-auto 
            shadow-[4px_4px_4px_rgb(0,0,0,0.25)] dark:shadow-[4px_4px_4px_rgb(255,255,255,0.25)]
            scrollbar scrollbar-thumb-[black] 
            scrollbar-track-white 
            scrollbar-thumb-rounded-full"
          >
            <table className="w-full font-quicksand bg-white">
              <thead className="border-b-[2px] border-black border-solid">
                <tr>
                  <th
                    className="p-[5px] md:p-4 
                    text-left border-r-[2px] 
                    border-black text-center
                    uppercase 
                    text-[8px] xs:text-[11px] md:text-[18px]
                    md:min-w-[100px]"
                  >
                    Rank
                  </th>
                  <th
                    className="p-[5px] md:p-4 
                    text-left border-r-[2px] 
                    border-black text-center 
                    uppercase 
                    text-[8px] xs:text-[11px] md:text-[18px]
                    w-[100px] xs:!w-[130px] md:!w-[200px]"
                  >
                    # of NFTs {!isMobile ? "Owned" : ""}
                  </th>
                  <th
                    className="p-[5px] md:p-4 
                    text-left border-r-[2px] 
                    border-black text-center 
                    uppercase 
                    text-[8px] xs:text-[11px] md:text-[18px]"
                  >
                    Address
                  </th>
                  <th
                    className="p-[5px] md:p-4 
                    text-left text-center 
                    uppercase 
                    text-[8px] xs:text-[11px] md:text-[18px]"
                  >
                    Twitter
                  </th>
                </tr>
              </thead>
              {collectors.length > 0 ? (
                <tbody>
                  {collectors.map((collector, index) => (
                    <LeaderboardRow
                      key={collector.walletAddress}
                      address={collector.walletAddress}
                      numberOwned={collector.nftsOwned}
                      twitterHandle={collector.twitterHandle}
                      rank={index + 1}
                    />
                  ))}
                </tbody>
              ) : (
                <SkeletonTableBody />
              )}
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LeaderboardPage
