import { notFound } from "next/navigation";
import ProductPage from "../../../components/product-page";
import { products } from "../../../lib/site-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export default function PlatformPage({ params }) {
  const product = products.find((item) => item.id === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
