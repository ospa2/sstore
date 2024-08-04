import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/productCard";
import { Title } from "@/components/shared/title";
import TopBar from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
       <Title text="Все товары" size="lg" className="font-extrabold"/>  
      </Container>

      <TopBar/>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters/>
          </div>
        

        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductCard name="Сумка Chanel" price={39900} imageUrl={"https://20.img.avito.st/image/1/1.IvV3Ira4jhxBi0wZPzIFkGCAjBrJgwwUAYaMHseLhhbB.xB11jfz3EeBdklC1LlLuauIa-CknL1wEM1cCeo4W_-w"}/>
          </div>
        </div> 
        </div>
      </Container>

    </>
  );
}
