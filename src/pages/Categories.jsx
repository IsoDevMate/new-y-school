/* eslint-disable no-unused-vars */
import { Button } from '@mui/material'
import styled from 'styled-components'

const CategoriesDiv = styled.div`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;

  @media (min-width: 600px) {
    flex-wrap: wrap;
    white-space: normal;
  }
`;

const CategoryButton = styled(Button)`
  margin: 10px;

  @media (max-width: 600px) {
    &:nth-child(n + 5) {
      display: none;
    }
  }

  &:first-child {
    background-color: #f0f0f0;
  }
`;

const Categories = () => {
  return (
   <CategoriesDiv>
     <CategoryButton>Categories</CategoryButton>
    <CategoryButton>Business</CategoryButton>
    <CategoryButton>IT & Developement</CategoryButton>
    <CategoryButton>Marketing</CategoryButton>
    <CategoryButton>Design</CategoryButton>
    <CategoryButton>Finance and Accounting</CategoryButton>
    <CategoryButton>Office productivity</CategoryButton>
   </CategoriesDiv>
  )
}

export default Categories
