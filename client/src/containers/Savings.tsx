import React, { useState, useEffect } from 'react'
import { Container, Heading, VStack, Box } from '@chakra-ui/react'
import Input from '../components/Input'
import Slider from '../components/Slider'
import LineChart from '../components/LineChart'
import DefaultLayout from '../components/layouts/Default'
import SavingsDisplay from '../components/SavingsDisplay'


const decades = [0, 10, 20, 30, 40, 50]

const Savings = () => { 
    const [calculatedResults, setCalculatedResults] = useState({investmentTotal: 0, totalYouInvested: 0, totalFromCompound: 0, totalByDecade: [] })
    const [initialSavings, setInitialSavings] = useState('0')
    const [monthlyDeposit, setMonthlyDeposit] = useState('0')
    const [interest, setInterest] = useState(2)

    const  {investmentTotal , totalYouInvested , totalFromCompound , totalByDecade  }  = calculatedResults

    useEffect(() => {
        fetch("/investments/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                initialSavings: initialSavings,
                monthlyDeposit: monthlyDeposit,
                interest: interest,
            })
        }).then(res => {
            if(res.ok){
                
                return res.json()
            }
        }).then(jsonRes => {
            setCalculatedResults(jsonRes) 

        }
        )
    }, [initialSavings, monthlyDeposit, interest])


    const handleInitialSavings = (e: React.ChangeEvent<HTMLInputElement>) => {
            
        setInitialSavings(e.target.value.replace(/\D/g,''))
            
    }

    const handleMonthlyDeposit = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setMonthlyDeposit(e.target.value.replace(/\D/g,''))
    }

    const handleInterst = (e: number) => {
        
        setInterest(e)
    }

    return(
    <DefaultLayout>
        <Container pt={6}>
            <VStack spacing={4}>
                <Heading color="blue500" textShadow="1px 1px #ff0000" as="h1">Interest Rate Calculator</Heading>
                <SavingsDisplay emoji="0x1F4B0" title="Total Investment" totalInvestment={investmentTotal}></SavingsDisplay>
                <Box display='flex' >
                <SavingsDisplay emoji="0x1F525" title="What You Invested"  totalInvestment={totalYouInvested}></SavingsDisplay>
                <SavingsDisplay emoji="0x1F640" title="Earned from interest"  totalInvestment={totalFromCompound}></SavingsDisplay>
                </Box>
                <Box boxShadow="xl" borderRadius="lg" mb={4} p={8} backgroundColor="blue200" width='75%'>
                <Input mb={4} label="Initial Savings amount" name="Initial Savings" placeholder="5000" onChange={handleInitialSavings} />
                <Input mb={4} label="Monthly Deposit" name="Monthly Deposit" placeholder="100"  onChange={handleMonthlyDeposit}/>
                <Slider
                    label='Interest Rate'
                    name="Interest Rate"
                    defaultValue={2}
                    min={0}
                    max={15}
                    value={interest}
                    onChange={handleInterst}
                />
                </Box>
                <LineChart
                    title="Savings Over time"
                    xAxisData={decades}
                    yAxisData={totalByDecade}
                    xLabel="Years"
                    yLabel="Amount"
                />
            </VStack>
        </Container>
    </DefaultLayout>
)}

export default Savings
