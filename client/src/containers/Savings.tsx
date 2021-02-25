import React, { useState, useEffect } from 'react'
import { Container, Heading, VStack } from '@chakra-ui/react'
import Input from '../components/Input'
import Slider from '../components/Slider'
import LineChart from '../components/LineChart'
import DefaultLayout from '../components/layouts/Default'

// Note: This is just for example purposes
// should be replaced with real data from the server
const tempData = {
    xAxis: [0, 10, 20, 30, 40, 50],
    yAxis: [100, 150, 180, 210, 240, 350],
}

const Savings = () => { 
    const [totalInvestment, setTotalInvestment] = useState(0)
    const [initialSavings, setInitialSavings] = useState('0')
    const [monthlyDeposit, setMonthlyDeposit] = useState('0')
    

    useEffect(() => {
        fetch("/investments/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                initialSavings: initialSavings,
                monthlyDeposit: monthlyDeposit,
            })
        }).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setTotalInvestment(jsonRes.investmentTotal))
    }, [initialSavings, monthlyDeposit])


    const handleInitialSavings = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInitialSavings(e.target.value)
            
    }

    const handleMonthlyDeposit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMonthlyDeposit(e.target.value)
    }
// bring the interate into it
// reflect change on axis
    return(
    <DefaultLayout>
        <Container pt={6}>
            <VStack spacing={4}>
                <Heading as="h1">Interest Rate Calculator</Heading>
                <div> Total investment: ${totalInvestment}</div> 
                <Input label="Initial Savings amount" name="Initial Savings" placeholder="5000" onChange={handleInitialSavings} />
                <Input label="Monthly Deposit" name="Monthly Deposit" placeholder="100"  onChange={handleMonthlyDeposit}/>
                <Slider
                    label="Interest Rate"
                    name="Interest Rate"
                    defaultValue={2}
                    min={0}
                    max={15}
                />
                <LineChart
                    title="Savings Over time"
                    xAxisData={tempData.xAxis}
                    yAxisData={tempData.yAxis}
                    xLabel="Years"
                    yLabel="Amount"
                />
            </VStack>
        </Container>
    </DefaultLayout>
)}

export default Savings
