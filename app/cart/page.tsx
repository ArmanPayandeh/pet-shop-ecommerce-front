import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "آنتی بیوتیک دامی فلورفنیکل",
      price: "850,000",
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "واکسن طیور H9N2",
      price: "750,000",
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "مکمل کلسیم گاو شیری",
      price: "95,000",
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const subtotal = "2,545,000"
  const shipping = "50,000"
  const discount = "100,000"
  const total = "2,495,000"

  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          صفحه اصلی
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">سبد خرید</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">سبد خرید</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="rounded-lg border shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-bold">محصولات ({cartItems.length})</h2>
              <Separator className="my-4" />
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="h-24 w-24 overflow-hidden rounded-md border">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="text-sm text-muted-foreground">قیمت واحد: {item.price} تومان</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right font-medium">
                      {Number.parseInt(item.price.replace(/,/g, "")) * item.quantity}
                      ,000 تومان
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>خلاصه سفارش</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
              <div className="space-y-2">
                <Input placeholder="کد تخفیف" />
                <Button variant="outline" className="w-full">
                  اعمال کد تخفیف
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">ادامه فرآیند خرید</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

