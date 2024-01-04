/* eslint-disable no-unused-vars */
import { Button } from '@mui/material';
import styled from 'styled-components';

const CategoriesDiv = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  justify-content: flex-start; 
  color: black !important;
  width: 100%;
  gap: 2rem;
  padding-left: 1rem;
  -ms-overflow-style: none;  
  scrollbar-width: none;  

  &::-webkit-scrollbar {
    display: none; 
  }

  @media (min-width: 600px) {
    /* Add any additional styling for larger screens if needed */
  }
`;


const CategoryButton = styled(Button)`
  margin: 10px 0; /* Increased margin to provide more space */
  color: black !important;
  width:'14rem'
  margin-left: 1rem;
  padding: 8px 16px;
`;

const Categories = () => {
  return (
    <CategoriesDiv>
      <CategoryButton>Categories</CategoryButton>
      <CategoryButton>Business</CategoryButton>
      <div style={{marginLeft:'1rem'}}></div>
      <CategoryButton>IT & Development</CategoryButton>
      <div style={{marginLeft:'1rem'}}></div>

      <CategoryButton>Marketing</CategoryButton>
      <div style={{marginLeft:'1rem'}}></div>

      <CategoryButton>Design</CategoryButton>
      <div style={{marginLeft:'1rem'}}></div>

      <CategoryButton>Finance and Accounting</CategoryButton>
      <div style={{marginLeft:'5rem'}}></div>

      <CategoryButton>Office productivity</CategoryButton>
      <div style={{marginLeft:'1rem'}}></div>

    </CategoriesDiv>
  );
};

export default Categories;
