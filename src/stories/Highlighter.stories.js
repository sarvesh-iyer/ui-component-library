import React from 'react';

import { Highlighter } from '../components/Highlighter/Highlighter';

export default {
    title: 'Components/Highlighter',
    component: Highlighter,
    tags: ['autodocs']
};

const Template = args => <Highlighter {...args} />;

export const Default = Template.bind({});
Default.args = {
    
};