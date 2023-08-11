const ProfileInformation = () => (
  <div className="flex flex-col text-white items-center lg:items-end pt-[50px]">
    <div
      className="text-[22px] font-bold font-quicksand
            leading-[99.3%]
            lg:text-right"
    >
      BIO
    </div>
    <pre
      className="text-[16px] font-quicksand font-medium
            pt-[15px]
            leading-[99.3%]
            lg:text-right"
    >
      {`Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor\nincididunt ut labore et dolore\nmagna aliqua. Ut enim ad\nminim veniam, quis nostrud\nexercitation.`}
    </pre>
    <div
      className="text-[22px] font-bold font-quicksand
            leading-[99.3%] pt-[20px]
            lg:text-right"
    >
      PROMPTS
    </div>
    <div
      className="text-[16px] font-medium font-quicksand
            pt-[10px]
            leading-[99.3%]
            lg:text-right"
    >
      Ask me about:
    </div>
    <pre
      className="text-[16px] font-quicksand font-medium
            pt-[15px]
            leading-[99.3%]
            lg:text-right"
    >
      ____________
    </pre>
    <div
      className="text-[16px] font-medium font-quicksand
            pt-[40px]
            leading-[99.3%]
            lg:text-right"
    >
      I need help with:
    </div>
    <pre
      className="text-[16px] font-quicksand font-medium
            pt-[15px]
            leading-[99.3%]
            lg:text-right"
    >
      _______________
    </pre>
  </div>
)

export default ProfileInformation
