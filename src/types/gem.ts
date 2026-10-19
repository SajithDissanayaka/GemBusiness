export type GemAvailability =
  | "Available"
  | "Reserved"
  | "Sold";

export type Gem = {
  id: number;
  name: string;
  type: string;
  carat: number;
  price: number;
  shape: string;

  description: string;
  color: string;
  clarity: string;
  origin: string;
  treatment: string;
  availability: GemAvailability;

  certificateNumber?: string;
  imageUrl?: string;
};