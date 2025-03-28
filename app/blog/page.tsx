import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "پیشگیری از بیماری‌های شایع در گاو شیری",
      excerpt: "راهکارهای موثر برای پیشگیری از بیماری‌های رایج در گاوهای شیری و افزایش بهره‌وری",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "۱۵ فروردین ۱۴۰۴",
      readTime: 5,
      image: "/placeholder.svg?height=200&width=400",
      category: "دامی",
      author: "دکتر حمزه",
    },
    {
      id: 2,
      title: "واکسیناسیون طیور: زمان‌بندی و نکات مهم",
      excerpt: "راهنمای کامل واکسیناسیون طیور و برنامه زمانی مناسب برای انواع واکسن‌ها",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "۲ فروردین ۱۴۰۴",
      readTime: 7,
      image: "/placeholder.svg?height=200&width=400",
      category: "طیور",
      author: "دکتر سارا احمدی",
    },
    {
      id: 3,
      title: "نکات مهم در نگهداری از حیوانات خانگی",
      excerpt: "آشنایی با اصول صحیح نگهداری از حیوانات خانگی و تغذیه مناسب آن‌ها",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "۲۵ اسفند ۱۴۰۳",
      readTime: 4,
      image: "/placeholder.svg?height=200&width=400",
      category: "حیوانات خانگی",
      author: "دکتر حمزه",
    },
    {
      id: 4,
      title: "بیماری‌های شایع در گوسفند و بز و روش‌های درمان",
      excerpt: "معرفی بیماری‌های رایج در گوسفند و بز و روش‌های تشخیص و درمان آن‌ها",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "۱۰ اسفند ۱۴۰۳",
      readTime: 6,
      image: "/placeholder.svg?height=200&width=400",
      category: "دامی",
      author: "دکتر علی رضایی",
    },
    {
      id: 5,
      title: "مدیریت تغذیه در مرغداری‌های گوشتی",
      excerpt: "اصول صحیح تغذیه طیور گوشتی برای افزایش بهره‌وری و کاهش تلفات",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "۵ اسفند ۱۴۰۳",
      readTime: 8,
      image: "/placeholder.svg?height=200&width=400",
      category: "طیور",
      author: "دکتر حمزه",
    },
    {
      id: 6,
      title: "کاربرد آنتی‌بیوتیک‌ها در دامپزشکی",
      excerpt: "آشنایی با انواع آنتی‌بیوتیک‌های مورد استفاده در دامپزشکی و موارد مصرف آن‌ها",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "۱ اسفند ۱۴۰۳",
      readTime: 5,
      image: "/placeholder.svg?height=200&width=400",
      category: "دامپزشکی",
      author: "دکتر سارا احمدی",
    },
  ]

  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          صفحه اصلی
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">وبلاگ</span>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">وبلاگ</h1>
          <p className="text-muted-foreground">آخرین مقالات و نکات مراقبت از حیوانات خانگی</p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="جستجو در مقالات..."
              className="w-full appearance-none bg-background pl-8 rtl:pr-8 rtl:pl-4"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">دسته‌بندی:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="همه دسته‌ها" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه دسته‌ها</SelectItem>
                <SelectItem value="livestock">دامی</SelectItem>
                <SelectItem value="poultry">طیور</SelectItem>
                <SelectItem value="pets">حیوانات خانگی</SelectItem>
                <SelectItem value="vet">دامپزشکی</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="bg-muted px-2 py-1 rounded-full">{post.category}</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} دقیقه مطالعه</span>
                  </div>
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center text-sm">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt={post.author}
                      width={24}
                      height={24}
                      className="rounded-full mr-2"
                    />
                    <span>{post.author}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <Button variant="outline" size="icon" disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
            1
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
            2
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
            3
          </Button>
          <Button variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

