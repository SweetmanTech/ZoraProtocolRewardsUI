import Media from "../../../shared/Media"

const MintLoading = () => (
  <>
    <pre
      className="font-eigerdals 
                    text-[30px] xs:text-[33px] xl:text-[55px] 
                    uppercase text-center
                    leading-[103.3%]
                    dark:text-black text-white"
    >
      Minting Now
    </pre>
    <Media
      type="image"
      link="/assets/Common/loading.svg"
      containerClasses="w-[80px] h-[80px] 
      samsungS8:w-[130px] samsungS8:h-[130px] 
      xs:w-[130px] xs:h-[130px] 
      md:w-[250px] md:h-[250px] 
      z-[3]"
    />
    <div
      className="uppercase text-white dark:text-black
          font-quicksand text-[19px] font-bold
          dark:text-black text-white"
    >
      Loading...
    </div>
  </>
)

export default MintLoading
