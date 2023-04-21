const queryLead = 'https://api.crossref.org/works?query';
export default {
  getByDoi: () => {},
  getByQuery: async string => {
    const fullQuery = queryLead + '.bibliographic="' + string + '"&rows=5';
    return await fetch(fullQuery).then(resp => resp.json);
  }
};
