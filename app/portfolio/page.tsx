import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PortfolioGrid from "@/components/portfolio-grid"

export default function PortfolioPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">作品集</h1>
        <p className="max-w-[700px] text-muted-foreground">浏览我的创意作品，包括摄影、视频和设计项目</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">全部</TabsTrigger>
            <TabsTrigger value="images">图片</TabsTrigger>
            <TabsTrigger value="videos">视频</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all">
          <PortfolioGrid filter="all" />
        </TabsContent>
        <TabsContent value="images">
          <PortfolioGrid filter="image" />
        </TabsContent>
        <TabsContent value="videos">
          <PortfolioGrid filter="video" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
