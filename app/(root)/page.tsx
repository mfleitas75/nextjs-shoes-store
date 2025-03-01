import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
// import sampleData from "@/db/sample-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};


const HomePage = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // console.log(sampleData);
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Latest Arrivals" />
    </>
  );
}
 
export default HomePage;