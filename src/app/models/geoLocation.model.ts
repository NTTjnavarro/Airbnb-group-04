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
    lat: 0,
    lng: 0
}

export const DEFAULT_GEO_LOCATION:GeoLocationModel ={
    position: DEFAULT_POSITION
}