import axios from 'axios';

const getData = async () => {
  const data = await axios.get('/api');
  console.log(data);
  data.data.forEach((elem) => {
    document
      .querySelector('.container')
      .appendChild(document.createElement('li').appendChild(document.createTextNode(elem.text)));
  });
};

export default getData;
