import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import VideoPlayer from "@/components/video-player"

// Artiverse项目数据
const artiverseData = {
  id: 1,
  title: "Artiverse",
  videoUrl: "/videos/artiverse-demo.mp4",
  sections: [
    {
      title: "用户研究",
      color: "bg-pink-500",
      leftContent: (
        <div className="space-y-4">
          <Image
            src="/images/target-audience.png"
            width={700}
            height={500}
            alt="目标用户分析"
            className="rounded-lg border w-full"
          />
        </div>
      ),
      rightContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">用户需求分析</h3>
          <p>
            通过深入研究，我们发现艺术家和摄影师面临着寻找灵感地点和分享作品的挑战。如研究所示，用户希望能够将他们的创作与实际地点联系起来，并建立更有意义的互动。
          </p>
          <p>我们的目标用户包括：</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>风景艺术家 - 寻找理想绘画地点并希望展示其作品与地点的联系</li>
            <li>摄影师 - 希望分享照片背后的故事和地点，而不仅仅是获取点赞</li>
          </ul>
        </div>
      ),
    },
    {
      title: "关键洞察",
      color: "bg-green-500",
      leftContent: (
        <div className="space-y-4">
          <Image
            src="/images/key-insights.png"
            width={700}
            height={800}
            alt="关键洞察"
            className="rounded-lg border w-full"
          />
        </div>
      ),
      rightContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">研究发现</h3>
          <p>我们的研究揭示了三个关键洞察：</p>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-green-600">洞察1：创作者希望将作品与实际地点联系</h4>
              <p className="mt-1">
                艺术家和摄影师重视创作过程的地理和情感根源，他们希望分享不仅是艺术作品本身，还有背后的地点和时刻。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-600">洞察2：当视觉故事具有空间性和可分享性时更有力量</h4>
              <p className="mt-1">
                艺术家希望他们的创作旅程可视化并随时间和空间映射，而摄影师希望他们的图像成为他人体验和重访同一地点的一部分。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-600">洞察3：艺术家寻求跨媒介互动和真实社区</h4>
              <p className="mt-1">
                点赞不够——用户渴望深思熟虑的反馈、认可和跨艺术学科的灵感。他们希望自己的作品成为更大创意对话的一部分。
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "竞品分析",
      color: "bg-pink-500",
      leftContent: (
        <div className="space-y-4">
          <Image
            src="/images/competitors.png"
            width={700}
            height={600}
            alt="竞品分析"
            className="rounded-lg border w-full"
          />
        </div>
      ),
      rightContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">市场差距分析</h3>
          <p>
            我们分析了现有平台（Instagram、Google
            Maps和ArtStation）的功能和局限性，发现没有一个平台能完全满足艺术家和摄影师将作品与地点联系起来的需求。
          </p>
          <div className="space-y-3 mt-4">
            <div>
              <h4 className="font-semibold text-pink-600">Instagram</h4>
              <p className="mt-1">虽然支持地理标签和图片分享，但缺乏地图视图和深度社区连接，导致"浅层互动"。</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">Google Maps</h4>
              <p className="mt-1">提供出色的地理功能，但缺乏图片库、分享和社交互动功能，包含许多"不必要的功能"。</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600">ArtStation</h4>
              <p className="mt-1">专注于艺术展示，但缺乏地理位置功能，无法帮助用户发现附近的艺术作品。</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "用户流程设计",
      color: "bg-blue-500",
      leftContent: (
        <div className="space-y-6">
          <Image
            src="/images/user-flow-1.png"
            width={700}
            height={300}
            alt="用户流程图1"
            className="rounded-lg border w-full"
          />
          <Image
            src="/images/user-flow-2.png"
            width={700}
            height={300}
            alt="用户流程图2"
            className="rounded-lg border w-full"
          />
        </div>
      ),
      rightContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">用户旅程规划</h3>
          <p>我们设计了两个主要用户流程，确保无缝体验：</p>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-blue-600">内容创建流程</h4>
              <p className="mt-1">
                用户可以上传作品（照片或绘画），添加位置信息、创作时间和描述文本，然后分享到社区地图中。系统会根据媒介类型提供不同的输入选项。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600">内容浏览流程</h4>
              <p className="mt-1">
                用户可以通过社区地图或图库浏览作品，发现特定位置的艺术作品，查看位置热度，并与创作者互动。这种双向浏览方式满足了不同用户的偏好。
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "设计决策",
      color: "bg-purple-500",
      leftContent: (
        <div className="space-y-4">
          <Image
            src="/images/design-choices.png"
            width={700}
            height={500}
            alt="设计决策"
            className="rounded-lg border w-full"
          />
        </div>
      ),
      rightContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">界面设计策略</h3>
          <p>在比较了画廊和地图两种主要范式后，我们做出了三个关键设计决策：</p>
          <div className="space-y-3 mt-4">
            <div>
              <h4 className="font-semibold text-purple-600">设计决策1：统一界面</h4>
              <p className="mt-1">在同一界面中同时展示画廊和地图视图，让用户可以无缝切换查看方式。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600">设计决策2：模式切换</h4>
              <p className="mt-1">
                添加切换按钮，让用户可以在照片模式和艺术作品模式之间切换，满足不同类型创作者的需求。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600">设计决策3：互动连接</h4>
              <p className="mt-1">
                当用户在画廊中悬停在作品卡片上或在地图上悬停在图标上时，显示连接高亮，帮助用户将艺术作品与其地点关联起来。
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ],
}

