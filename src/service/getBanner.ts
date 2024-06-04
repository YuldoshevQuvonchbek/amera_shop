export interface BannerType {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    created_at: string;
    updated_at: string;
    image: string;
    title: string;
    description: string;
  }[];
}

export const getBanner = async (): Promise<BannerType> => {
  try {
    const response = await fetch("http://135.181.108.207/banner/", {
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
