/* eslint-disable no-unused-vars */
import { Button } from '@mui/material';
import styled from 'styled-components';
import media from '../breakpoints';

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
    
  }
`;


const CategoryButton = styled(Button)`
  margin: 10px auto;
  color: black !important;
  width: 100%;
  margin-left: 1rem;
  padding: 8px 16px;
  background-color:  white !important;
  disableRipple: true;
`;

const Categories = () => {
  return (
    <CategoriesDiv>
      <button className='btn'>Categories</button>
      <button className='btn'>Business</button>
      <div style={{marginLeft:'1rem'}}></div>
      <button className='btn'>IT & Development</button>
      <div style={{marginLeft:'1rem'}}></div>

      <button className='btn'>Marketing</button>
      <div style={{marginLeft:'1rem'}}></div>

      <button className='btn'>Design</button>
      <div style={{marginLeft:'1rem'}}></div>

      <button className='btn'>Finance and Accounting</button>
      <div style={{marginLeft:'5rem'}}></div>

      <button className='btn'>Office productivity</button>
      <div style={{marginLeft:'5rem'}}></div>

      <button className='btn'>Office productivity</button>
      <div style={{marginLeft:'1rem'}}></div>

    </CategoriesDiv>
  );
};

export default Categories;
