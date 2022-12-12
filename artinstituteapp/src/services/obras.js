import axios from 'axios';

const baseUrl = 'https://api.artic.edu/api/v1/artworks?'
const page = 'page='
const limit = '&limit=12'
const fields = 'fields=id,title,thumbnail,artist_title,publication_history,dimensions,date_display,main_reference_number,image_id'


export const getAllObras = async () => {
    const query = baseUrl + /*page + '1' + limit +*/ fields;
    const res = await axios.get(query).catch(function (e) {
        console.log(e.toJSON())
    });
    const { data } = res.data;
    return data;
}

