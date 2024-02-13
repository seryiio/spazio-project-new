import { Apartment } from "./Apartment"

export interface Property {
    id: string
    name: string
    direction: string
    department: string
    province: string
    district: string
    country: string
    imagePrincipal: string
    apartments: Apartment[]
};