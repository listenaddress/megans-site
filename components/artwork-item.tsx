import Image from "next/image"

interface ArtworkItemProps {
  imageUrl: string
  title: string
  medium: string
  year: string
}

export default function ArtworkItem({ imageUrl, title, medium, year }: ArtworkItemProps) {
  return (
    <div className="my-44">
      <div className="flex flex-col">
        <div className="flex justify-center mb-6">
          <Image 
            src={imageUrl || "/placeholder.svg"} 
            alt={title} 
            fill={false}
            style={{ maxHeight: "800px" }}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto max-h-[600px]" 
          />
        </div>
        <div className="space-y-1 mt-4">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-sm text-gray-600">{medium}</p>
          <p className="text-sm text-gray-600">{year}</p>
        </div>
      </div>
    </div>
  )
}

