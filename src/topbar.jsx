
import styled from "styled-components";


const navlinks = [
  'Business',
  'Technology',
  'Design',
  'Marketing',
  'Finance & Accounting', 
  'Office Productivity',
];

function TopBar(props) {
  return (
    <Div>
      {navlinks.map((link, index) => (
        <Btn key={index}>{link}</Btn>
      ))}
    </Div>
  );
}

export default TopBar;



const Div = styled.div`
  border: 1px solid #aba7a7;
 
  display: flex;
  min-height: 60px;
  flex-direction: column;
`;


const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #0C0E0C; /
  border: none; 
  color: white; 
  text-align: center;
  text-decoration: none; 
  font-size: 16px;
  transition: 0.3s; 
  cursor: pointer; 

  &:hover {
    background-color: #45a049;
  }
`;


