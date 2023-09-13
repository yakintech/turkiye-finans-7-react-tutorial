export interface Supplier{
    id:number;
    companyName?:string;
    contactName?:string;
    contactTitle?:string
    address?: Address
}


//eğer soru işareti koymazsak default olarak tüm değerleri objeyi oluşturma aşamsında vermeniz gerekmektedir!
export interface Address{
    street?: string
    city?: string
    region?: string
    postalCode?: number
    country?: string
    phone?: string
}


