import express, { Request, Response , NextFunction} from 'express';

const router = express.Router();

//move these helper functions
const parseRequest = (req: any) => {
    let { initialSavings, monthlyDeposit, interest} = req;

    return { 
      initial: parseNumber(initialSavings), 
      monthly: parseNumber(monthlyDeposit),
      interest: parseNumber(interest)
    };
  }

const parseNumber = (n:any) => !isNaN(Number(n)) ? Number(n) : 0;

export const createInvestmentSavings = (req: Request, res: Response, next: NextFunction ) => {
    const { initial, monthly, interest } = parseRequest(req.body)
    const years = 50 
    const interestRate = interest/100.0
    const months = 12 
    //initial = inital amount
    // monthly = monthly deposit
    // interest = interest rate 
    // years = how long to calculate for 

    let total = 0 
    const compoundOnInitial =  initial * (Math.pow((1 + (interestRate)), (years)))
    total =  compoundOnInitial + ((monthly * months ) * ((((Math.pow((1 + (interestRate)), (years))) - 1)/(interestRate))* (1 + interestRate)))
  
   res.json({investmentTotal: Math.round(total)})
}

export default router;
