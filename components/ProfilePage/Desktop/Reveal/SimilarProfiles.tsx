const SimilarProfiles = () => (
  <div>
    <div
      className="text-[22px] font-bold font-quicksand
            leading-[99.3%] text-white
            pt-[20px] pb-[20px]
            text-right"
    >
      SIMILAR PROFILES
    </div>
    <div className="grid grid-cols-4 gap-x-[10px] gap-y-[10px]">
      {[...Array(8)].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className="flex justify-end">
          <div className="w-[39px] h-[39px] rounded-full bg-[white]" />
        </div>
      ))}
    </div>
  </div>
)

export default SimilarProfiles
