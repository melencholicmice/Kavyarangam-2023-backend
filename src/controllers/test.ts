import { Request, Response } from 'express';

const testController = (req: Request, res: Response) =>
    res.status(200).json({
        message: 'Test passed',
    });

export default testController;
