import { mappingUtility } from './mapping-util';

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
});

