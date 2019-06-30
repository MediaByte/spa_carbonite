export const apiCall = (link) =>
  fetch(link).then(response => response.json());

export const filterData = (companies, data) => 
  companies.filter(data_index => data_index.company.name.toLowerCase().includes(data.toLowerCase()));