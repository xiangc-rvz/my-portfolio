import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// 更新后的精选作品数据
const featuredWorks = [
  {
    id: 1,
    title: "Artiverse",
    type: "video", // 改为视频类型
    thumbnail: "/images/artiverse.png", // 保留缩略图
    category: "设计",
  },
  {
    id: 2,
    title: "Fourth Trimester Health",
    type: "image",
    thumbnail: "/images/fifth.png",
    category: "健康科技",
  },
  {
    id: 3,
    title: "Kitten Fishing",
    type: "image",
    thumbnail: "/images/kittenfishing.png",
    category: "游戏设计",
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
