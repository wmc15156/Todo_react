import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete} from "react-icons/md";
import {useTodoDispatch} from "./TodoContext";

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props => props.done && css`
    border: 1px solid #38d9a9;
    color: #38d9a9;      
  `}
`;

const Text = styled.div`
  flex: 1px;
  font-size: 21px;
  color: #495057;
  ${props => props.done && css`
    color: #ced4da;
  `}
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;



function TodoItem({ id, done, text}) {
    const dispatch = useTodoDispatch();
    const onToggle = (id) => {
        dispatch({
            type: "TOGGLE",
            id
        });
    }

    const onRemove = (id) => {
        dispatch({
            type: "REMOVE",
            id
        })
    }

    return (
        <TodoItemBlock>
            <CheckCircle doen={done} onClick={()=>{onToggle(id)}}>{done && <MdDone /> }</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={()=>{onRemove(id)}}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;