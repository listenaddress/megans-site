import NavHeader from "@/components/nav-header"
import ArtworkItem from "@/components/artwork-item"

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <main className="max-w-4xl mx-auto px-4 pb-20">
        <ArtworkItem
          imageUrl="https://d2w9rnfcy7mm78.cloudfront.net/33865875/original_4225e5e46258a6625f5cbc52b945725c.gif?1737487263?bc=0"
          title="Box"
          medium="Maple"
          description="Made in Brooklyn, carried on and off the L train between Bushwick and Manhattan, this box traveled with me through the city as it took shape. Through crowded subway cars and busy sidewalks, it witnessed the daily rhythms of urban life, absorbing the energy and character of each neighborhood it passed through."
          year="2019"
        />
        <ArtworkItem
          imageUrl="https://d2w9rnfcy7mm78.cloudfront.net/33866118/original_37a8dc8d9cf0626c4a5ca3fc507c5309.png?1737487746?bc=0"
          title="Readymades found on Bushwick"
          medium="Canvas"
          description="Two stark white semicircular forms arranged against a neutral background, suggesting found objects or architectural elements from the urban landscape of Bushwick. The simple geometric shapes create a striking minimalist composition."
          year="2023"
        />
        <ArtworkItem
          imageUrl="https://d2w9rnfcy7mm78.cloudfront.net/33868223/original_65c5405d8e20d5ea4c0f6c6926dcf915.png?1737492717?bc=0"
          title="Flower"
          medium="Watercolor"
          description="A pastel painting of a pastoral scene with a farmhouse, a barn, and a field of wildflowers. The painting captures the essence of a peaceful rural landscape, with a sense of tranquility and a hint of nostalgia."
          year="2023"
        />
        <ArtworkItem
          imageUrl="https://d2w9rnfcy7mm78.cloudfront.net/33868276/original_aa48ae76189aa9f2c935da2be52b7cfe.png?1737492831?bc=0"
          title="Striped moon"
          medium="Paint"
          description="A pastel painting of a pastoral scene with a farmhouse, a barn, and a field of wildflowers. The painting captures the essence of a peaceful rural landscape, with a sense of tranquility and a hint of nostalgia."
          year="2023"
        />
        <ArtworkItem
          imageUrl="https://d2w9rnfcy7mm78.cloudfront.net/33868103/original_4456458331a4850d2983e49fee99af97.jpg?1737492380?bc=0"
          title="A pastoral scene"
          medium="Oil"
          description="A pastel painting of a pastoral scene with a farmhouse, a barn, and a field of wildflowers. The painting captures the essence of a peaceful rural landscape, with a sense of tranquility and a hint of nostalgia."
          year="2023"
        />
        <ArtworkItem
          imageUrl="https://d2w9rnfcy7mm78.cloudfront.net/33866117/original_0b73dbdcaeb1d8af19582f4e9cafc20c.png?1737487743?bc=0"
          title="animals"
          medium="Pencil sketch"
          description="A playful pencil sketch depicting a marine-themed tower: a crab perched atop a fish, balanced on what appears to be a seal, all arranged on a whale shaped like a sundae glass. The composition creates a whimsical vertical hierarchy, with starfish decorative elements at the base."
          year="2023"
        />
        <ArtworkItem
          imageUrl="https://d2w9rnfcy7mm78.cloudfront.net/33866810/original_7e67453d5b8c6dfd1ba0d9c9cd34619f.png?1737488935?bc=0"
          title="Card for mom"
          medium="Watercolor"
          description="For Christmas I made a watercolor card for my mom. It's of her two dogs, Lucy and Ava."
          year="2023"
        />
        <ArtworkItem
          imageUrl="https://d2w9rnfcy7mm78.cloudfront.net/33868498/original_7a96c0985b96ad6ae700b183d98f0183.png?1737493328?bc=0"
          title="Card for mom"
          medium="Watercolor"
          description="For Christmas I made a watercolor card for my mom. It's of her two dogs, Lucy and Ava."
          year="2023"
        />
        <ArtworkItem
          imageUrl="https://d2w9rnfcy7mm78.cloudfront.net/33868441/original_86eae2c00214a339f9771f4b59d42c30.png?1737493180?bc=0"
          title="Flowers"
          medium="Paint"
          description="A pastel painting of a pastoral scene with a farmhouse, a barn, and a field of wildflowers. The painting captures the essence of a peaceful rural landscape, with a sense of tranquility and a hint of nostalgia."
          year="2023"
        />
        <ArtworkItem
          imageUrl="https://d2w9rnfcy7mm78.cloudfront.net/33868594/original_9e0b1ca752e6354f6f4d2a4f799b30bd.png?1737493441?bc=0"
          title="Eggs and flowers"
          medium="Watercolor"
          description="A pastel painting of a pastoral scene with a farmhouse, a barn, and a field of wildflowers. The painting captures the essence of a peaceful rural landscape, with a sense of tranquility and a hint of nostalgia."
          year="2023"
        />
      </main>
    </div>
  )
}
