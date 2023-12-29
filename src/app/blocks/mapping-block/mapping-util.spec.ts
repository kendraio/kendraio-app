import { mappingUtility } from './mapping-util';
import {DateTime} from 'luxon';

// To test expressions directly from existing examples with quotemarks, we allow quotemarks:
// tslint:disable: quotemark

describe('MappingUtil', () => {

  it('uuid method should return the same value as is set', () => {
      expect(
          mappingUtility('', "uuid('test')")
      ).toBe(
          '3ab8d0cd-7b76-5741-8bc9-5725650dc435'
      );
  });

  it('uuid method should return the same expected value for specified value from a data value', () => {
      const data = { data: 'test' };
      const expr = "uuid(data)";
      const expected = '3ab8d0cd-7b76-5741-8bc9-5725650dc435';
      expect(mappingUtility(data, expr)).toBe(expected);
  });

  it('uuid method should return the same expected value for specified value from a data attribute value', () => {
      const data = { data: { test: 'test' } };
      const expr = "uuid(data.test)";
      const expected = '3ab8d0cd-7b76-5741-8bc9-5725650dc435';
      expect(mappingUtility(data, expr)).toBe(expected);
  });

  it('should parse Unix timestamp and return date string', () => {
      const data = { data: { timestamp: 1685976004, nothing: 0 } };
      const expr1 = "parseUnixTimestamp(data.timestamp)";
      const expr2 = "parseUnixTimestamp(data.nothing)";
      const expected1 = DateTime.fromSeconds(data.data.timestamp).toISO();
      const expected2 = DateTime.fromSeconds(data.data.nothing).toISO();

      expect(mappingUtility(data, expr1)).toBe(expected1);
      expect(mappingUtility(data, expr2)).toBe(expected2);
  });

  it('should parse Unix millisecond timestamp and return date string', () => {
    const data = { data: { timestamp: 1589756000000, nothing: 0 } };
    const expr1 = "parseUnixTimestamp(data.timestamp, 'ms')";
    const expected1 = DateTime.fromMillis(data.data.timestamp).toISO();
  
    expect(mappingUtility(data, expr1)).toBe(expected1);
  });
    
  it('should parse Unix millisecond timestamp and return date string with format argument', () => {
    const data = { data: { timestamp: 1589756000000, nothing: 0 } };
    const expr1 = "parseUnixTimestamp(data.timestamp, 'milliseconds')";
    const expected1 = DateTime.fromMillis(data.data.timestamp).toISO();
  
    expect(mappingUtility(data, expr1)).toBe(expected1); 
  });

  it('should return a lower case string when requested', () => {
    const data = { string: "TEST STRING" };
    const expr1 = "toLower(string)";
    const expected1 = "test string";

    expect(mappingUtility(data, expr1)).toBe(expected1);
  });

  it('should return an upper case string when requested', () => {
    const data = { string: "test string" };
    const expr1 = "toUpper(string)";
    const expected1 = "TEST STRING";

    expect(mappingUtility(data, expr1)).toBe(expected1);
  });

  it('should replace one string instance within a larger string', () => {
    const data = { string: "test string before" };
    const expr1 = "replace(string, 'before', 'after')";
    const expected1 = "test string after";

    expect(mappingUtility(data, expr1)).toBe(expected1);
  });

  it('should replace every string instance within a larger string', () => {
    const data = { string: "before test string before" };
    const expr1 = "replaceAll(string, 'before', 'after')";
    const expected1 = "after test string after";

    expect(mappingUtility(data, expr1)).toBe(expected1);
  });

});

