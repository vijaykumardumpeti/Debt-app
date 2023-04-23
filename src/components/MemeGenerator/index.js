// Write your code here
import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import {MdDeleteOutline} from 'react-icons/md'

import {
  MainContainer,
  Heading,
  InputContainer,
  InputElement,
  Select,
  MemeContainer,
  Button,
  FormContainer,
  DebtItemContainer,
  DebtHeader,
  Para,
  DebtItem,
} from './styledComponents'

const list = []

const fontSizesOptionsList = [
  {
    optionId: '1',
    displayText: '1',
  },
  {
    optionId: '2',
    displayText: '2',
  },
  {
    optionId: '3',
    displayText: '3',
  },
  {
    optionId: '4',
    displayText: '4',
  },
  {
    optionId: '5',
    displayText: '5',
  },
]
console.log(fontSizesOptionsList)

// Write your code here

export default class MemeGenerator extends Component {
  state = {
    amount: '',
    startDate: '',
    endDate: '',
    interestRate: '',
    DebtsList: list,
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onChangeEndDate = event => {
    this.setState({
      endDate: event.target.value,
    })
  }

  onChangeStartDate = event => {
    this.setState({
      startDate: event.target.value,
    })
  }

  onChangeInterest = event => {
    this.setState({
      interestRate: event.target.value,
    })
  }

  onSubmitFunc = event => {
    event.preventDefault()
    const {amount, startDate, endDate, interestRate} = this.state
    console.log(typeof startDate)

    function getDateDiffInYearsMonthsDays(firstDate, lastDate) {
      const diffInMilliseconds = Math.abs(lastDate - firstDate)
      const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))
      const diffInYears = Math.floor(diffInDays / 365)
      const diffInMonths = Math.floor((diffInDays % 365) / 30)
      const diffInRemainingDays =
        diffInDays - diffInYears * 365 - diffInMonths * 30

      return {
        years: diffInYears,
        months: diffInMonths,
        days: diffInRemainingDays,
      }
    }

    // Example usage:

    const firstDate = new Date(startDate)
    const lastDate = new Date(endDate)
    const diff = getDateDiffInYearsMonthsDays(firstDate, lastDate)
    console.log(diff) // { years: 1, months: 3, days: 22 }

    const {years, months, days} = diff
    console.log(days)

    const T = parseInt(years) * 12 + parseInt(months)

    const R = parseInt(interestRate)

    const P = parseInt(amount)

    const interest = (P * T * R) / 100

    const totalDebt = interest + parseInt(amount)

    const durationInYearsMonthsDays = `${T} mnths ${days} days`

    const item = {
      id: uuidv4(),
      startDate,
      endDate,
      amount,
      interest,
      duration: durationInYearsMonthsDays,
      totalDebt,
    }

    this.setState(prevState => ({
      DebtsList: [...prevState.DebtsList, item],
    }))
  }

  deleteFunc = id => {
    const {DebtsList} = this.state
    const filteredList = DebtsList.filter(object => object.id !== id)
    this.setState({
      DebtsList: filteredList,
    })
  }

  render() {
    const {amount, startDate, endDate, interestRate, DebtsList} = this.state

    console.log(amount)
    console.log(startDate)
    console.log(endDate)
    console.log(interestRate)

    return (
      <MainContainer className="main-container">
        <div className="container-1">
          <Heading>Create Your Debt</Heading>
          <FormContainer
            onSubmit={this.onSubmitFunc}
            className="form-container"
          >
            <InputContainer className="input-container">
              <label htmlFor="text">Amount</label>
              <InputElement
                value={amount}
                onChange={this.onChangeAmount}
                placeholder="Enter Your Amount"
                id="text"
                type="text"
              />
            </InputContainer>
            <InputContainer className="input-container">
              <label htmlFor="top-text">Start Date</label>
              <InputElement
                value={startDate}
                onChange={this.onChangeStartDate}
                placeholder="Enter your Start Date"
                id="top-text"
                type="date"
              />
            </InputContainer>
            <InputContainer className="input-container">
              <label htmlFor="button-text">End Date</label>
              <InputElement
                value={endDate}
                onChange={this.onChangeEndDate}
                placeholder="Enter your current/end Date"
                id="button-text"
                type="date"
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="font-size">Interest Rate</label>
              <Select
                value={interestRate}
                onChange={this.onChangeInterest}
                id="font-size"
              >
                {fontSizesOptionsList.map(object => (
                  <option value={object.optionId} key={object.optionId}>
                    {object.displayText}
                  </option>
                ))}
              </Select>
            </InputContainer>
            <Button type="submit">Generate</Button>
          </FormContainer>
        </div>
        <MemeContainer className="container-2">
          <p>Track Your Debts</p>
          <DebtItemContainer>
            <DebtHeader>
              <Para underline="under-line" color="red">
                Start Date
              </Para>
              <Para underline="under-line" color="red">
                End Date
              </Para>
              <Para
                margin="true"
                width="60px"
                underline="under-line"
                color="red"
              >
                Duration
              </Para>
              <Para underline="under-line" color="red">
                Amount
              </Para>
              <Para underline="under-line" color="red">
                Interest
              </Para>
              <Para underline="under-line" color="red">
                Total Debt
              </Para>
            </DebtHeader>
            {DebtsList.map(object => (
              <DebtItem>
                <Para>{object.startDate}</Para>
                <Para>{object.endDate}</Para>
                <Para width="60px">{object.duration}</Para>
                <Para>{object.amount}/-</Para>
                <Para>{object.interest}/-</Para>
                <Para>{object.totalDebt}/-</Para>
                <MdDeleteOutline
                  onClick={() => {
                    this.deleteFunc(object.id)
                  }}
                />
              </DebtItem>
            ))}
          </DebtItemContainer>
        </MemeContainer>
      </MainContainer>
    )
  }
}
