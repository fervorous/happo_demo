// This is file is only for the standalone "old happo" runner.
/* global happo */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

const requireTests = require.context('../components', true, /\.happo\.js$/);

let tests = [];
requireTests.keys().forEach((path) => {
  const [suite, name] = path.replace('./', '').replace(/\.happo\.js$/, '').split('/');
  Object.keys(requireTests(path)).forEach((key) => {
    tests.push({
      suite,
      name: key,
      case: requireTests(path)[key],
    });
  });
});

// Clean up the event handlers
happo.cleanOutElement = element => {
  unmountComponentAtNode(element)
};

tests.forEach(test => {
  happo.define(
    `${test.suite}-${test.name}`,
    () => {
      const div = document.createElement('div');
      div.style.padding = '8px';
      div.style.display = 'inline-block';
      document.body.appendChild(div);
      const TestCase = test.case;
      render(<TestCase />, div);
    },
    { viewports: ['desktop', 'mobile'] },
  );
});
