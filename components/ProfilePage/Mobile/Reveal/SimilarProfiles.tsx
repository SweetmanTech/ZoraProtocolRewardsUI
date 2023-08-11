import { useUserProvider } from "../../../../providers/UserProvider"

const SimilarProfiles = () => {
  const { similarProfiles } = useUserProvider()

  return (
    <div className="flex flex-col items-center pb-[40px]">
      <div
        className="text-[22px] font-bold font-quicksand
                  leading-[99.3%] text-white
                  pt-[20px] pb-[20px]
                  text-center"
      >
        SIMILAR PROFILES
      </div>
      <div className="grid grid-cols-4 gap-x-[10px] gap-y-[10px]">
        {similarProfiles?.map((profile) => (
          // eslint-disable-next-line no-underscore-dangle
          <div className="w-[39px] h-[39px] rounded-full bg-[white]" key={profile._id} />
        ))}
      </div>
    </div>
  )
}

export default SimilarProfiles
