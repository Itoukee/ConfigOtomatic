export type IType =
  | "CPU"
  | "RAM"
  | "GPU"
  | "MB"
  | "PSU"
  | "COOLER"
  | "SSD"
  | "HDD";

export type ICaracteristic = {
  title: string;
  text: string;
  more?: string[];
};

export type IComponent = {
  _id: string;
  type: IType;
  title: string;
  brand: string;
  image: string;
  rated: number;
  stock: number;
  price: number;
  socket?: string;
  caracteristics: ICaracteristic[];
};
export type IConfig = {
  _id: string;
  userId: string;
  config: { price: number; components: Partial<IComponent[]> };
  socket?: string;
  visibility: boolean;
};
