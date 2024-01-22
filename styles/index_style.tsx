import styled from "styled-components";

export const Container = styled.div`
    width : 100%;
    height : 100%;
    overflow: hidden;
    margin : 0 auto;
`;

export const Wrapper = styled.div`
    width : 90%;
    margin : 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Banner = styled.div`
    width : 100%;
    height : 400px;
    border : 1px solid red;
`;

export const Slider = styled.div<{ bgphoto: string }>`
    width : 100%;
    height : 400px;
    background-image : url(${props => props.bgphoto});
    background-size : cover;
    background-position : center center;
    background-repeat : no-repeat;
    position : relative;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const SliderIndex = styled.div`
    position : absolute;
    bottom : 0;
    right : 0;
    margin-bottom: 30px;
    margin-right: 10px;
`;

export const UI = styled.ul`
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const Li = styled.li<{ match: string }>`
    width : 15px;
    height : 15px;
    border-radius : 100%;
    background-color : ${props => props.match};
    margin-right : 10px;
    cursor : pointer;
`;

export const SlideBtn = styled.div``;

export const PreBtn = styled.button`
    left : 0;
    position : absolute;
    margin : 0 15px;
`

export const NextBtn = styled.button`
    right : 0;
    position : absolute;
    margin : 0 15px;
`