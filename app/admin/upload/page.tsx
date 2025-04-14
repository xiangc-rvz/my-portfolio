"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function UploadPage() {
  const { toast } = useToast()
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [blobUrl, setBlobUrl] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "请选择文件",
        description: "请先选择要上传的视频文件",
        variant: "destructive",
      })
      return
    }

    setUploading(true)

    try {
      const response = await fetch(`/api/blob?filename=${encodeURIComponent(file.name)}`, {
        method: "POST",
        body: file,
      })

      if (!response.ok) {
        throw new Error("上传失败")
      }

      const blob = await response.json()
      setBlobUrl(blob.url)

      toast({
        title: "上传成功",
        description: "视频已成功上传到Vercel Blob存储",
      })
    } catch (error) {
      console.error("上传错误:", error)
      toast({
        title: "上传失败",
        description: "视频上传过程中发生错误",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">上传视频到Blob存储</h1>

      <div className="space-y-6 max-w-md">
        <div className="space-y-2">
          <label htmlFor="video" className="text-sm font-medium">
            选择视频文件
          </label>
          <Input id="video" type="file" accept="video/*" onChange={handleFileChange} disabled={uploading} />
        </div>

        <Button onClick={handleUpload} disabled={!file || uploading} className="w-full">
          {uploading ? "上传中..." : "上传视频"}
        </Button>

        {blobUrl && (
          <div className="space-y-4 mt-6 p-4 border rounded-md">
            <h2 className="font-semibold">上传成功！</h2>
            <p className="text-sm break-all">Blob URL: {blobUrl}</p>
            <p className="text-sm text-muted-foreground">请复制此URL并更新您的项目数据中的videoUrl字段。</p>
          </div>
        )}
      </div>
    </div>
  )
}
