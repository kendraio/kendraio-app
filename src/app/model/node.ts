import { SimulationNodeDatum } from 'd3-force';

export interface Node extends SimulationNodeDatum {
  id: string;
  type: string;
  // further properties as defined by type
}
