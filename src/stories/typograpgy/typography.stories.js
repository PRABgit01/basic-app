// Typography.stories.js
import React from 'react';
import Typography, { fontColor } from './typography'; // Import fontColor from ./typography

export default {
  title: 'Headings',
  component: Typography,
};

export const Headings = () => <Typography />;
export const TextColors = () => fontColor();
