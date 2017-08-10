// import { configure } from '@storybook/react';

// function loadStories() {
//   require('../stories/index.js');
//   // You can require as many stories as you need.
// }

// configure(loadStories, module);



// import { configure, setAddon } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';

// storiesOf('Component', module)
//   .add('simple info',
//     withInfo('doc string about my component')(() =>
//       <Component>Click the "?" mark at top-right to view the info.</Component>
//     )
//   )





import { configure, setAddon } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}



configure(loadStories, module);