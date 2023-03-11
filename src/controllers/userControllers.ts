import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";

// @Desc 
export const register = asyncHandler(async (req : Request , resp : Response) => {
    const { name , email , password } = req.body;

    const user = new User({
        name,
        email,
        password
    });

    await user.save();

    resp.status(201).json({
        name : user.name,
        email:user.email
    });

});


export const login = asyncHandler(() => {

});