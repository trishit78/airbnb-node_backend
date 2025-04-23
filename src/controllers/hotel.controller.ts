import { NextFunction, Request, Response } from "express";
import { createHotelService, getHotelByIdService } from "../services/hotel.service";

export async function createHotelHandler(req:Request, res:Response, next:NextFunction) {
    // call the service layer
    const hotelResponse = await createHotelService(req.body);

    // send the response
    res.status(201).json({
        message:"Hotel created successfully",
        data:hotelResponse,
        success:true,
    })
}

export async function getHotelByIdHandler(req:Request,res:Response,next:NextFunction) {
    // call the service layer
    const hotelResponse = await getHotelByIdService(Number(req.params.id));

    // send the response
    res.status(200).json({
        message:"Hotel found successfully",
        data:hotelResponse,
        success:true
    })
}

export async function getAllHotelsHandler(req:Request,res:Response,next:NextFunction) {
    
    res.status(501);
}

export async function deleteHotelHandler(req:Request,res:Response,next:NextFunction) {
    
    res.status(501);
}

export async function updateHotelHandler(req:Request,res:Response,next:NextFunction) {
    
    res.status(501);
}