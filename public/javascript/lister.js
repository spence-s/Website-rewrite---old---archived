import axios from 'axios';

const getData = async () => {
  const data = await axios.get('/api');
  console.log(data);
  data.data.forEach((elemData) => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(elemData.text));
    document.querySelector('.container').appendChild(div);
  });
};

export default getData;
