import axios from 'axios';

const API_KEY = '68d6d5f0c61db166d76dc04d69a59923';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`;

export default (location) =>{
  const encodedLocation = encodeURIComponent(location);
  const url = `${ROOT_URL}&q=${encodedLocation},us`;
	return axios.get(url).then(function(res){
    console.log(res);
    return res.data.list[0].main.temp;
  },function(res){
    throw new Error(res.data.message);
  });
}
