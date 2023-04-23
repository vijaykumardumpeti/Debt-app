// Style your elements here
import Styled from 'styled-components'

export const MainContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

padding: 40px;



`

export const Heading = Styled.h1`
color: #35469c;

`

export const InputContainer = Styled.div`

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-bottom: 10px;
`
export const InputElement = Styled.input`

outline:none;
color: black;
width: 280px;
height: 28px;
margin-top: 10px;
border-radius: 10px
border: 1px solid black
`

export const Select = Styled.select`
outline:none;
color: black;
width: 280px;
height: 28px;
margin-top: 10px;
border-radius: 10px
border: 1px solid black
`

export const MemeContainer = Styled.div`


height: 300px;
width: 250px;
margin-left: -15px;
margin-top: 50px;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

padding: 10px;



`

export const Headings = Styled.p`

margin-bottom: 40px;
font-size: ${props => props.fontSize};//
color: white;

`

export const Button = Styled.button`
background-color: #0b69ff;
color: white;
padding: 10px;
border-radius: 8px;
border: 0px none white;

width: 280px;

text-align: center;



`

export const FormContainer = Styled.form`

box-shadow: 0px 5px 20px 0px;

padding: 10px;
border-radius: 10px;

width: 310px;
`

export const DebtItemContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    border: 0.5px solid black;
    

    padding: 10px;
    border-radius: 10px;

    width: 340px;

`

export const DebtHeader = Styled.div`

    border: 1px solid black;


    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0px 5px 105px 0px;

    padding: 10px;
    border-radius: 10px;
    width: 320px;
`
export const Para = Styled.p`

font-size: 8px;
width: ${props => props.width};
font-weight: 500;


line-height: 1px;
color: ${props => props.color};
margin-left: ${props => (props.margin ? '20px' : '0px')};

margin-left: ${props => props.margin};

font-family: 'roboto';

`
export const DebtItem = Styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    margin-left: 5px;
    
    margin-top: 10px;
    width: 320px;

    border: 0.5px dashed black;
    border-radius: 4px;
    box-shadow: 2px 2px 90px 0px;

    background-color: lightblue;
`
