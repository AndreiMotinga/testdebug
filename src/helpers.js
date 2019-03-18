import qs from 'query-string';

export const searchToParams = defaultParams => {
  let search = qs.parse(window.location.search, {arrayFormat: 'bracket'});
  search.page =
    parseInt(search.page) || (defaultParams && defaultParams.page) || 1;
  search.per =
    parseInt(search.per) || (defaultParams && defaultParams.per) || 10;
  search.sort =
    search.sort || (defaultParams && defaultParams.sort) || 'name asc';
  return search;
};
