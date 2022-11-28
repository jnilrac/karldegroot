import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import blogPic from "./assets/SampleBlogImage.png"

import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,

} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
 linkUrl: "/blog-post",
 imgUrl:"/assets/SampleBlogImage.png",
 title: "Test Blog",
 text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis nisl non ligula tempor porttitor. Aliquam erat volutpat. Etiam faucibus, turpis sed convallis vehicula, justo tellus ornare dui, a posuere ex metus eget tortor."
};

Primary.parameters = {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BqAqLVNB6U2Zr1rNT7Sq1A/SIte-Layout?node-id=33%3A924&t=903RDYqzDCAyy4mn-1",
    },
  };