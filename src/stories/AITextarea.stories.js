import React from 'react';

import { AITextarea } from '../components/AITextarea/AITextarea';

export default {
    title: 'Components/AITextarea',
    component: AITextarea,
    tags: ['autodocs'],
};

const Template = args => <AITextarea {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Enter description',
    isDisable: false,
    charCountPosition: 'bottom'
};

export const Disabled = Template.bind({});
Disabled.args= {
    isDisable: true,
    showCharCount: true,
    value: 'Sarvesh Iyer'
}
 
export const Error = Template.bind({});
Error.args= {
    showCharCount: false,
    placeholder: 'Enter description',
    isError: true,
} 

export const Resizeable = Template.bind({});
Resizeable.args= {
    showCharCount: false,
    placeholder: 'Enter description',
    isError: false,
    resize: true
} 