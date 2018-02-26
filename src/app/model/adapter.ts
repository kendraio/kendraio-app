export type ParserType = 'xml' | 'yaml' | 'json';

export interface SourceConfig {
  parser: ParserType;
  parserConfig?: any;
  extractor: string;
  extractorConfig?: any;
}

export interface AdapterConfig {
  source: SourceConfig;
  nodeTypes: Array<string>;
  linkTypes: Array<string>;
  rootNodeType: string;
}
