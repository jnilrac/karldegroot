import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavBar } from './NavBar';

export default {
  title: 'NavBar',
  component: NavBar,

} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  navLinks: [
    {title:"Home", url:"/", key:"home" },
    {title:"Music", url:"/music", key: "music" },
    {title: "Blog", url:"/blog", key: "blog"}
  ],
};

Primary.parameters = {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BqAqLVNB6U2Zr1rNT7Sq1A/SIte-Layout?node-id=106%3A567&t=903RDYqzDCAyy4mn-1",
    },
  };