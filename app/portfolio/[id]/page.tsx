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
    category: "UI设计","网页应用设计",
    description: "您的创意坐标：艺术发现和创新的中心",
    detailedDescription: [
      "Artiverse项目源于对传统艺术展示方式的重新思考。在数字时代，艺术家需要新的方式来展示他们的作品，而观众也需要更便捷的方式来欣赏艺术。",
      "我负责整个平台的视觉设计和用户体验设计，创造了一个既现代又直观的界面。",
    ],
    tools: ["Figma", "Adobe Photoshop", "Canva"],
    year: "2025.03",
    clientType: "合作项目","CMU UXA竞赛",
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
    category: "健康科技","产品设计",
    description:
      "基于多模态健康数据的产后健康监测系统，通过实时分析产妇生理指标（如心率、血压、体温），预警潜在健康风险。",
    images: ["/images/fifth.png", "/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
    detailedDescription: [
      "Fourth Trimester Health项目旨在通过可穿戴技术和环境监测为新妈妈提供全面的产后健康支持。产后期（俗称第四孕期）是新妈妈面临诸多身体和心理挑战的重要时期，而现有的医疗支持往往不够充分。",
      "在这个项目中，我负责设计和开发一套集成的系统，包括可穿戴设备和家庭环境传感器。可穿戴设备可以监测新妈妈的生理指标，如心率、睡眠质量和活动水平；环境传感器则监测家庭环境的温度、湿度和空气质量等因素，这些都可能影响产后恢复和婴儿健康。",
    ],
    tools: ["Arduino", "健康API", "机器学习", "云数据分析"],
    year: "2025",
    clientType: "学术合作项目",
    collaborators: "本田研究所","卡内基梅隆大学",
  },
  {
    id: 3,
    title: "Kitten Fishing",
    type: "image",
    thumbnail: "/images/kittenfishing.png",
    category: "游戏设计",
    description: "一款可爱的像素风格猫咪钓鱼游戏，玩家可以猫咪角色进行钓鱼冒险。",
    detailedDescription: [
      "Kitten Fishing是一款融合了休闲和策略元素的独立游戏，采用复古像素风格。",
      "作为这个项目的设计师和程序员，我负责创建游戏的核心机制、角色设计和关卡设计。游戏的特色在于简单易上手但又有足够的深度让玩家长期投入。",
    ],
    tools: ["Python", "CMU Graphics"],
    year: "2024",
    clientType: "独立游戏开发",
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
