import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
    background: red;
    font-size: ${props => (props.huge ? '100px' : '50px')};
    span{
        color:yellow
    }
`;

class Page extends Component {
    render() {
        return (
            <div>
                <Meta/>
                <Header/>
                <MyButton huge><span>Click Me</span></MyButton>
                {this.props.children}
            </div>
        )
    }
}
export default Page;