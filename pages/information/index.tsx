import React from 'react';
import { Container, Wrapper, MainContainer } from '../../styles/information_style';

const Information = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <MainContainer>
                        <div className="title">
                            <p>
                                이용안내
                            </p>
                        </div>
                        <div className="content">
                            <p>1. One Day로 즐기는 일상코디 </p>
                            <p>2. 옷이 마음에 들면 구매확정! 아니면 회수요청! </p>
                            <p>3. 18시까지만 주문한다면 새벽배송 OK, 다음날 아침에 받을수 있어요. </p>
                            <p>4. 못 받으면 100%환불 </p>
                            <p>5. </p>
                            <p>6. </p>
                        </div>
                    </MainContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default Information;