// 更新Fourth Trimester Health项目数据，使用新提供的图片和视频，并调整内容组织
const fthData = {
  id: 2,
  title: "Fourth Trimester Health",
  mainImage: "/images/fifth.png",
  sections: [
    {
      title: "用户研究",
      color: "bg-yellow-500",
      leftContent: (
        <div className="space-y-4">
          <Image
            src="/images/user-personas.png"
            width={700}
            height={500}
            alt="用户画像"
            className="rounded-lg border w-full"
          />
        </div>
      ),
      rightContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">目标用户分析</h3>
          <p>通过深入研究，我们识别了五种主要的产后妇女类型，每种类型都有其独特的需求和挑战：</p>
          <div className="space-y-3 mt-4">
            <div>
              <h4 className="font-semibold text-yellow-600">初为人母</h4>
              <p className="mt-1">需要产后恢复指导和确认身体和情绪变化是正常的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">职场妈妈</h4>
              <p className="mt-1">需要高效恢复以快速返回工作，并需要管理压力和疲劳的支持。</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">高风险妈妈</h4>
              <p className="mt-1">需要密切监测健康状况，预防并发症，以及在紧急情况下快速获得医疗服务。</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">健身导向妈妈</h4>
              <p className="mt-1">需要追踪身体状况和确保在锻炼时不超出安全限度。</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">悲伤或NICU妈妈</h4>
              <p className="mt-1">在情绪低落时期需要照顾身体健康的提醒，以及处理悲伤或压力的情感支持。</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "概念设计",
      color: "bg-yellow-500",
      leftContent: (
        <div className="space-y-4">
          <Image
            src="/images/concept-sketch.png"
            width={700}
            height={400}
            alt="概念草图"
            className="rounded-lg border w-full"
          />
        </div>
      ),
      rightContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">设计理念</h3>
          <p>我们的概念设计围绕两个核心主题展开：</p>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-yellow-600">解决"压力过大"问题</h4>
              <p className="mt-1">
                新妈妈常常被各种责任和信息淹没，包括医疗预约、药物管理、日程安排和婴儿护理。我们的设计旨在简化这些任务，减轻认知负担。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">提供"赋能"体验</h4>
              <p className="mt-1">
                通过增强信心、改善沟通和个性化体验，我们的解决方案帮助新妈妈掌控自己的健康状况，做出更明智的决定，并在需要时寻求适当的帮助。
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "系统架构",
      color: "bg-yellow-500",
      leftContent: (
        <div className="space-y-4">
          <Image
            src="/images/system-architecture.png"
            width={700}
            height={800}
            alt="系统架构图"
            className="rounded-lg border w-full"
          />
        </div>
      ),
      rightContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">技术框架</h3>
          <p>我们设计了一个综合性的健康监测系统，包括以下组件：</p>
          <div className="space-y-3 mt-4">
            <div>
              <h4 className="font-semibold text-yellow-600">环境传感器</h4>
              <p className="mt-1">监测噪音、空气质量、温度和湿度，以及药物依从性。</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">智能处理</h4>
              <p className="mt-1">数据处理模型分析原始数据，识别模式和异常。</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">云服务</h4>
              <p className="mt-1">存储敏感信息、过去的异常记录，并运行异常检测模型。</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">软件应用</h4>
              <p className="mt-1">包括患者应用和医疗提供者仪表板，用于健康检查和管理。</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">可穿戴设备</h4>
              <p className="mt-1">配备传感器监测心率、血氧饱和度等关键指标，以及用于用户交互的执行器。</p>
            </div>
          </div>
          <p className="mt-4">
            系统还包含了用户旅程图，展示了医生、婴儿和新妈妈之间的关系，以及新妈妈在面对健康问题时可能遇到的挑战。
          </p>
        </div>
      ),
    },
    {
      title: "硬件设计",
      color: "bg-yellow-500",
      leftContent: (
        <div className="space-y-6">
          <Image
            src="/images/device-renders.png"
            width={700}
            height={300}
            alt="设备渲染图"
            className="rounded-lg border w-full"
          />
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <video
              src="/videos/interface-demo.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
            ></video>
          </div>
          <Image
            src="/images/wearable-design.png"
            width={700}
            height={300}
            alt="可穿戴设备设计"
            className="rounded-lg border w-full"
          />
          <Image
            src="/images/wearable-prototype.png"
            width={700}
            height={300}
            alt="可穿戴设备原型"
            className="rounded-lg border w-full"
          />
          <Image
            src="/images/ui-icons.png"
            width={700}
            height={400}
            alt="UI图标设计"
            className="rounded-lg border w-full"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <video
                src="/videos/checking-health.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
              ></video>
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <video
                src="/videos/receiving-notifications.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      ),
      rightContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">设备原型</h3>
          <p>我们设计了两种互补的设备来全面监测产后妇女的健康状况：</p>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-yellow-600">环境监测器</h4>
              <p className="mt-1">
                一个优雅的家用设备，可放置在卧室或婴儿房，监测环境因素如噪音、空气质量、温度和湿度。设备采用圆角方形设计，有白色和粉色两种版本，融入家居环境的同时提供重要数据。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">可穿戴手环</h4>
              <p className="mt-1">
                一款舒适的腕带式设备，配备多种传感器监测生理指标，如心率、血氧饱和度和体温。设计简约，适合全天佩戴，并具有防水功能。原型已经过实际测试，确保舒适性和功能性。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">用户界面设计</h4>
              <p className="mt-1">
                应用使用简洁的点阵图标显示各种健康指标，包括心率、血氧、血压、跌倒检测、体温和情绪状态。界面将健康指标分为高风险/即时警报和低风险/提醒两类，帮助用户优先处理重要的健康问题。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">交互功能</h4>
              <p className="mt-1">
                应用提供健康检查和通知接收功能，用户可以随时查看详细的健康数据，并在出现异常时接收及时通知。界面设计考虑到了新妈妈可能单手操作的情况，按钮和交互元素都经过优化。
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "应用演示",
      color: "bg-yellow-500",
      leftContent: (
        <div className="space-y-6">
          <div className="relative rounded-lg overflow-hidden" style={{ height: "500px" }}>
            <video
              src="/videos/patient-demo.mov"
              className="w-full h-full object-contain"
              controls
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <video
              src="/videos/provider-demo.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      ),
      rightContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">用户体验演示</h3>
          <p>我们开发了两个互补的应用界面，分别面向产后妇女和医疗提供者：</p>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-yellow-600">患者应用</h4>
              <p className="mt-1">
                患者应用提供直观的健康数据可视化，让产后妇女可以轻松监测自己的健康状况。界面设计简洁明了，提供健康指标的实时更新和历史趋势，以及个性化的健康建议和提醒。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">医疗提供者仪表板</h4>
              <p className="mt-1">
                医疗提供者仪表板允许医生和护士远程监测患者的健康状况，查看详细的健康数据和趋势，并在发现异常时提供及时干预。系统支持多患者管理，优先显示需要关注的高风险患者。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">数据驱动的决策</h4>
              <p className="mt-1">
                两个应用共同工作，确保产后妇女获得全面的健康支持。患者可以主动管理自己的健康，而医疗提供者可以基于实时数据提供更精准的医疗建议，减少不必要的医院就诊。
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ],
}

// 更新Kitten Fishing项目数据，使用新上传的视频
const kittenFishingData = {
  id: 3,
  title: "Kitten Fishing",
  type: "video",
  // 使用GitHub Raw Content URL
  videoUrl: "https://github.com/[用户名]/[仓库名]/raw/main/public/videos/kitten-fishing-intro.mp4",
  thumbnail: "/images/fishing-cat-1.png",
  sections: [
    {
      title: "游戏界面与玩法",
      color: "bg-orange-400",
      leftContent: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/fishing-cat-1.png"
              width={300}
              height={400}
              alt="Kitten Fishing 主界面"
              className="rounded-lg border"
            />
            <Image src="/images/frame-4.png" width={300} height={400} alt="游戏说明" className="rounded-lg border" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/frame-9.png" width={300} height={400} alt="游戏主界面" className="rounded-lg border" />
            <Image
              src="/images/image-2312.png"
              width={300}
              height={400}
              alt="游戏实际画面"
              className="rounded-lg border"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/frame-9-1.png" width={300} height={400} alt="角色选择" className="rounded-lg border" />
            <Image src="/images/frame-9-2.png" width={300} height={400} alt="钓鱼过程" className="rounded-lg border" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/frame-10-1.png" width={300} height={400} alt="游戏选项" className="rounded-lg border" />
            <Image src="/images/frame-10.png" width={300} height={400} alt="控制模式" className="rounded-lg border" />
          </div>
        </div>
      ),
      rightContent: (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">像素风格钓鱼游戏</h3>
          <p>Kitten Fishing是一款可爱的像素风格休闲游戏，玩家需要帮助穿着香蕉服装的小猫钓到顾客想要的特定颜色的鱼。</p>

          <div className="mt-8">
            <h4 className="font-semibold text-lg text-orange-600">游戏目标</h4>
            <p className="mt-2">
              帮助小猫顾客获得他们想要的特定颜色的鱼。游戏界面顶部会显示当前需要钓的鱼的颜色和等待时间。
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-lg text-orange-600">操作方式</h4>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>左、右、上、下键移动角色</li>
              <li>F键切换到摆动模式并投放钓鱼线</li>
              <li>C键切换到鼠标控制模式并点击投放钓鱼线</li>
              <li>空格键重置钓鱼线</li>
              <li>S键切换鱼饵颜色</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-lg text-orange-600">游戏特色</h4>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>可爱的像素风格图形和角色</li>
              <li>简单但有挑战性的游戏玩法</li>
              <li>多种控制模式适应不同玩家偏好</li>
              <li>计时和计分系统增加游戏紧张感</li>
              <li>多种颜色的鱼类和不同的猫咪顾客</li>
            </ul>
          </div>
        </div>
      ),
    },
  ],
}

// 项目数据映射
const projectsData = {
  1: artiverseData,
  2: fthData,
  3: kittenFishingData,
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = projectsData[projectId as keyof typeof projectsData]

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

      {/* 项目标题 */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
      </div>

      {/* 主要内容展示 */}
      <div className="mb-12">
        {project.videoUrl && (
          <div className="rounded-lg overflow-hidden">
            <VideoPlayer videoUrl={project.videoUrl} />
          </div>
        )}

        {!project.videoUrl && project.mainImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src={project.mainImage || "/placeholder.svg"} alt={project.title} fill className="object-contain" />
          </div>
        )}
      </div>

      {/* 项目详细内容 */}
      <div className="space-y-8">
        {project.sections &&
          project.sections.map((section, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className={`${section.color} text-white px-6 py-3`}>
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>{section.leftContent}</div>
                  <div>{section.rightContent}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
