import styled from '@emotion/styled';

const Label = styled.h1`
    margin-bottom: 32px;
`;

interface Props {
    readonly title: string;
}

export const Title = ({ title }: Props) => <Label>{title}</Label>;
