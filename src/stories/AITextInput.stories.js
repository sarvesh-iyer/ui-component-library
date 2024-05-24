import React from 'react';

import { AITextInput } from '../components/AIInput/AITextInput';

export default {
    title: 'Components/AITextInput',
    component: AITextInput,
    tags: ['autodocs'],
};

const Template = args => <AITextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'text',
    placeholder: 'Enter something',
    isDisable: false,
    charCountPosition: 'bottom'
};

export const Disabled = Template.bind({});
Disabled.args= {
    type: 'text',
    isDisable: true,
    showCharCount: true,
    value: 'Sarvesh Iyer'
}
 
export const Error = Template.bind({});
Error.args= {
    type: 'email',
    showCharCount: false,
    placeholder: 'Enter email',
    isError: true
} 