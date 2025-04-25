
import logger from "../config/logger.config";

import Hotel from "../db/models/hotel";

import { createHotelDTO } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData:createHotelDTO) {
    const hotel = await Hotel.create({
        name:hotelData.name,
        address:hotelData.address,
        location:hotelData.location,
        rating:hotelData.rating,
        ratingCount:hotelData.ratingCount
    });
    logger.info(`hotel created: ${hotel.id}`);
    return hotel;
}

export async function getAllHotels(){
    const hotel = await Hotel.findAll();

    if(!hotel){
       logger.error('No Hotels found');
        throw new Error('no hotels found')
    }
    logger.info(`Number of hotels: ${hotel.length}`);
    
    return hotel;
}

// export async function deleteHotelById(id:Number){
//     const hotel = await Hotel.findByPk(id);

// }



// export async function updateHotel(id:Number,hotelData:createHotelDTO) {
//     const hotel = await Hotel.findByPk(id);

// } 




export async function getHotelById(id:number){
    const hotel = await Hotel.findByPk(id);
    if(!hotel){
        logger.error(`Hotel not found ${id}`);
        throw new NotFoundError(`Hotel with ${id} not found`);
    }
    logger.info(`Hotel found: ${hotel.id}`);
    return hotel;
}


