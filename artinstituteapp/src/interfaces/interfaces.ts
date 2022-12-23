export interface error {
    idError: number,
    idDescripcion: string
  }

export type obra = {
  id:number|string,
  title:string,
  thumbnail: any, //TODO 
  main_reference_number:string,
  date_display:string,
  dimensions:string,
  publication_history:string|null,
  artist_title:string,
  image_id:string,
  place_of_origin?:string,
  style_title?:string,
  artwork_type_title?:string,
  medium_display?:string
}

export interface obras extends Array<obra>{}