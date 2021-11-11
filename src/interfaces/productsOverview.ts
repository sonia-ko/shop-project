export interface ProductOverviewProps {
  picture: string;
  title: string;
  price: number;
  rating: boolean[];
  farm: string;
  shortOverview: string;
  oldPrice: number | undefined;
  freshness: string;
  deliveryArea: string;
  stockNumber: string;
  specialProduct: string;
  deliveryTime: number;
}
