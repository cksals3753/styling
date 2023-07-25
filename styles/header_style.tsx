import styled from "styled-components";

export const Headers = styled.div`
    width : 100%;
    height : 50px;
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    background-color: ivory;
    border : 1px solid ivory;
    position: fixed;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    list-style: none;
    margin-bottom: 50px;
    top: 0;
    left: 0;
    right: 0;
`;

export const Inner = styled.div`
    width : 80%;
    margin : 0 auto;
    padding : 10px 0;
    text-align: center;

    a {
        margin-right : 20px;
        padding : 5px;
    }
`