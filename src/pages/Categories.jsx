/* eslint-disable no-unused-vars */
import { Button } from '@mui/material';
import styled from 'styled-components';
import media from '../breakpoints';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
import Form from 'react-bootstrap/Form';
import MyStyledSelector from './Test';

const CategoriesDiv = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  justify-content: flex-start; 
  color: black !important;
  width: 100%;
  padding-top:2rem;
  padding-bottom:2rem;
  
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

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [activeButton, setActiveButton] = React.useState('All');

  const handleButtonClick = (category) => {
    setActiveButton(category);
  };

  return (
    <CategoriesDiv>
       <div>

        {/* <MyStyledSelector/> */}
        <FormControl  variant="standard" sx={{ m: 1, minWidth: 120, borderBottom: 'none' }}>
      <InputLabel id="demo-simple-select-standard-label" sx={{ borderBottom: 'none' }}>
        Categories
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={age}
        onChange={handleChange}
        label="Categories"
        sx={{ borderBottom: 'none' }}
      >
        <MenuItem value=""></MenuItem>
        <MenuItem value={10}>Early Childhood education</MenuItem>
        <MenuItem value={20}>Primary</MenuItem>
        <MenuItem value={30}>Secondary</MenuItem>
        <MenuItem value={40}>Tertiary/Vocational schools</MenuItem>
        <MenuItem value={50}>University</MenuItem>
        <MenuItem value={60}>Professional certificates.</MenuItem>
      </Select>
    </FormControl>

   
      
      
    
    </div>
      <button className='btn'></button>
      <button className={activeButton === 'All' ? 'btn active' : 'btn'} onClick={() => handleButtonClick('All')}>
        All</button>
      <button className={activeButton === 'Business' ? 'btn active' : 'btn'} onClick={() => handleButtonClick('Business')}>
        Business</button>
      <div style={{marginLeft:'1rem'}}></div>
      <button className={activeButton === 'IT & Development' ? 'btn active' : 'btn'} onClick={() => handleButtonClick('IT & Development')}>
        IT & Development</button>
      <div style={{marginLeft:'1rem'}}></div>

      <button className={activeButton === 'Marketing' ? 'btn active' : 'btn'} onClick={() => handleButtonClick('Marketing')}>

        Marketing</button>
      <div style={{marginLeft:'1rem'}}></div>

      <button className={activeButton === 'Design ' ? 'btn active' : 'btn'} onClick={() => handleButtonClick('Design ')}>
        Design</button>
      <div style={{marginLeft:'1rem'}}></div>

      <button className={activeButton === ' Finance and Accounting' ? 'btn active' : 'btn'} onClick={() => handleButtonClick(' Finance and Accounting')}>

        Finance and Accounting</button>
      <div style={{marginLeft:'5rem'}}></div>

      <button className={activeButton === 'Office productivity' ? 'btn active' : 'btn'} onClick={() => handleButtonClick('Office productivity')}>
        Office productivity</button>
      <div style={{marginLeft:'5rem'}}></div>

    
      <div style={{marginLeft:'1rem'}}></div>

    </CategoriesDiv>
  );
};

export default Categories;
