const Status = ({ status }) => (
  <div
    className="!m-0
        flex
        justify-center
        pt-[100px]
        font-quicksand font-bold
        w-[100%] xs:w-[500px] md:w-[920px]
        !text-[19px] mb-4
        text-center 
        text-black dark:text-white
        leading-[99.3%]"
  >
    [APPLICATION {status?.toUpperCase?.()}]
  </div>
)

export default Status
