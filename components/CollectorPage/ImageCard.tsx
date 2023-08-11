import Image from "next/image"
import customLoader from "../../lib/customLoader"

const ImageCard = ({ imageUrl, title }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="relative w-full h-64">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="rounded-t-lg"
        loader={customLoader}
      />
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </div>
  </div>
)

export default ImageCard
