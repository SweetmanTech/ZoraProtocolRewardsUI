/* eslint-disable no-underscore-dangle */
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import { useAdminProvider } from "../../../providers/AdminProvider"

const AddApplicant = ({ setModalOpen, setLoading, mapEvilToGood }) => {
  const { bearerToken } = useAdminProvider()
  const [walletAddress, setWalletAddress] = useState("")
  const [twitterHandle, setTwitterHandle] = useState("")
  const [reason, setReason] = useState("")
  const [creatorType, setCreatorType] = useState("")
  const [tweetAcceptance, setTweetAcceptance] = useState(false)

  const onSave = async () => {
    setLoading(true)
    const response = await axios.post(
      "/api/allowlist/addApplicant",
      {
        walletAddress,
        twitterHandle,
        reason,
        creatorType: creatorType || "The Delegator",
        status: "Accepted",
      },
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      },
    )
    const docId = response?.data?.result?._id
    if (tweetAcceptance && docId && !["Other", "Friends And Family"].includes(creatorType)) {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SHARED_API_URL}/tweetAcceptanceStatus`,
        {
          docId,
          username: twitterHandle,
          cre8orType: mapEvilToGood(creatorType),
        },
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        },
      )
      toast.info(`Tweets Remaining: ${res?.data?.remainingTweets}`)
    }

    setWalletAddress("")
    setTwitterHandle("")
    setReason("")
    setCreatorType("")
    setModalOpen(false)
    setLoading(false)
  }
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          {/* content */}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add to Allowlist</h3>
              <button
                type="button"
                className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                onClick={() => setModalOpen(false)}
              >
                <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/* body */}
            <div className="relative flex-auto p-6">
              <input
                type="text"
                className="w-full p-2 mb-4 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                placeholder="Wallet Address"
                onChange={(e) => setWalletAddress(e.target.value)}
                value={walletAddress}
                required
              />
              <input
                type="text"
                className="w-full p-2 mb-4 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                placeholder="Twitter Handle"
                onChange={(e) => setTwitterHandle(e.target.value)}
                value={twitterHandle}
                required
              />
              <input
                type="text"
                className="w-full p-2 mb-4 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                placeholder="Reason"
                onChange={(e) => setReason(e.target.value)}
                value={reason}
                required
              />
              <label htmlFor="cre8or_type" className="block mb-2 text-sm font-medium text-black">
                Select Cre8or Type
              </label>
              <select
                id="cre8or_type"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setCreatorType(e.target.value)
                }}
                value={creatorType}
                required
              >
                <option value="The Delegator">Musician</option>
                <option value="The Pragmatic">Engineer</option>
                <option value="The Kinesthetic">Dancer</option>
                <option value="The Deviser">Director</option>
                <option value="The Communicator">Writer</option>
                <option value="The Catalyst">Thespian</option>
                <option value="The Idealist">Photographer</option>
                <option value="The Generator">Designer</option>
                <option value="Other">Other</option>
                <option value="Friends And Family">Friends And Family</option>
              </select>
              <div className="mt-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  onChange={(e) => {
                    setTweetAcceptance(e.target.checked)
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  Tweet Acceptance
                </label>
              </div>
            </div>
            {/* footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                type="button"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
              <button
                className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                type="button"
                onClick={onSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25" />
    </>
  )
}

export default AddApplicant
