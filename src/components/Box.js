import styled from 'styled-components';

const Box = styled.div`
    background: #131516;
    color: #C8C3BC;
    border-radius: 5px;
    padding: 16px;

    .boxLink {
        font-size: 14px;
        color: #266F9E;
        text-decoration: none;
        font-weight: 800;
    }

    img {
        border-radius: 8px;
    }

    .title {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .subTitle {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .smallTitle {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 700;
        color: #f4f4f4;
        margin-bottom: 20px;
    }

    hr {
        margin-top: 12px;
        margin-bottom: 8px;
        border-color: transparent;
        border-bottom-color: #ECF2FA;
    }

    input {
        width: 100%;
        background: #333;
        color: #f4f4f4;
        border: 0;
        padding: 14px 16px;
        margin-bottom: 14px;
        border-radius: 1000px;

        ::placeholder {
            color: #f4f4f4;
            opacity: 1;
        }
    }

    button {
        border: 0;
        padding: 8px 12px;
        color: #f4f4f4;
        border-radius: 1000px;
        background: #6F92BB;
    }
`

export default Box