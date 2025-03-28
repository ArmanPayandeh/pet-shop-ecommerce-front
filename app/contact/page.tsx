import Link from "next/link"
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          صفحه اصلی
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">تماس با ما</span>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">تماس با ما</h1>
          <p className="text-muted-foreground">برای ارتباط با ما می‌توانید از روش‌های زیر استفاده کنید</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>ارسال پیام</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      نام و نام خانوادگی
                    </label>
                    <Input id="name" placeholder="نام و نام خانوادگی خود را وارد کنید" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      ایمیل
                    </label>
                    <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    موضوع
                  </label>
                  <Input id="subject" placeholder="موضوع پیام خود را وارد کنید" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    پیام
                  </label>
                  <Textarea id="message" placeholder="پیام خود را وارد کنید" rows={5} />
                </div>
                <Button>ارسال پیام</Button>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>داروخانه دامپزشکی دکتر حمزه</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">آدرس</h3>
                    <p className="text-sm text-muted-foreground">تهران، خیابان ولیعصر، پلاک 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">تلفن</h3>
                    <p className="text-sm text-muted-foreground">021-12345678</p>
                    <p className="text-sm text-muted-foreground">021-87654321</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">ایمیل</h3>
                    <p className="text-sm text-muted-foreground">info@drhamzeh.com</p>
                    <p className="text-sm text-muted-foreground">support@drhamzeh.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>ساعات کاری</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">شنبه تا چهارشنبه</span>
                  <span className="text-sm">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">پنج‌شنبه</span>
                  <span className="text-sm">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">جمعه</span>
                  <span className="text-sm">تعطیل</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 h-96 w-full overflow-hidden rounded-lg border">
          {/* Google Map would go here in a real implementation */}
          <div className="h-full w-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">نقشه گوگل</p>
          </div>
        </div>
      </div>
    </div>
  )
}

