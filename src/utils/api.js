// Fetch pour récupérer les données depuis le fichier json

const API_BASE_URL = './data/logements.json';

export const getData = () => {
  return fetch(API_BASE_URL).then((response) => response.json());
};

// export const getPropertyById = (id) => {
//   return fetch(`${API_BASE_URL}/properties/${id}`).then((response) => response.json());
// };

// export const createProperty = (data) => {
//   return fetch(`${API_BASE_URL}/properties`, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then((response) => response.json());
// };

// export const updateProperty = (id, data) => {
//   return fetch(`${API_BASE_URL}/properties/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then((response) => response.json());
// };

// export const deleteProperty = (id) => {
//   return fetch(`${API_BASE_URL}/properties/${id}`, {
//     method: 'DELETE',
//   }).then((response) => response);
// }
