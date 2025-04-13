import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Sample featured works data
const featuredWorks = [
  {
    id: 1,
    title: "城市风光摄影集",
    type: "image",
    thumbnail: "/placeholder.svg?height=600&width=800",
    category: "摄影",
  },
  {
    id: 2,
    title: "品牌宣传视频",
    type: "video",
    thumbnail: "/placeholder.svg?height=600&width=800",
    category: "视频",
  },
  {
    id: 3,
    title: "产品设计展示",
    type: "image",
    thumbnail: "/placeholder.svg?height=600&width=800",
    category: "设计",
  },
]

export default function FeaturedWorks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {featuredWorks.map((work) => (
        <Link key={work.id} href={`/portfolio/${work.id}`}>
          <Card className="overflow-hidden group cursor-pointer transition-all duration-200 hover:shadow-lg">
            <CardContent className="p-0 relative">
              <div className="relative aspect-video">
                <Image
                  src={work.thumbnail || "/placeholder.svg"}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {work.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-3 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                      <Play className="h-8 w-8" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="text-sm font-medium text-muted-foreground mb-1">{work.category}</div>
                <h3 className="font-semibold text-lg">{work.title}</h3>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
