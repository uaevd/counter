import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Count } from '.';

export default {
    title: 'Atoms/Count',
    component: Count,
} as ComponentMeta<typeof Count>;

const Template: ComponentStory<typeof Count> = () => <Count />;

export const Default = Template.bind({});
