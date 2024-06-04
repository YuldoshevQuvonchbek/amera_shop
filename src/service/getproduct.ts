export interface productType {
  count: number;
  results: {
    id: number;
    title: string;
    price: number;
    is_available: boolean;
    description: string;
    category: string;
    product: number;
    attribute_value: [];
    images: {
      order: number;
      image: string;
    }[];
    userCount: number;
    userPrice: number;
    other_detail: string;
    price_with_discount: string;
    quantity: number;
  }[];
}

export const getproduct = async (): Promise<productType> => {
  try {
    const response = await fetch("http://135.181.108.207/product_variant/", {
      next: { revalidate: 300 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch banners");
    }
    const banners = response.json();
    return banners;
  } catch (error) {
    throw new Error("Failed to fetch banners");
  }
};
