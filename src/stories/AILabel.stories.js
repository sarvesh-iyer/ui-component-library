import React from 'react';

import { AILabel } from '../components/AILabel/AILabel';

export default {
    title: 'Components/AILabel',
    component: AILabel,
    tags: ['autodocs']
};

const Template = args => (
    <AILabel {...args} >Label</AILabel>
);

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary'
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
    variant: 'warning'
};

export const Error = Template.bind({});
Error.args = {
    variant: 'error'
};

export const Small = Template.bind({});
Small.args = {
    variant: 'success',
    size: 'small'
};

export const Large = Template.bind({});
Large.args = {
    variant: 'warning',
    size: 'large'
};