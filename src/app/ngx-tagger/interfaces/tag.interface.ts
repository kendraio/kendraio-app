import { PointInterface } from "./point.interface";

export interface TagInterface {
  topLeft: PointInterface;
  bottomRight: PointInterface;
  data?: any;
}
