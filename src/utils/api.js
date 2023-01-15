// Fetch pour récupérer les données depuis le fichier json

const API_BASE_URL = './data/logements.json';

export const getData = async () => {
  return await fetch(API_BASE_URL).then((response) => response.json());
};

export const getItem = async (id) => {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    return data.filter(item => item.id === id);
  } catch (error) {
    console.error(error);
  }
};

