interface CatigoryList {
  id: number;
  title: string;
  image: string;
  price: string;
}

export interface DataType {
  key: number;
  title: string;
  id: number;
  image: string;
  count: number;
  results: CatigoryList[];
}

export const getSubcatygory = async (): Promise<DataType> => {
  try {
    const response = await fetch("http://135.181.108.207/api/subcategory/", {
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
