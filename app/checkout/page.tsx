import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function CheckoutPage() {
  const cartItems = [
    {
      id: 1,
      name: "غذای خشک سگ رویال کنین",
      price: "850,000",
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "اسباب بازی گربه",
      price: "120,000",
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "شامپو مخصوص سگ",
      price: "95,000",
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const subtotal = "1,915,000"
  const shipping = "50,000"
  const discount = "100,000"
  const total = "1,865,000"

  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          صفحه اصلی
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/cart" className="hover:text-primary">
          سبد خرید
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">تکمیل خرید</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">تکمیل خرید</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>اطلاعات شخصی</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">نام</Label>
                  <Input id="first-name" placeholder="نام خود را وارد کنید" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">نام خانوادگی</Label>
                  <Input id="last-name" placeholder="نام خانوادگی خود را وارد کنید" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">شماره تماس</Label>
                  <Input id="phone" placeholder="شماره تماس خود را وارد کنید" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>آدرس تحویل</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="province">استان</Label>
                  <Input id="province" placeholder="استان خود را وارد کنید" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">شهر</Label>
                  <Input id="city" placeholder="شهر خود را وارد کنید" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">آدرس کامل</Label>
                <Textarea id="address" placeholder="آدرس کامل خود را وارد کنید" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="postal-code">کد پستی</Label>
                  <Input id="postal-code" placeholder="کد پستی خود را وارد کنید" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>روش پرداخت</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="online">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online">پرداخت آنلاین</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod">پرداخت در محل</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>خلاصه سفارش</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-md border">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <div className="text-xs text-muted-foreground">تعداد: {item.quantity}</div>
                    </div>
                    <div className="text-sm font-medium">
                      {Number.parseInt(item.price.replace(/,/g, "")) * item.quantity}
                      ,000 تومان
                    </div>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">جمع کل</span>
                <span>{subtotal} تومان</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">هزینه ارسال</span>
                <span>{shipping} تومان</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">تخفیف</span>
                <span className="text-destructive">- {discount} تومان</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>مبلغ قابل پرداخت</span>
                <span>{total} تومان</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">ثبت سفارش و پرداخت</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

