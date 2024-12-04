import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Link href="photo/1" className="group" style={{ "marginLeft": "20px" }}>
              <Image width={100} height={100} src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="w-full h-full aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
              <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </Link>
            <Link href="#" className="group" style={{ "marginLeft": "20px" }}>
              <Image width={100} height={100} src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="w-full h-full aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
              <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
