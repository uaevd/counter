import styled from '@emotion/styled';

const Container = styled.button`
    border: 0;
    color: #fff;
    background-color: #ff5722;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 1;
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

interface Props {
    readonly label: string;
    readonly onClick?: () => void;
}

export const Button = ({ label, onClick }: Props) => (
    <Container onClick={onClick}>{label}</Container>
);
