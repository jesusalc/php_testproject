/**
 * Super simple client side application that mounts the contact form.
 *
 * Server side rendering just renders the HTML. Mounting is needed
 * in order to listen to DOM events such as the form submission.
 */
import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PostMailForm from './PostMailFormular/PostMailForm'; // Our custom react component

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<PostMailForm />, document.getElementById('app'));
