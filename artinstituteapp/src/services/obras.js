import axios from 'axios';

const baseUrl = 'https://api.artic.edu/api/v1/artworks?'
const page = 'page='
const limit = '&limit=20'
const fields = '?fields=id,title,thumbnail,artist_title,publication_history,dimensions,date_display,main_reference_number,image_id'


export const getAllObras = async () => {
    const res = await axios.get(baseUrl + page + '1' + fields)
    const { data } = res.data;
    console.log(data)
    return data;
}

