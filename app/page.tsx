import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/productCard";
import { ProductsGroupList } from "@/components/shared/productsGroupList";
import { Title } from "@/components/shared/title";
import TopBar from "@/components/shared/top-bar";
import { prisma } from "@/prisma/prismaClient";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        }
      }
    }
  })
  return (
    <>
      <Container className="mt-10">
       <Title text="Все товары" size="lg" className="font-extrabold"/>  
      </Container>

      <TopBar/>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters/>
          </div>
        

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryID={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>

    </>
  );
}
