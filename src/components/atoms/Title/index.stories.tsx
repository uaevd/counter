import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from '.';

export default {
    title: 'Atoms/Title',
    component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = () => <Title />;

export const Default = Template.bind({});
