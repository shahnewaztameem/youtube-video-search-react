import axios from 'axios';

const KEY = 'AIzaSyBk8fX-je7qAnKtUJDiESr1mzOs1-t_Bgo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
    type: 'video'
  }
})