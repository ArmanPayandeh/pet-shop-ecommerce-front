import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Search, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="داروخانه دامپزشکی دکتر حمزه"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold">داروخانه دامپزشکی دکتر حمزه</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="جستجو..."
                className="w-full appearance-none bg-background pl-8 rtl:pr-8 rtl:pl-4"
              />
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="font-medium transition-colors hover:text-primary">
                صفحه اصلی
              </Link>
              <Link href="/products" className="font-medium transition-colors hover:text-primary">
                محصولات
              </Link>
              <Link href="/blog" className="font-medium transition-colors hover:text-primary">
                وبلاگ
              </Link>
              <Link href="/contact" className="font-medium transition-colors hover:text-primary">
                تماس با ما
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                3
              </span>
            </Button>
            <Button>ورود / ثبت نام</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            به داروخانه دامپزشکی دکتر حمزه خوش آمدید
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            ارائه دهنده داروها و محصولات دامپزشکی برای حیوانات خانگی، دام و طیور با کیفیت عالی
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg">
              مشاهده محصولات
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              درباره ما
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">دسته‌بندی محصولات</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">محصولات متنوع برای انواع حیوانات خانگی</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/category/${category.id}`}>
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">محصولات پرفروش</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">محبوب‌ترین محصولات ما را ببینید</p>
          </div>
          <Tabs defaultValue="all" className="mt-8">
            <TabsList className="w-full max-w-md mx-auto">
              <TabsTrigger value="all" className="flex-1">
                همه
              </TabsTrigger>
              <TabsTrigger value="livestock" className="flex-1">
                دامی
              </TabsTrigger>
              <TabsTrigger value="poultry" className="flex-1">
                طیور
              </TabsTrigger>
              <TabsTrigger value="pets" className="flex-1">
                حیوانات خانگی
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`}>
                    <Card className="overflow-hidden transition-all hover:shadow-lg">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-bold">{product.price} تومان</span>
                          <Button size="sm">افزودن به سبد</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            {/* Other tabs would have similar content */}
          </Tabs>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">وبلاگ</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              آخرین مقالات و نکات مراقبت از حیوانات خانگی
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-video relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} دقیقه مطالعه</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline">مشاهده همه مقالات</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold">داروخانه دامپزشکی دکتر حمزه</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                ارائه دهنده داروها و محصولات دامپزشکی برای حیوانات خانگی، دام و طیور با کیفیت عالی
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">دسترسی سریع</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    صفحه اصلی
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-muted-foreground hover:text-foreground">
                    محصولات
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    وبلاگ
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    درباره ما
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">تماس با ما</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="text-muted-foreground">آدرس: تهران، خیابان ولیعصر، پلاک 123</li>
                <li className="text-muted-foreground">تلفن: 021-12345678</li>
                <li className="text-muted-foreground">ایمیل: info@drhamzeh.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">خبرنامه</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                برای دریافت آخرین اخبار و تخفیف‌ها در خبرنامه ما عضو شوید
              </p>
              <div className="mt-4 flex gap-2">
                <Input placeholder="ایمیل خود را وارد کنید" />
                <Button>عضویت</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 داروخانه دامپزشکی دکتر حمزه. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const categories = [
  { id: 1, name: "داروهای دامی", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "داروهای طیور", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "داروهای حیوانات خانگی", image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "مکمل‌های غذایی", image: "/placeholder.svg?height=300&width=300" },
]

const products = [
  {
    id: 1,
    name: "آنتی بیوتیک دامی فلورفنیکل",
    category: "داروهای دامی",
    price: "850,000",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "واکسن طیور H9N2",
    category: "داروهای طیور",
    price: "750,000",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "داروی ضد انگل سگ",
    category: "داروهای حیوانات خانگی",
    price: "120,000",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "مکمل کلسیم گاو شیری",
    category: "مکمل‌های غذایی",
    price: "95,000",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const blogPosts = [
  {
    id: 1,
    title: "راهنمای نگهداری از توله سگ",
    excerpt: "همه چیز درباره نگهداری صحیح از توله سگ‌ها در ماه‌های اول زندگی",
    date: "۱۵ فروردین ۱۴۰۴",
    readTime: 5,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "بهترین غذاهای گربه",
    excerpt: "معرفی بهترین برندهای غذای گربه و مقایسه آن‌ها از نظر کیفیت و قیمت",
    date: "۲ فروردین ۱۴۰۴",
    readTime: 7,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "نکات مهم در نگهداری از پرندگان",
    excerpt: "آشنایی با اصول صحیح نگهداری از پرندگان خانگی و تغذیه مناسب آن‌ها",
    date: "۲۵ اسفند ۱۴۰۳",
    readTime: 4,
    image: "/placeholder.svg?height=200&width=400",
  },
]

