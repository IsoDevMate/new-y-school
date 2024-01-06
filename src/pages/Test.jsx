import React from 'react';
import styled from 'styled-components';
import { MdOutlineArrowDropDown } from "react-icons/md";

const CustomSelect = styled.select`
//   appearance: none;
  background-color: transparent;
  border: none;
  padding: 8px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  position: relative;
  margin-top:1.2rem;

  &::after {
    content: '▼'; /* Unicode character for a downward-pointing triangle */
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }

  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  /* Optional: add custom styles for the options if needed */
`;

const OptGroup = styled.optgroup`
  /* Optional: add custom styles for the optgroup if needed */
`;

const MyStyledSelector = () => {
  return (
    <CustomSelect>
      <Option value="">Categories  </Option>
        <Option value={10}> Childhood education</Option>
        <Option value={20}>Primary</Option>
        <Option value={30}>Secondary</Option>
        <Option value={40}>Tertiary schools</Option>
        <Option value={50}>University</Option>
        <Option value={60}>Professional</Option>
    </CustomSelect>
  );
};

export default MyStyledSelector;
