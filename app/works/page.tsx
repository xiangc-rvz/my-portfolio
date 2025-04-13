import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorksPage() {
  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          返回首页
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">我的作品</h1>
        <p className="text-muted-foreground max-w-[700px]">
          这里是我的作品展示页面，您可以在这里添加更多的作品和详细描述。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-12">
        {/* 作品项目1 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-video">
              <Image src="/placeholder.svg?height=600&width=800" alt="作品项目1" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">作品项目1</h2>
              <div className="text-sm font-medium text-muted-foreground mb-4">类别</div>
              <p className="text-muted-foreground mb-6">
                这里可以添加您的作品详细描述，包括创作背景、使用的技术、创作过程等信息。
              </p>
              <Button>查看详情</Button>
            </div>
          </div>
        </div>

        {/* 作品项目2 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-video">
              <Image src="/placeholder.svg?height=600&width=800" alt="作品项目2" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">作品项目2</h2>
              <div className="text-sm font-medium text-muted-foreground mb-4">类别</div>
              <p className="text-muted-foreground mb-6">
                这里可以添加您的作品详细描述，包括创作背景、使用的技术、创作过程等信息。
              </p>
              <Button>查看详情</Button>
            </div>
          </div>
        </div>

        {/* 作品项目3 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-video">
              <Image src="/placeholder.svg?height=600&width=800" alt="作品项目3" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">作品项目3</h2>
              <div className="text-sm font-medium text-muted-foreground mb-4">类别</div>
              <p className="text-muted-foreground mb-6">
                这里可以添加您的作品详细描述，包括创作背景、使用的技术、创作过程等信息。
              </p>
              <Button>查看详情</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
