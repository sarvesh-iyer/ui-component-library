import React from 'react';

import { AISearchBar } from '../components/AISearchBar/AISearchBar';

export default {
    title: 'Components/AISearchBar',
    component: AISearchBar,
    tags: ['autodocs']
};

const Template = args => <AISearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    dropDownPlaceholderText: 'car modal'
};