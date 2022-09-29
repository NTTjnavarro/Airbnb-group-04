////TYPES////
export type  HouseDetail = {
  _id: string;
  access: string;
  accommodates: number;
  address: Address;
  amenities: string[];
  availability: Availability;
  bathrooms: Bathrooms;
  bed_type: string;
  bedrooms: number;
  beds: number;
  calendar_last_scraped: Date;
  cancellation_policy: string;
  cleaning_fee: Bathrooms;
  description: string;
  extra_people: Bathrooms;
  guests_included: Bathrooms;
  host: Host;
  house_rules: string;
  images: Images;
  interaction: string;
  last_scraped: Date;
  listing_url: string;
  maximum_nights: string;
  minimum_nights: string;
  name: string;
  neighborhood_overview: string;
  notes: string;
  number_of_reviews: number;
  price: Bathrooms;
  property_type: string;
  review_scores: ReviewScores;
  reviews: any[];
  room_type: string;
  security_deposit: Bathrooms;
  space: string;
  summary: string;
  transit: string;
}

export type Address = {
  country: string;
  country_code: string;
  government_area: string;
  location: Location;
  market: string;
  street: string;
  suburb: string;
}

export type Location = {
  coordinates: number[];
  is_location_exact: boolean;
  type: string;
}

export type Availability = {
  availability_30: number;
  availability_365: number;
  availability_60: number;
  availability_90: number;
}

export type Bathrooms = {
  $numberDecimal: string;
}

export type Host = {
  host_about: string;
  host_has_profile_pic: boolean;
  host_id: string;
  host_identity_verified: boolean;
  host_is_superhost: boolean;
  host_listings_count: number;
  host_location: string;
  host_name: string;
  host_neighbourhood: string;
  host_picture_url: string;
  host_thumbnail_url: string;
  host_total_listings_count: number;
  host_url: string;
  host_verifications: string[];
}

export type Images = {
  medium_url: string;
  picture_url: string;
  thumbnail_url: string;
  xl_picture_url: string;
}

export type ReviewScores = {}

////CONSTANTS////

export const DEFAULT_LOCATION : Location = {
  coordinates: [0],
  is_location_exact: false,
  type: "",
}

export const DEFAULT_ADDRESS : Address = {
  country: "",
  country_code: "",
  government_area: "",
  location: DEFAULT_LOCATION,
  market: "",
  street: "",
  suburb: "",
}

export const DEFAULT_AVAILABILITY : Availability = {
  availability_30: 0,
  availability_365: 0,
  availability_60: 0,
  availability_90: 0,
}
export const DEFAULT_BATHROOMS : Bathrooms = {
  $numberDecimal: "",
}

export const DEFAULT_HOST : Host = {
  host_about: "",
  host_has_profile_pic: false,
  host_id: "",
  host_identity_verified: false,
  host_is_superhost: false,
  host_listings_count: 0,
  host_location: "",
  host_name: "",
  host_neighbourhood: "",
  host_picture_url: "",
  host_thumbnail_url: "",
  host_total_listings_count: 0,
  host_url: "",
  host_verifications: [],
}

export const DEFAULT_IMAGES : Images = {
  medium_url: "",
  picture_url: "",
  thumbnail_url: "",
  xl_picture_url: "",
}
export const DEFAULT_REVIEW_SCORES : ReviewScores = {}

export const DEFAULT_DETAIL_HOUSE : HouseDetail = {
  _id: "",
  access: "",
  accommodates: 0,
  address: DEFAULT_ADDRESS,
  amenities: [],
  availability: DEFAULT_AVAILABILITY,
  bathrooms: DEFAULT_BATHROOMS,
  bed_type: "",
  bedrooms: 0,
  beds: 0,
  calendar_last_scraped: new Date (),
  cancellation_policy: "",
  cleaning_fee: DEFAULT_BATHROOMS,
  description: "",
  extra_people: DEFAULT_BATHROOMS,
  guests_included: DEFAULT_BATHROOMS,
  host: DEFAULT_HOST,
  house_rules: "",
  images: DEFAULT_IMAGES,
  interaction: "",
  last_scraped: new Date(),
  listing_url: "",
  maximum_nights: "",
  minimum_nights: "",
  name: "",
  neighborhood_overview: "",
  notes: "",
  number_of_reviews: 0,
  price: DEFAULT_BATHROOMS,
  property_type: "",
  review_scores: DEFAULT_REVIEW_SCORES,
  reviews: [],
  room_type: "",
  security_deposit: DEFAULT_BATHROOMS,
  space: "",
  summary: "",
  transit: "",
} 