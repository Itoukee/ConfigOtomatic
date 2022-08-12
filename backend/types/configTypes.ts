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
