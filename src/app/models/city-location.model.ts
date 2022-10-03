export type CityLocation = {
  info:    Info;
  options: Options;
  results: Result[];
}

export type Info = {
  statuscode: number;
  copyright:  Copyright;
  messages:   any[];
}

export type Copyright = {
  text:         string;
  imageUrl:     string;
  imageAltText: string;
}

export type Options = {
  maxResults:        number;
  thumbMaps:         boolean;
  ignoreLatLngInput: boolean;
}

export type Result = {
  providedLocation: ProvidedLocation;
  locations:        Location[];
}

export type Location = {
  street:             string;
  adminArea6:         string;
  adminArea6Type:     string;
  adminArea5:         string;
  adminArea5Type:     string;
  adminArea4:         string;
  adminArea4Type:     string;
  adminArea3:         string;
  adminArea3Type:     string;
  adminArea1:         string;
  adminArea1Type:     string;
  postalCode:         string;
  geocodeQualityCode: string;
  geocodeQuality:     string;
  dragPoint:          boolean;
  sideOfStreet:       string;
  linkId:             string;
  unknownInput:       string;
  type:               string;
  latLng:             LatLng;
  displayLatLng:      LatLng;
  mapUrl:             string;
}

export type LatLng = {
  lat: number;
  lng: number;
}

export type ProvidedLocation = {
  location: string;
}
