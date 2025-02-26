import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};


const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      Home Page
      
    </>
  );
}
 
export default HomePage;