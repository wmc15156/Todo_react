import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import {TodoProvider} from "./components/TodoContext";

const GlobalStyled = createGlobalStyle`
  body {
    background: #e9ecef;
  }
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
      <>
        <TodoProvider>
            <GlobalStyled/>
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
      </>
  );
}

export default App;
