import { Request, Response, NextFunction } from 'express';
import { InvalidIdException } from '../error/ExceptionHandling';

const idNumberControl = (req: Request, res: Response, next: NextFunction) => {

  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    console.log("i am here");

    throw InvalidIdException().status + ' ' + InvalidIdException().message;
  }
  next();

};



export default idNumberControl;
