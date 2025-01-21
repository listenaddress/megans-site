import NavHeader from "@/components/nav-header"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <main className="max-w-4xl mx-auto px-4 pb-20">
        <div className="mt-28 text-sm text-gray-600">
          <p><a href="email:writetomeg@gmail.com" className="hover:text-black transition-colors underline">Email me</a></p>
        </div>
      </main>
    </div>
  )
}

