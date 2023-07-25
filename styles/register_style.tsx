import styled from "styled-components";

export const Container = styled.div`
    width : 100%;
    height : 100%;
    margin : 0 auto;
    overflow: hidden;
`;

export const Wrapper = styled.div`
    width : 80%;
    margin : 0 auto;
    text-align: center;
    margin-top : 150px;

    button {
        width : 400px;
        height : 50px;
        background-color : #536;
        color : #fff;
        border-radius: 10px;
        margin-top : 20px;
        font-size : 16px;
    }
`;

export const Title = styled.p`
    font-size : 32px;
    font-weight: 800;
    margin-bottom : 50px;
`;

export const RegisterInput = styled.div`
    padding : 10px 20px;
    width : 800px;
    margin : 0 auto;

    input {
        width : 400px;
        height : 50px;
        border-radius : 10px;
        padding : 10px;
        font-size: 16px;
    }

`;
