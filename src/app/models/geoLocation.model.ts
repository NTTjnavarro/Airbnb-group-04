export type position = {
    lat: number,
    lng: number
}

export type GeoLocationModel = {
    position: position
}

export type getCurrentPosition = {
    coords: {
        latitude: number,
        longitude: number
    }
}

export const DEFAULT_POSITION:position = {
    lat: 41.390205,
    lng: 2.154007
}

export const DEFAULT_GEO_LOCATION:GeoLocationModel ={
    position: DEFAULT_POSITION
}