/* eslint-disable react/no-danger */
import { useProfileProvider } from "../../../../providers/ProfileContext"
import { useUserProvider } from "../../../../providers/UserProvider"

const PreProfileInformation = () => {
  const { userInfo } = useUserProvider()
  const {
    isEditable,
    editedBio,
    editedINeedHelpWith,
    editedAskedMeAbout,
    setEditedAskedMeAbout,
    setEditedINeedHelpWith,
    setEditedBio,
  } = useProfileProvider()

  return (
    <div className="flex flex-col text-black items-center lg:items-end pt-[50px]">
      <div
        className="text-[22px] font-bold font-quicksand
                  leading-[99.3%]
                  lg:text-right"
      >
        BIO
      </div>
      {isEditable ? (
        <textarea
          className="relative z-[105]
         mt-[15px] 
         text-center md:text-right
         text-[16px] leading-[99.3%] 
         font-quicksand font-medium
         w-[220px] h-[80px] md:h-[140px]
         ring-0 outline-none
         border-[lightgray] border-[1px]
         bg-[#D9D9D9]
         px-[10px] py-[5px]
         rounded-[4px]"
          value={editedBio}
          onChange={(e) => setEditedBio(e.target.value.slice(0, 160))}
        />
      ) : (
        <div
          className="text-[16px] font-quicksand font-medium
                  pt-[15px]
                  leading-[99.3%]
                  text-center lg:text-right
                  max-w-[220px]
                  break-all"
          dangerouslySetInnerHTML={{
            __html:
              userInfo?.bio.replace("\n", "<br/>") ||
              `Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,<br/>sed do eiusmod tempor<br/>incididunt ut labore et dolore<br/>magna aliqua. Ut enim ad<br/>minim veniam, quis nostrud<br/>exercitation.`,
          }}
        />
      )}
      <div
        className="text-[16px] font-bold font-quicksand
                  pt-[40px]
                  leading-[99.3%]
                  lg:text-right"
      >
        Ask me about:
      </div>
      {isEditable ? (
        <input
          className="relative z-[105]
         mt-[15px] 
         text-center md:text-right 
         text-[16px] leading-[99.3%] 
         font-quicksand font-medium
         w-[220px] h-[36px]
         ring-0 outline-none
         border-[lightgray] border-[1px]
         bg-[#D9D9D9]
         px-[10px]
         rounded-[4px]"
          value={editedAskedMeAbout}
          onChange={(e) => setEditedAskedMeAbout(e.target.value.slice(0, 60))}
        />
      ) : (
        <div
          className="text-[16px] font-quicksand font-medium
                  pt-[15px]
                  leading-[99.3%]
                  lg:text-right
                  max-w-[220px]
                  break-words"
          dangerouslySetInnerHTML={{ __html: userInfo?.askMeAbout || "____________" }}
        />
      )}
      <div
        className="text-[16px] font-bold font-quicksand
                  pt-[40px]
                  leading-[99.3%]
                  lg:text-right"
      >
        I need help with:
      </div>
      {isEditable ? (
        <input
          className="relative z-[105]
         mt-[15px] 
         text-center md:text-right 
         text-[16px] leading-[99.3%] 
         font-quicksand font-medium
         w-[220px] h-[36px]
         ring-0 outline-none
         border-[lightgray] border-[1px]
         bg-[#D9D9D9]
         px-[10px]
         rounded-[4px]"
          value={editedINeedHelpWith}
          onChange={(e) => setEditedINeedHelpWith(e.target.value.slice(0, 60))}
        />
      ) : (
        <div
          className="text-[16px] font-quicksand font-medium
                  pt-[15px]
                  leading-[99.3%]
                  lg:text-right
                  max-w-[220px]
                  break-words"
          dangerouslySetInnerHTML={{ __html: userInfo?.iNeedHelpWith || "____________" }}
        />
      )}
    </div>
  )
}

export default PreProfileInformation
