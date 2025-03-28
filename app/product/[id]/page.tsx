import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, Minus, Plus, Share2, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the product data based on the ID
  const product = {
    id: params.id,
    name: "آنتی بیوتیک دامی فلورفنیکل - 100 میلی لیتر",
    price: "850,000",
    discountPrice: "750,000",
    rating: 4.8,
    reviewCount: 124,
    description:
      "آنتی بیوتیک فلورفنیکل یک داروی ضد باکتری با طیف اثر وسیع است که برای درمان عفونت‌های تنفسی، گوارشی و سایر عفونت‌های باکتریایی در دام‌ها استفاده می‌شود. این دارو به صورت تزریقی بوده و برای گاو، گوسفند و بز قابل استفاده است.",
    features: [
      "موثر در درمان عفونت‌های تنفسی دام",
      "طیف اثر وسیع بر باکتری‌های گرم مثبت و گرم منفی",
      "ماندگاری طولانی در بدن دام",
      "کاهش نیاز به تزریق مکرر",
      "دوره پرهیز از مصرف کوتاه",
    ],
    specifications: [
      { name: "برند", value: "رویان دارو" },
      { name: "حجم", value: "100 میلی لیتر" },
      { name: "مناسب برای", value: "گاو، گوسفند و بز" },
      { name: "کشور سازنده", value: "ایران" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    stock: 15,
    category: "داروهای دامی",
  }

  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          صفحه اصلی
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/products" className="hover:text-primary">
          محصولات
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/category/${product.category}`} className="hover:text-primary">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg border">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - تصویر ${index + 1}`}
                  width={150}
                  height={150}
                  className="aspect-square w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} نظر)
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">{product.discountPrice} تومان</span>
              {product.discountPrice !== product.price && (
                <span className="text-sm text-muted-foreground line-through">{product.price} تومان</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <Truck className="h-4 w-4" />
              <span>موجود در انبار - ارسال در 1 روز کاری</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-medium">تعداد:</span>
              <div className="flex items-center">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none">
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="flex h-8 w-12 items-center justify-center border-y">1</div>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button className="flex-1">افزودن به سبد خرید</Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="font-medium">ویژگی‌های محصول:</h3>
            <ul className="list-inside list-disc space-y-1 text-sm">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">مشخصات فنی:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-muted-foreground">{spec.name}:</span>
                  <span>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">توضیحات</TabsTrigger>
            <TabsTrigger value="reviews">نظرات ({product.reviewCount})</TabsTrigger>
            <TabsTrigger value="shipping">ارسال و بازگشت</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p>{product.description}</p>
              <p>
                این غذا با فرمول مخصوص خود، به حفظ وزن ایده‌آل سگ شما کمک می‌کند و با داشتن مواد مغذی مورد نیاز، سلامت
                پوست و موی حیوان شما را تضمین می‌کند. همچنین با تقویت سیستم ایمنی بدن، به سگ شما کمک می‌کند تا در برابر
                بیماری‌ها مقاوم‌تر باشد.
              </p>
              <p>
                رویال کنین یکی از معتبرترین برندهای غذای حیوانات خانگی در جهان است که با بیش از 50 سال سابقه، همواره
                کیفیت محصولات خود را در بالاترین سطح حفظ کرده است.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{product.rating}</div>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">از {product.reviewCount} نظر</div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <div className="text-sm text-muted-foreground">{rating} ستاره</div>
                        <div className="h-2 flex-1 rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{
                              width: `${
                                rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 5 : rating === 2 ? 3 : 2
                              }%`,
                            }}
                          />
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 5 : rating === 2 ? 3 : 2}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Button>ثبت نظر</Button>
                </div>
              </div>

              <Separator />

              {/* Sample Reviews */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="کاربر"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">علی محمدی</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < 5 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span>۲ هفته پیش</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    این دارو برای درمان عفونت تنفسی گاوهای مزرعه ما بسیار موثر بود. بعد از دو روز استفاده، علائم بیماری
                    کاملاً برطرف شد. کیفیت دارو عالی است و قیمت آن نیز مناسب می‌باشد.
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="کاربر"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">مریم حسینی</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span>۱ ماه پیش</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    من برای درمان گوسفندهایم از این دارو استفاده کردم. اثربخشی خوبی داشت اما قیمتش کمی بالاست. بسته‌بندی
                    سالم به دستم رسید و ارسال هم سریع بود.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="shipping" className="mt-6">
            <div className="prose max-w-none">
              <h3>شرایط ارسال</h3>
              <p>
                ارسال سفارشات در روزهای کاری (شنبه تا چهارشنبه) انجام می‌شود. سفارشات ثبت شده تا ساعت 12 ظهر، در همان روز
                ارسال می‌شوند و سفارشات بعد از این ساعت، روز کاری بعد ارسال خواهند شد.
              </p>
              <p>
                هزینه ارسال برای سفارشات بالای 500,000 تومان رایگان است. برای سفارشات کمتر از این مبلغ، هزینه ارسال بر
                اساس وزن محصول و مسافت محاسبه می‌شود.
              </p>

              <h3>شرایط بازگشت کالا</h3>
              <p>
                در صورت وجود هرگونه مشکل در محصول دریافتی، می‌توانید تا 7 روز پس از دریافت کالا، درخواست بازگشت خود را
                ثبت کنید. لطفاً توجه داشته باشید که محصول باید در بسته‌بندی اصلی و بدون استفاده باشد.
              </p>
              <p>پس از تأیید درخواست بازگشت، هزینه محصول (به استثنای هزینه ارسال) به حساب شما بازگردانده می‌شود.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">محصولات مرتبط</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="محصول مرتبط"
                  fill
                  className="object-cover transition-all hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">غذای سگ پدیگری</h3>
                <p className="text-sm text-muted-foreground">غذای سگ</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">650,000 تومان</span>
                  <Button size="sm">افزودن به سبد</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

