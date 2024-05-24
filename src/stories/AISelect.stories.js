import React from 'react';

import { AISelect } from '../components/AISelect/AISelect';

export default {
    title: 'Components/AISelect',
    component: AISelect,
    tags: ['autodocs']
};

const Template = args => <AISelect {...args} />;

export const DefaultAISelect = Template.bind({});

export const LightBlue = Template.bind({});
LightBlue.args = {
    variant: 'light-blue',
    options: [
        {
            label: 'Car',
            value: 1,
        },
        {
            label: 'Bike',
            value: 2,
        },
    ],
    width: 150,
    defaultValue: {
        label: 'Bike',
        value: 2,
    },
    isSearchable: true
};

export const LightGray = Template.bind({});
LightGray.args = {
    variant: 'light-gray',
    options: [
        {
            label: 'Car',
            value: 1,
        },
        {
            label: 'Bike',
            value: 2,
        },
    ],
    width: 150,
    placeholder: "Select a vehicle"
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'light-gray',
    options: [
        {
            label: 'Car',
            value: 1,
        },
        {
            label: 'Bike',
            value: 2,
        },
    ],
    defaultValue: {
        label: 'Bike',
        value: 2,
    },
    width: 150,
    placeholder: "Select a vehicle",
    isDisable: true,
    hideDropDownIndicator: true
};