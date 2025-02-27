import ProductList from "@/components/shared/products/product-list";
import sampleData from "@/db/sample-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};


const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(sampleData);

  return (
    <>
      <ProductList data={sampleData.products} title="Latest Arrivals" limit={4} />
    </>
  );
}
 
export default HomePage;