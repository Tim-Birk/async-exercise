const API_BASE_URL = 'http://numbersapi.com';

const getFavoriteNumberInfo = async (number) => {
  try {
    const url = `${API_BASE_URL}/${number}?json`;
    const resp = await axios.get(url);
    console.log(resp.data);
  } catch (e) {
    console.log(e);
  }
};

const getMultipleNumbersInfo = async (numbers) => {
  try {
    const url = `${API_BASE_URL}/${numbers}?json`;
    const resp = await axios.get(url);
    console.log(resp.data);
  } catch (e) {
    console.log(e);
  }
};

const displayFavoriteNumberFacts = async (number) => {
  $('#favorite-number-facts').empty();
  const numberPromises = [];
  for (let i = 0; i < 4; i++) {
    numberPromises.push(axios.get(`${API_BASE_URL}/${number}?json`));
  }
  let facts = await Promise.all(numberPromises);
  for (fact of facts) {
    $('#favorite-number-facts').append($(`<li>${fact.data.text}</li>`));
  }
};
