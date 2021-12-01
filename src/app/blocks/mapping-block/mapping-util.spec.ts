import { mappingUtility } from './mapping-util';

// To test expressions directly from existing examples with quotemarks, we allow quotemarks:
// tslint:disable: quotemark

describe('MappingUtil', () => {

    it('should return the same value as is set', () => {
        expect(mappingUtility('', "uuid('test')")).toBe('3ab8d0cd-7b76-5741-8bc9-5725650dc435');
    });

});
