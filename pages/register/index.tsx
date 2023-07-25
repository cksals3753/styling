import React from 'react';
import { Container, Wrapper, RegisterInput, Title } from '../../styles/register_style'

const Register = ({ setTap } : any) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>TODAY_STYLING</Title>
                    <form>
                        <RegisterInput>
                            <input name="id" id="id" placeholder='아이디' />
                        </RegisterInput>
                        <RegisterInput>
                            <input name="name" id="name" placeholder='이름' />
                        </RegisterInput>
                        <RegisterInput>
                            <input name="birth" id="birth" placeholder='생년월일 (8자리)' />
                        </RegisterInput>
                        <RegisterInput>
                            <input name="password" id="password" placeholder='비밀번호' />
                        </RegisterInput>
                        <RegisterInput>
                            <input name="password_check" id="password_check" placeholder='비밀번호 확인' />
                        </RegisterInput>
                        <button type="submit">가입하기</button>
                    </form>
                </Wrapper>
            </Container>
        </>
    )
}

export default Register;