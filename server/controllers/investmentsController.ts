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
    let total = 0 
    let totalByDecade = []


    for( let years = 0; years <= 50 ; years +=10){
      
      const compoundOnInitial =  initial * (Math.pow((1 + (interestRate)), (years)))
      total =  compoundOnInitial + ((monthly * months ) * ((((Math.pow((1 + (interestRate)), (years))) - 1)/(interestRate))* (1 + interestRate)))

      totalByDecade.push(Math.round(total))
      
    }

    const moneyYouInvested = initial + ((monthly * months) * years) 
    const amountFromCompound = total - moneyYouInvested
  
   res.json({
     investmentTotal: totalByDecade[totalByDecade.length - 1], 
     totalYouInvested: Math.round(moneyYouInvested), 
     totalFromCompound: Math.round(amountFromCompound), 
     totalByDecade: totalByDecade
    })
}

export default router;
