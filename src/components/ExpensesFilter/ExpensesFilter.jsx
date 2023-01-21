 
import styled from "styled-components"

export const ExpensesFilter=( {value, onChange}) => {
return (
    <div className="expenses-filter">
        <StyledFilterDiv>
            <StyledLabel htmlFor="select" >Filter by year</StyledLabel>
            <StyledSelect name="select" id="" onChange={onChange} value={value}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2018">2019</option>
            </StyledSelect>
        </StyledFilterDiv>
    </div>
)
}

const StyledLabel = styled.label`
font-size: 1.2rem;
margin-right: 20px;
color: white;
`

const StyledFilterDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
margin: 10px 20px 20px 20px;
`
const StyledSelect = styled.select`
padding: 10px;
border-radius: 8px ;
border: none;
`