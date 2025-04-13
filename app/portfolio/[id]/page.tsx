import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import VideoPlayer from "@/components/video-player"

// Sample portfolio works data (same as in portfolio-grid.tsx)
const portfolioWorks = [
  {
    id: 1,
    title: "城市风光摄影集",
    type: "image",
    thumbnail: "/placeholder.svg?height=600&width=800",
    category: "摄影",
    description: "这是一组展现现代城市建筑与街道风光的摄影作品，捕捉了城市的动感与活力。",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: 2,
    title: "品牌宣传视频",
    type: "video",
    thumbnail: "/placeholder.svg?height=600&width=800",
    category: "视频",
    description: "为某品牌制作的宣传视频，展示了产品特性和品牌理念。",
    videoUrl: "https://example.com/video.mp4", // 这里需要替换为实际视频URL
  },
  // ... other works
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = portfolioWorks.find((work) => work.id === projectId)

  if (!project) {
    return <div className="container py-12 text-center">项目未找到</div>
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
