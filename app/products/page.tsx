import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">محصولات</h1>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="جستجو در محصولات..."
                className="w-full appearance-none bg-background pl-8 rtl:pr-8 rtl:pl-4"
              />
            </div>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">جدیدترین</SelectItem>
                <SelectItem value="price-asc">قیمت: کم به زیاد</SelectItem>
                <SelectItem value="price-desc">قیمت: زیاد به کم</SelectItem>
                <SelectItem value="popular">محبوب‌ترین</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h3 className="mb-4 text-lg font-medium">فیلترها</h3>
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="category">
                    <AccordionTrigger>دسته‌بندی</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Checkbox id="livestock-meds" />
                          <label
                            htmlFor="livestock-meds"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            داروهای دامی
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Checkbox id="poultry-meds" />
                          <label
                            htmlFor="poultry-meds"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            داروهای طیور
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Checkbox id="pet-meds" />
                          <label
                            htmlFor="pet-meds"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            داروهای حیوانات خانگی
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Checkbox id="supplements" />
                          <label
                            htmlFor="supplements"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            مکمل‌های غذایی
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="brand">
                    <AccordionTrigger>برند</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Checkbox id="rooyan-pharma" />
                          <label
                            htmlFor="rooyan-pharma"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            رویان دارو
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Checkbox id="aburaihan" />
                          <label
                            htmlFor="aburaihan"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            ابوریحان
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Checkbox id="razak" />
                          <label
                            htmlFor="razak"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            رازک
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="price">
                    <AccordionTrigger>قیمت</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <Slider defaultValue={[0, 1000000]} max={1000000} step={10000} />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">۰ تومان</span>
                          <span className="text-sm">۱,۰۰۰,۰۰۰ تومان</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Button className="mt-4 w-full">اعمال فیلترها</Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

              {/* Pagination */}
              <div className="mt-8 flex items-center justify-center gap-2">
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
        </div>
      </div>
    </div>
  )
}

// Sample data
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
  {
    id: 5,
    name: "آنتی بیوتیک اکسی تتراسایکلین",
    category: "داروهای دامی",
    price: "180,000",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "مولتی ویتامین طیور",
    category: "داروهای طیور",
    price: "220,000",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "شامپوی درمانی گربه",
    category: "داروهای حیوانات خانگی",
    price: "85,000",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "مکمل ویتامین E و سلنیوم",
    category: "مکمل‌های غذایی",
    price: "65,000",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 9,
    name: "واکسن تب برفکی",
    category: "داروهای دامی",
    price: "950,000",
    image: "/placeholder.svg?height=300&width=300",
  },
]

