import { Contract } from "ethers"
import { useEffect, useMemo, useState } from "react"
import cre8orsAbi from "../../lib/abi-cre8ors.json"
import getDefaultProvider from "../../lib/getDefaultProvider"

const useSaleStatus = () => {
  const [presaleActive, setPresaleActive] = useState<any>(null)
  const [presaleStart, setPresaleStart] = useState(0)
  const [publicSaleActive, setPublicSaleActive] = useState<any>(null)
  const [publicSaleStart, setPublicSaleStart] = useState(0)
  const [loading, setLoading] = useState(true)
  const cre8orsContract = useMemo(
    () =>
      new Contract(
        process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS,
        cre8orsAbi,
        getDefaultProvider(process.env.NEXT_PUBLIC_TESTNET ? 5 : 1),
      ),
    [],
  )

  const initializeStatus = async () => {
    setPresaleActive(null)
    setPublicSaleActive(null)
    setPublicSaleStart(0)
    setPublicSaleActive(0)

    setLoading(true)
    const details = await cre8orsContract.saleDetails()
    setPublicSaleActive(details.publicSaleActive)
    setPresaleActive(details.presaleActive)
    setPresaleStart(Math.floor(parseInt(details.presaleStart, 10) / 1000000))
    setPublicSaleStart(Math.floor(parseInt(details.publicSaleStart, 10) / 1000000))
    setLoading(false)
  }

  useEffect(() => {
    initializeStatus()
  }, [cre8orsContract])

  return {
    loadingSaleStatus: loading,
    presaleStart,
    presaleActive,
    publicSaleActive,
    publicSaleStart,
    initializeStatus,
  }
}

export default useSaleStatus
