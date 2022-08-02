import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import App from './App';

export default {
  title: 'Components/App',
  component: App,
} as ComponentMeta<typeof App>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
