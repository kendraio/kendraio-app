import { SimulationLinkDatum } from 'd3-force';

export interface Link extends SimulationLinkDatum<any> {
  source: string;
  target: string;
  type: string;
  // further properties defined by type
}
