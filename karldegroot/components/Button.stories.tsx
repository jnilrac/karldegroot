import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
 label:"Go to Blog",
 url: "/blog"
};

Primary.parameters = {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BqAqLVNB6U2Zr1rNT7Sq1A/SIte-Layout?node-id=106%3A473&t=903RDYqzDCAyy4mn-1",
    },
  };