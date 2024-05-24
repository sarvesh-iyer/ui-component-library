import React from 'react';

import { AITab } from '../components/AITabs/AITab';

export default {
    title: 'Components/AITab',
    component: AITab,
    tags: ['autodocs'],
};

const Template = args => <AITab {...args} />;

export const contained = Template.bind({});
contained.args = {
    variant: 'contained'
};

export const WithBackground = Template.bind({});
WithBackground.args = {
    variant: 'with-bg'
};

export const WithoutBackground = Template.bind({});
WithoutBackground.args = {
    variant: 'without-bg'
};