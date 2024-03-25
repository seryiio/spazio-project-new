import { Property } from "./Property";

export const INITIAL_PROPERTY: Property[] = [
    {
        id: '1',
        name: 'Proyecto Unifamiliar',
        direction: 'Barrio de Amay',
        department: 'Lima',
        province: 'Huaura',
        district: 'Huacho',
        country: 'Peru',
        imagePrincipal: 'https://res.cloudinary.com/dxevc9a9v/image/upload/v1711396809/gi8bozoxenw1tp9egpty.jpg',
        apartments: [{
            id: 1,
            number: 1,
            dimension: 90,
            quantityBed: 2,
            quantityBath: 3,
            price: 32000,
            imgHall: 'https://i.pinimg.com/originals/fe/97/54/fe97548d5e7957db87d327f7c6c24dab.jpg',
            imgDining: 'https://hips.hearstapps.com/hmg-prod/images/apartamento-luminoso-decorado-con-macrame3-1591781273.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*',
            imgBath: 'https://2.bp.blogspot.com/-mYthQeL1mEU/VS0IrRAHL6I/AAAAAAAAWJY/iwrSA3frGCU/s1600/ba%C3%B1o%2Bmoderno%2Bp%C3%A8que%C3%B1o.jpg',
            imgBed: 'https://i.pinimg.com/736x/af/53/b5/af53b5f3651d56adba4ae7b45de07f70.jpg',
            maps: 'https://www.planosdearquitectura.com/wp-content/uploads/2016/06/Planta-principal-del-peque%C3%B1o-departamento.jpg',
            available: false,
        },
        {
            id: 2,
            number: 2,
            dimension: 45,
            quantityBed: 3,
            quantityBath: 3,
            price: 42000,
            imgHall: 'https://www.shutterstock.com/image-photo/canadian-style-luxury-furnished-staged-600nw-1857464893.jpg',
            imgDining: 'https://i.pinimg.com/550x/1e/0d/c7/1e0dc77910d222e0ca7046b4c9b38872.jpg',
            imgBath: 'https://hips.hearstapps.com/hmg-prod/images/bano-pequeno-ideas-1672601660.jpeg?resize=980:*',
            imgBed: 'https://www.shutterstock.com/image-photo/interior-modern-room-big-bed-600nw-2212044445.jpg',
            maps: 'https://support.content.office.net/es-es/media/9fbc6289-a5de-4954-ae03-0ef707ac66e2.gif',
            available: false,
        }
        ],
    },

    {
        id: '2',
        name: 'Proyecto Diamante',
        direction: 'Las Malvinas',
        department: 'Piura',
        province: 'Piura',
        district: 'Piura',
        country: 'Peru',
        imagePrincipal: 'https://urbania.pe/blog/wp-content/uploads/2012/04/13.jpg',
        apartments: [{
            id: 2,
            number: 1,
            dimension: 120,
            quantityBed: 2,
            quantityBath: 3,
            price: 42000,
            imgHall: 'https://media.admagazine.com/photos/6317bd95d75f2fd76bd148aa/master/w_1600%2Cc_limit/APR%2520-%2520Nooor%2520-%2520Appartement%252045m2%2520rue%2520de%2520Grenelle%2520-%2520cre%25CC%2581dit%2520Nicolas%2520MatheusG19_2044.jpg',
            imgDining: 'https://edifica.com.pe/blog/wp-content/uploads/cuatro-tips-decorar-comedor-departamento-dos.jpg',
            imgBath: 'https://i.pinimg.com/originals/55/f2/11/55f211adf443a14a70fad319b9f6ed12.jpg',
            imgBed: 'https://images.adsttc.com/media/images/6456/b87e/8c76/f501/7c64/053f/newsletter/apartamento-lucas-petit-minimo-arquitetura-e-design_2.jpg?1683404940',
            maps: 'https://images.adsttc.com/media/images/5ae0/f311/f197/ccfe/da00/0052/medium_jpg/studioWOK.jpg?1524691724',
            available: true,
        }
        ],

    },
    {
        id: '3',
        name: 'Proyecto Rubi',
        direction: 'Las Malvinas',
        department: 'Piura',
        province: 'Piura',
        district: 'Piura',
        country: 'Peru',
        imagePrincipal: 'https://avsainmobiliaria.cl/wp-content/uploads/2021/07/Vintage-imagen-1.jpg',
        apartments: [{
            id: 3,
            number: 1,
            dimension: 125,
            quantityBed: 2,
            quantityBath: 3,
            price: 45000,
            imgHall: 'https://media.admagazine.com/photos/6317bd95d75f2fd76bd148aa/master/w_1600%2Cc_limit/APR%2520-%2520Nooor%2520-%2520Appartement%252045m2%2520rue%2520de%2520Grenelle%2520-%2520cre%25CC%2581dit%2520Nicolas%2520MatheusG19_2044.jpg',
            imgDining: 'https://edifica.com.pe/blog/wp-content/uploads/cuatro-tips-decorar-comedor-departamento-dos.jpg',
            imgBath: 'https://i.pinimg.com/originals/55/f2/11/55f211adf443a14a70fad319b9f6ed12.jpg',
            imgBed: 'https://images.adsttc.com/media/images/6456/b87e/8c76/f501/7c64/053f/newsletter/apartamento-lucas-petit-minimo-arquitetura-e-design_2.jpg?1683404940',
            maps: 'https://images.adsttc.com/media/images/5ae0/f311/f197/ccfe/da00/0052/medium_jpg/studioWOK.jpg?1524691724',
            available: true,
        }
        ],
    }
]

export function getPropertyById({ id }: { id: string | undefined }): Property | undefined {
    return INITIAL_PROPERTY.find((property) => property.id === id);
}

export function getPropertyByDistrict({ district }: { district: string | undefined }): Property | undefined {
    return INITIAL_PROPERTY.find((property) => property.district === district);
}