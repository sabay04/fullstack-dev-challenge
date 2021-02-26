

export const parseRequest = (req: any) => {
    let { initialSavings, monthlyDeposit, interest} = req;

    return { 
      initial: parseNumber(initialSavings), 
      monthly: parseNumber(monthlyDeposit),
      interest: parseNumber(interest)
    };
  }

 const parseNumber = (n:any) => !isNaN(Number(n)) ? Number(n) : 0;