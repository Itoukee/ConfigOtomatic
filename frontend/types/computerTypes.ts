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
};
export type IConfig = {
  _id: string;
  userId: string;
  name: string;
  config: { price: number; components: IComponent[] };
  price: number;
  socket: string;
  visibility: boolean;
};
