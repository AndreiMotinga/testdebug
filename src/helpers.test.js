import {searchToParams} from './helpers';

describe('searchToParams', () => {
  describe('with empty search', () => {
    describe('with supplied params', () => {
      it('returns supplied params', () => {
        global.location = {search: ''};
        const defaultParams = {page: 4, per: 25, sort: 'title desc'};
        const result = searchToParams(defaultParams);
        expect(result['page']).toBe(4);
        expect(result['per']).toBe(25);
        expect(result['sort']).toBe('title desc');
      });
    });

    describe('without supplied params', () => {
      it('returns page: 1', () => {
        global.location = {search: ''};
        const result = searchToParams();
        expect(result['page']).toBe(1);
      });
      it('returns per: 10', () => {
        global.location = {search: ''};
        const result = searchToParams();
        expect(result['per']).toBe(10);
      });
      it('returns sort: name asc', () => {
        global.location = {search: ''};
        const result = searchToParams();
        expect(result['sort']).toBe('name asc');
      });
    });
  });

  describe('with search', () => {
    it('returns search params', () => {
      global.location = {
        search: 'checkin_year=2018&min_price=23&page=4&per=10&sort=brand asc',
      };
      debugger;
      const result = searchToParams();
      expect(result['page']).toBe(4);
      expect(result['per']).toBe(10);
      expect(result['sort']).toBe('sort asc');
      expect(result['checkin_year']).toBe('2018');
      expect(result['min_price']).toBe('23');
    });
  });
});
