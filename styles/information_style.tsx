import styled from "styled-components";

export const Container = styled.div`
    width : 100%;
    height : 100vh;
    margin : 0 auto;
`

export const Wrapper = styled.div`
    width : 90%;
    height : 100%;
    margin : 0 auto;
`;

export const MainContainer = styled.div`
    margin-top : 70px;
    width : 100%;
    
    .title {
        font-size : 32px;
        font-weight : 800;
        padding : 20px;
    }

    .content {
        margin-top : 40px;
        padding : 20px;
        font-size : 22px;
        p {
            margin-bottom : 12px;
        }
    }
`