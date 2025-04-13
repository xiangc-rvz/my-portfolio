import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">创意作品集</h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              欢迎来到我的创意世界，这里展示了我的摄影、视频和设计作品
            </p>
          </div>
          <div className="space-x-4">
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black"
            >
              <Link href="/portfolio">浏览作品集</Link>
            </Button>
            <Button asChild className="bg-white text-black hover:bg-gray-200">
              <Link href="/contact">联系我</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
