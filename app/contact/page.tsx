"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    console.log(formData)

    toast({
      title: "消息已发送",
      description: "感谢您的留言，我会尽快回复。",
    })

    // 重置表单
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">联系我</h1>
          <p className="text-muted-foreground mb-8">如果您对我的作品感兴趣，或者有合作意向，请随时与我联系。</p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">邮箱</h3>
              <p className="text-muted-foreground">xiangc3@andrew.cmu.edu</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">电话</h3>
              <p className="text-muted-foreground">+1 4127190594</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">社交媒体</h3>
              <div className="flex gap-4 mt-2">
                <Button variant="outline" size="icon">
                  微信
                </Button>
                <Button variant="outline" size="icon">
                  微博
                </Button>
                <Button variant="outline" size="icon">
                  抖音
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                姓名
              </label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                邮箱
              </label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                主题
              </label>
              <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                留言
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              发送留言
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
