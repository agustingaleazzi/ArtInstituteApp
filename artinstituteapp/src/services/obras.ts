const baseUrl = 'https://api.artic.edu/api/v1/artworks?'
const page = 'page='
const limit = '&limit=12'
const fields = 'fields=id,title,thumbnail,artist_title,publication_history,dimensions,date_display,main_reference_number,image_id'

type res = {
    pagination: {},
    data: {}
}

export const getFirstPage = async () => {
    const query = baseUrl + /*page + '1' + limit +*/ fields;
    let data  = {};
    const response:any = await 
    fetch(query)
      .then((response) => response.json())
      .then((response) => {
        data = response;
      })
      console.log(data)
      
    return data;
}

export const getPage = async (url:string) => {
    const query = baseUrl + /*page + '1' + limit +*/ fields;
    let data  = {};
    const response:any = await 
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        data = response;
      })
      console.log(data)
      
    return data;
}

/*axios.get(query).catch(function (e) {
        console.log(e.toJSON())
    });*/