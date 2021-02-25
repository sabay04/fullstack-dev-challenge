import express, { Request, Response , NextFunction} from 'express';

const router = express.Router();

//move these helper functions
const parseRequest = (req: any) => {
    let { initialSavings, monthlyDeposit} = req;

    return { 
      init: parseNumber(initialSavings), 
      monthly: parseNumber(monthlyDeposit) 
    };
  }

const parseNumber = (n:any) => !isNaN(Number(n)) ? Number(n) : 0;

export const createInvestmentSavings = (req: Request, res: Response, next: NextFunction ) => {
    const { init, monthly } = parseRequest(req.body)

   //random calculation
    let investmentSavings = 0 
    investmentSavings = (init + (monthly * 12)) * 50 
   
  
   res.json({investmentTotal: investmentSavings})
}

export default router;
