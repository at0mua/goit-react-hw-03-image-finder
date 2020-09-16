import axios from "axios";

const searchRequest = (request, page = 1) => {
  const key = "17753930-92228c8f53e05da38e171658f";
  const url = `https://pixabay.com/api/?q=${request}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios.get(url).then(({ data }) => data.hits);
};

export default {
  searchRequest,
};
