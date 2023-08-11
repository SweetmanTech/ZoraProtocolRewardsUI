import Media from "../../shared/Media"

const ProfileToken = ({ token }) => {
  const openseaUrl = process.env.NEXT_PUBLIC_TESTNET
    ? "https://testnets.opensea.io/assets/goerli"
    : "https://opensea.io/assets/ethereum"

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`${openseaUrl}/${token.contractAddress}/${token.tokenId}`}
    >
      {token.image ? (
        <Media
          type="image"
          blurLink={token.image}
          link={token.image}
          alt={token.label}
          containerClasses="w-[30px] h-[30px] 
          samsungS8:w-[35px] samsungS8:h-[35px] 
          lg:w-[93px] lg:h-[93px] 
          bg-white overflow-hidden
          rounded-[5px] lg:rounded-[15px]
          drop-shadow-[0_4px_4px_rgba(0,0,0,0.45)]"
        />
      ) : (
        <div className="w-[30px] h-[30px] samsungS8:w-[35px] samsungS8:h-[35px] lg:w-[93px] lg:h-[93px] bg-white rounded-[5px] lg:rounded-[15px]" />
      )}
    </a>
  )
}

export default ProfileToken
