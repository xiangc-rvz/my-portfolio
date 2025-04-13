import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import VideoPlayer from "@/components/video-player"

// 更新后的作品集数据
const portfolioWorks = [
  {
    id: 1,
    title: "Artiverse",
    type: "image",
    thumbnail: "/images/artiverse.png",
    category: "设计",
    description: "Artiverse是一个创意艺术平台，展示了现代设计与艺术的融合。",
    images: [
      "/images/artiverse.png",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: 2,
    title: "Fourth Trimester Health",
    type: "image",
    thumbnail: "/images/fifth.png",
    category: "健康科技",
    description:
      "为产后期开发的可穿戴和环境传感器系统，这是与卡内基梅隆大学合作的计算机系统快速原型设计项目（2025年春季）。",
    images: ["/images/fifth.png", "/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
  },
  {
    id: 3,
    title: "Kitten Fishing",
    type: "image",
    thumbnail: "/images/kittenfishing.png",
    category: "游戏设计",
    description: "一款可爱的像素风格猫咪钓鱼游戏，玩家可以控制不同的猫咪角色进行钓鱼冒险。",
    images: [
      "/images/kittenfishing.png",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = portfolioWorks.find((work) => work.id === projectId)

  if (!project) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">项目未找到</h2>
        <p className="text-muted-foreground mb-6">您查找的项目不存在或已被移除。</p>
        <Button asChild>
          <Link href="/portfolio">返回作品集</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/portfolio" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          返回作品集
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {project.type === "image" && project.images && (
            <div className="space-y-4">
              {project.images.map((img, index) => (
                <div key={index} className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${project.title} - 图片 ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {project.type === "video" && project.videoUrl && <VideoPlayer videoUrl={project.videoUrl} />}
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
          <div className="text-sm font-medium text-muted-foreground mb-4">{project.category}</div>
          <p className="text-muted-foreground mb-6">{project.description}</p>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">项目信息</h3>
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <dt className="font-medium">类型:</dt>
              <dd>{project.type === "image" ? "图片" : "视频"}</dd>
              <dt className="font-medium">创建日期:</dt>
              <dd>2023年</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
