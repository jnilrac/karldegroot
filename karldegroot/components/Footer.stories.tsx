import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'Footer',
  component: Footer,

} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
 
};

Primary.parameters = {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BqAqLVNB6U2Zr1rNT7Sq1A/SIte-Layout?node-id=106%3A476&t=903RDYqzDCAyy4mn-1",
    },
  };