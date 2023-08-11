import { useState } from "react"
import axios from "axios"
import Auth from "../../../components/Auth"
import { useAdminProvider } from "../../../providers/AdminProvider"

const Merkle = () => {
  const { bearerToken } = useAdminProvider()
  const [merkle, setMerkle] = useState<string>("")
  const [input, setInput] = useState<string>("")
  const [reset, setReset] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)
  const [buttonClicked, setButtonClicked] = useState<boolean>(false)
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value.toLowerCase().replace(/['"]+/g, ""))
  }
  const handleGenerate = async () => {
    setButtonClicked(true)
    const values = input.split(",")
    const addresses = values.map((value) => value.trim())
    const result = await axios.post(
      "/api/v2/create/merkle",
      { addresses },
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      },
    )
    setMerkle(result?.data?.result?.root)
    setInput("")
    setReset(true)
    setButtonClicked(false)
  }

  const handleGenerateFromDatabase = async () => {
    setButtonClicked(true)
    const result = await axios.post(
      "/api/v2/create/merkle",
      { getFromDB: true },
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      },
    )
    setMerkle(result?.data?.result?.root)
    setInput("")
    setReset(true)
    setButtonClicked(false)
  }
  const handleReset = () => {
    setMerkle("")
    setInput("")
    setReset(false)
  }
  return (
    <Auth>
      <div className="min-h-screen bg-black dark:bg-white">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col justify-center w-full max-w-lg p-6 space-y-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            {reset && (
              <>
                <h5 className="text-center text-gray-500 dark:text-white">
                  {copied ? "Copied" : "Click to Copy"}
                </h5>
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className="bg-gray-100 border border-gray-300 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                  onClick={() => {
                    setCopied(true)
                    navigator.clipboard.writeText(merkle)
                    setTimeout(() => {
                      setCopied(false)
                    }, 1000)
                  }}
                  value={merkle}
                />
              </>
            )}
            {!reset && (
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Add comma separated values of wallet addresses
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add addresses here..."
                  defaultValue=""
                  onChange={handleInput}
                  value={input.toLowerCase()}
                />
              </div>
            )}
            <button
              type="button"
              className="px-10 py-4 mt-10 text-white bg-purple-600 rounded-lg border-lg disabled:cursor-not-allowed disabled:opacity-50"
              id="merkle"
              onClick={!reset ? handleGenerate : handleReset}
              disabled={buttonClicked}
            >
              {reset ? "Retry" : "Generate"}
            </button>
            <button
              type="button"
              className="px-10 py-4 mt-10 text-white bg-green-600 rounded-lg border-lg disabled:cursor-not-allowed disabled:opacity-50"
              id="merkle"
              onClick={!reset ? handleGenerateFromDatabase : handleReset}
              disabled={buttonClicked}
            >
              {reset ? "Retry" : "Generate From Database"}
            </button>
          </div>
        </div>
      </div>
    </Auth>
  )
}

export default Merkle
