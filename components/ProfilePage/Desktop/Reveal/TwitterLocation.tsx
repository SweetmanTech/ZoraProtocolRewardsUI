import Media from "../../../../shared/Media"

const TwitterLocation = () => (
  <div className="flex items-center gap-x-[15px]">
    <div className="flex items-center gap-x-[5px]">
      <Media
        type="image"
        link="/assets/Profile/black_twitter.svg"
        blurLink="/assets/Profile/black_twitter.png"
        containerClasses="w-[23px] h-[19px]"
      />
      <p className="font-quicksand font-bold text-[22px] leading-[99.3%]">@mckennarhillier</p>
    </div>
    <div className="flex items-center gap-x-[5px]">
      <Media
        type="image"
        link="/assets/Profile/black_location.svg"
        blurLink="/assets/Profile/black_location.png"
        containerClasses="w-[26px] h-[26px]"
      />
      <p className="font-quicksand font-bold text-[22px] leading-[99.3%]">Denver, CO</p>
    </div>
    <button
      className="w-[26px] h-[26px] bg-[#d7d7d7d6]
            flex items-center justify-center
            rounded-[2px] cursor-pointer"
      type="button"
    >
      <Media
        type="image"
        link="/assets/Profile/edit.svg"
        blurLink="/assets/Profile/edit.png"
        containerClasses="w-[17px] h-[17px]"
      />
    </button>
  </div>
)

export default TwitterLocation
