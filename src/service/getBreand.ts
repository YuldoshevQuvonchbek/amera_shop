interface DataType {
  id: number;
  title: string;
  image: string;
  count: number;
  results: {
    id: number;
    title: string;
    image: string;
  }[];
}
export const getBreand = async (): Promise<DataType> => {
  try {
    const response = await fetch("http://135.181.108.207/brand/", {
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
