"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={400}
        height={400}
        className="min-h-[300px] object-cover object-center"
      />

      <div className="flex">
        {images.map((image, index) => (
          <div 
            key={index} 
            onClick={() => setCurrent(index)}
            className={cn('border rounded-md mr-2 cursor-pointer hover:border-red-200 p-1', current === index && 'border-red-100 rounded-md')}
          >
            <Image src={image} alt="product image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
