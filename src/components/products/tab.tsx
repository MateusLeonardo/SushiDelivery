import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";
import { ProductEmpty } from "@/components/products/empty";
import { ProductItem } from "@/components/products/product-item";

type Tab = {
  title: string;
  value: string;
  products: Product[];
};

export const ProductsTab = async () => {
  const products = await getAllProducts();

  const tabs: Tab[] = [
    {
      title: "Sushi",
      value: "sushi",
      products: products.filter((product) => product.category === "sushi"),
    },
    {
      title: "Temaki",
      value: "temaki",
      products: products.filter((product) => product.category === "temaki"),
    },
    {
      title: "Combinados",
      value: "pack",
      products: products.filter((product) => product.category === "pack"),
    },
    {
      title: "Bebidas",
      value: "beverage",
      products: products.filter((product) => product.category === "beverage"),
    },
  ];

  return (
    <Tabs defaultValue="sushi">
      <TabsList className="flex">
        {tabs.map((item) => (
          <TabsTrigger className="flex-1" key={item.value} value={item.value}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((item) => (
        <TabsContent value={item.value} key={item.value} className="mt-6">
          {item.products.length > 0 ? (
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {item.products.map((product) => (
                <ProductItem key={product.id} item={product} />
              ))}
            </div>
          ) : (
            <ProductEmpty />
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};
