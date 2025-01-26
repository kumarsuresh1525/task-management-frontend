import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

export const Column = styled.div`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
  min-height: 500px;
`;

export const ColumnTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
  color: #172b4d;
`;

export const TaskCard = styled.div`
  background: white;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`;

export const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #0052cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0047b3;
  }
`;

export const DeleteButton = styled.button`
  padding: 4px 8px;
  background-color: #ff5630;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #ff4d1f;
  }
`; 