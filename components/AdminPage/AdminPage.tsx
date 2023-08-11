/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unstable-nested-components */
import axios from "axios"
import { useCallback, useEffect, useMemo, useState } from "react"
import { CSVLink } from "react-csv"
import { toast } from "react-toastify"
import Table from "./components/Table"
import StatusPill from "./components/StatusPill"
import SelectColumnFilter from "./components/SelectColumFilter"
import PopupModal from "./components/PopupModal"
import { useAdminProvider } from "../../providers/AdminProvider"
import AddApplicant from "../Modal/AddApplicant"

type ITableDatum = {
  _id: string
  walletAddress: string
  twitterHandle: string
  reason: string
  creatorType: string
  isVerified: boolean
  isPassportHolder: boolean
  status: "Pending" | "Accepted" | "Rejected"
}
type ITableData = Array<ITableDatum>
const AdminPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const mapEvilToGood = (evil: string) => {
    switch (evil) {
      case "The Delegator":
        return "musician"
      case "The Pragmatic":
        return "engineer"
      case "The Kinesthetic":
        return "dancer"
      case "The Deviser":
        return "director"
      case "The Communicator":
        return "writer"
      case "The Catalyst":
        return "thespian"
      case "The Idealist":
        return "photographer"
      case "The Generator":
        return "designer"
      default:
        return null
    }
  }
  const { bearerToken, user } = useAdminProvider()
  const [data, setData] = useState([])
  const [pickedApplicants, setPickedApplicants] = useState([])
  const [loading, setLoading] = useState(false)
  const [passportHolders, setPassportHolders] = useState([])
  const tableData: ITableData = useMemo(
    () =>
      data.map((datum) => {
        const { _id, walletAddress, isVerified, twitterHandle, reason, status, creatorType } = datum
        return {
          _id,
          walletAddress,
          isVerified: isVerified || false,
          twitterHandle,
          reason,
          status,
          creatorType,
          isPassportHolder: passportHolders.includes(walletAddress) || false,
        }
      }),
    [data, passportHolders],
  )

  const tweetAcceptanceStatus = async () => {
    const body = pickedApplicants.map((applicant) => ({
      docId: applicant._id,
      username: applicant.twitterHandle,
      cre8orType: mapEvilToGood(applicant.cre8orType),
    }))
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SHARED_API_URL}/tweetAcceptanceStatus`,
      body,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      },
    )
    toast.info(`Tweets Remaining: ${response?.data?.remainingTweets}`)
  }

  const handleClick = async (status) => {
    setLoading(true)
    const applicants = pickedApplicants.map((applicant) => applicant._id)
    await axios.post(
      "/api/allowlist/updateStatus",
      {
        applicants,
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      },
    )

    setLoading(false)
  }
  const handleReject = async (e) => {
    e.preventDefault()
    handleClick("Rejected")
  }

  const handleAccept = async (e) => {
    e.preventDefault()
    handleClick("Accepted")
    await tweetAcceptanceStatus()
  }

  const handleDelete = useCallback(
    async (e, row) => {
      e.preventDefault()
      setLoading(true)
      const params = {
        id: row._id,
      }
      const headers = {
        Authorization: `Bearer ${bearerToken}`,
      }
      const config = {
        params,
        headers,
      }
      await axios.delete(`/api/allowlist/deleteApplicant`, config)
      setLoading(false)
    },
    [bearerToken],
  )
  const getOwnersOfCollection = async () => {
    const ownerData = await axios.get(
      `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getOwnersForCollection?contractAddress=0xD9635b70724b9F618A7Bb37c7BE182117B1F0dc1`,
    )
    setPassportHolders(ownerData.data.ownerAddresses)
  }

  useEffect(() => {
    getOwnersOfCollection()
  }, [])
  const columns = useMemo(
    () => [
      {
        Header: "Status",
        accessor: "status",
        Filter: SelectColumnFilter,
        filter: "includes",
        Cell: StatusPill,
      },
      {
        Header: "Wallet Address",
        accessor: "walletAddress",
        filter: "includes",
      },
      {
        Header: "Twitter Handle",
        accessor: "twitterHandle",
        filter: "includes",
      },
      {
        Header: "Reason",
        accessor: "reason",
        maxWidth: 90,
        minWidth: 50,
        width: 60,
        style: { "white-space": "unset" },
      },
      {
        Header: "Quiz Result",
        accessor: "creatorType",
        filter: "includes",
      },
      {
        Header: "Tweet Verified",
        accessor: (d) => d?.isVerified?.toString(),
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Passport Holder",
        accessor: (d) => d?.isPassportHolder?.toString(),
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Action",
        Cell: ({ row }) => (
          <button
            type="button"
            className="inline-flex items-center justify-center p-1 text-white bg-red-500 rounded-md hover:text-gray-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={(e) => handleDelete(e, row.original)}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ),
      },
    ],
    [handleDelete],
  )
  const resetStatus = async () =>
    axios.put(`${process.env.NEXT_PUBLIC_SHARED_API_URL}/resetStatus`, null, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
  const getData = useCallback(async () => {
    const res = await axios.get("/api/allowlist/allData", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ALLOWLIST_API_KEY}`,
      },
    })
    const results = await res.data
    setData(results)
  }, [])
  const csvData = useMemo(
    () =>
      data.map((datum) => {
        const { walletAddress, isVerified, twitterHandle, reason, status, creatorType } = datum
        return {
          walletAddress,
          isVerified,
          twitterHandle,
          reason,
          status,
          creatorType,
          isPassportHolder: passportHolders.includes(walletAddress),
        }
      }),
    [data, passportHolders],
  )
  useEffect(() => {
    getData()
  }, [getData, loading])

  return (
    user?.issuer && (
      <div className="flex flex-wrap min-h-screen m-auto bg-gray-100 text-white-900">
        <main className="min-w-full px-4 pt-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-xl font-semibold">Current Allowlist Applicants</h1>
            </div>
            <div className="flex flex-row space-x-2">
              <button
                type="button"
                className="px-4 py-2 mt-4 text-white bg-gray-500 border rounded-md"
                onClick={() => setModalOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              <button
                type="button"
                className="px-4 py-2 mt-4 text-white bg-yellow-600 border rounded-md"
                onClick={resetStatus}
              >
                Reset
              </button>
              <CSVLink
                data={csvData}
                filename="allowlist.csv"
                className="px-4 py-2 mt-4 text-white bg-purple-500 border rounded-lg"
              >
                Export CSV
              </CSVLink>
            </div>
          </div>

          <div className="mt-4">
            <Table columns={columns} data={tableData} setPickedApplicants={setPickedApplicants} />
          </div>
          {pickedApplicants.length > 0 && (
            <div className="flex flex-row justify-end mt-4 gap-x-4">
              <button
                type="button"
                className="px-4 py-2 mt-4 text-white bg-green-500 border rounded-full"
                onClick={handleAccept}
              >
                Accept
              </button>
              <button
                type="button"
                className="px-4 py-2 mt-4 text-white bg-red-500 border rounded-full"
                onClick={handleReject}
              >
                Reject
              </button>
            </div>
          )}
        </main>
        {loading && <PopupModal open={loading} />}
        {modalOpen && (
          <AddApplicant
            setModalOpen={setModalOpen}
            setLoading={setLoading}
            mapEvilToGood={mapEvilToGood}
          />
        )}
      </div>
    )
  )
}
export default AdminPage
