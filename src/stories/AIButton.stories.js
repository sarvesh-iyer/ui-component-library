import { AIButton } from '../components/AIButton/AIButton';

export default {
    title: 'Components/AIButton',
    component: AIButton,
    tags: ['autodocs'],

};

const Template = (args) => (
    <AIButton {...args}>
        Click me!
    </AIButton>
);

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    isDisable: false,
    variant: 'contained',
    size: 'medium',
    fontWeight: 'normal',
    // startIcon: <img src='https://yt3.ggpht.com/ytc/AIf8zZSBXGepGG51kNMKobtKULfhGhJBp7LrJYYTBfkA=s48-c-k-c0x00ffffff-no-rj' />,
    // endIcon: <img src='https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s48-c-k-c0x00ffffff-no-rj' />
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    isDisable: false,
    variant: 'contained',
    size: 'medium',
    fontWeight: 'normal',
    // startIcon: <img src='https://yt3.ggpht.com/ytc/AIf8zZSBXGepGG51kNMKobtKULfhGhJBp7LrJYYTBfkA=s48-c-k-c0x00ffffff-no-rj' />,
    // endIcon: <img src='https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s48-c-k-c0x00ffffff-no-rj' />
};

export const Disabled = Template.bind({});
Disabled.args = {
    primary: true,
    isDisable: true,
    variant: 'contained',
    size: 'medium',
    fontWeight: 'normal',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
    primary: true,
    isDisable: false,
    variant: 'contained',
    size: 'medium',
    fontWeight: 'normal',
    startIcon: <img src='https://yt3.ggpht.com/ytc/AIf8zZSBXGepGG51kNMKobtKULfhGhJBp7LrJYYTBfkA=s48-c-k-c0x00ffffff-no-rj' />,
    endIcon: <img src='https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s48-c-k-c0x00ffffff-no-rj' />
};

export const SpecialLightBlue = Template.bind({});
SpecialLightBlue.args = {
    primary: true,
    isDisable: false,
    variant: 'contained',
    size: 'medium',
    specialVariant: 'light-blue'
};

export const SpecialLightGray = Template.bind({});
SpecialLightGray.args = {
    primary: true,
    isDisable: false,
    variant: 'contained',
    size: 'medium',
    specialVariant: 'light-gray'
};