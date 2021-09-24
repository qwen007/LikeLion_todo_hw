//src/component/TodoTemplate.js

import React from 'react';
//리액트 불러오기
import './TodoTemplate.scss';
//scss 파일 불러오기 

const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;