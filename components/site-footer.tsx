import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 Xiang's作品集. 保留所有权利.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            隐私政策
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            使用条款
          </Link>
        </div>
      </div>
    </footer>
  )
}
