import React, {useState} from 'react';
import styled, { css } from "styled-components"
import {TodoItemContainer} from './TodoItemContainer'
import {TodoItemCheckbox} from './TodoItemCheckbox';
import { useDeleteTodoItem } from '../../data/hooks/useData';

const checkedCss = css`
  color: #B5B5BA;
  text-decoration: line-through;
`

const Title = styled.span(props => {
    return `
    width: 80%;
    font-size: 15px;
    overflow-wrap: break-word;
    ${props.checked ? checkedCss : ''};
  `;
})

const Delete = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-image: url(assets/images/png/delete.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 13px;
  cursor: pointer;
`;

export const TodoItem = ({ title, checked, id }) => {
    const { mutate } = useDeleteTodoItem();
    const onClickDeleteHandler = () => {
        mutate({id});
    }
  return (
      <TodoItemContainer>
          <TodoItemCheckbox checked={checked} disabled={false} id={id} />
      <Title checked={checked}>
        {title}
          </Title>
          <Delete onClick={onClickDeleteHandler} />
    </TodoItemContainer>
  )
}
