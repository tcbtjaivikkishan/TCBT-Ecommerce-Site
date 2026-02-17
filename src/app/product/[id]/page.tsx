import { mockProducts } from "@/lib/mockData";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}
