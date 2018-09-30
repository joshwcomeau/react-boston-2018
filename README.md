# The Case for Whimsy

### React Boston 2018 talk by Josh Comeau

This repository contains the slides and related code for my React Boston 2018 talk.

Sadly, it's a bit disorganized. This README aims to help you navigate, to explore all the ideas I shared in my talk.

#### Previous Version

At React Europe earlier in 2018, I gave a condensed version of this talk. [Watch on Youtube](https://www.youtube.com/watch?v=Z2d9rw9RwyE)

#### Slides

- [Original](https://the-case-for-whimsy-boston.surge.sh)

This repo also holds the code for all the slides. It's super messy, but the presentation mostly lives in [src/presentation.js](https://github.com/joshwcomeau/react-boston-2018/blob/master/src/presentation.js).

You can also check out the components used for the live examples in [src/components](https://github.com/joshwcomeau/react-boston-2018/tree/master/src/components). Some highlights:

- [WibblyWobblyCircle](https://github.com/joshwcomeau/react-boston-2018/blob/master/src/components/WibblyWobblyCircle/WibblyWobblyCircle.js) - A floating, warbly circle.
- [TitleParticles](https://github.com/joshwcomeau/react-boston-2018/tree/master/src/components/TitleParticles) - A few slides in, I introduce the talk. The intro slide has these floating self-drawing particle things, described by the components in this directory.
- [FoldConcept](https://github.com/joshwcomeau/react-boston-2018/blob/master/src/components/FoldConcept/FoldConcept.js) - While the actual `<Foldable />` component is described below under **Whimsical Mail Client**, this is the code for the concept fold. Might be easier to follow, although you almost definitely want to use the `<Foldable />` code below for your own apps.

#### Internet Explorer Downloader

The talk features a globe-and-folder interactive animation, inspired by Internet Explorer.

For the demo, [play with it here](http://the-case-for-whimsy-boston.surge.sh/#/48).

For the code, it lives in this repo. Here are some links:

- [WhimsicalInstaller](https://github.com/joshwcomeau/react-boston-2018/blob/master/src/components/WhimsicalInstaller/WhimsicalInstaller.js) - The stateful, top-level component.
- [Projectile (File)](https://github.com/joshwcomeau/react-boston-2018/blob/master/src/components/WhimsicalInstaller/File.js) - In the talk, a generic Projectile component is shown, to point its children based on its movement. In the code, it's a `File` component, which also includes the child image, but it's otherwise identical
- [RotateAfterMouse](https://github.com/joshwcomeau/react-boston-2018/blob/master/src/components/WhimsicalInstaller/RotateAfterMouse.js) - This utility component allows clouds and continents to rotate around the planet.

#### Whimsical Mail Client

The talk also featuers a fictitious email client.

You can [play with the demo](https://whimsical-mail-client.surge.sh)

> **Please note**: the code is not production-ready. This is not a real application, and it hasn't been thoroughly tested. There may be bugs if you deviate from the happy-path stuff done in the talk.
>
> As for the components, they're messier than the ones in the talk, and not very well commented. If you have any questions, please do reach out to me [on Twitter](https://www.twitter.com/joshwcomeau).

The code for that project lives in a [separate repo](https://github.com/joshwcomeau/whimsical-mail-client), and the code is split among a number of different files:

- [NodeProvider](https://github.com/joshwcomeau/whimsical-mail-client/blob/master/src/components/NodeProvider/NodeProvider.js) - a context-driven helper to capture and use references to DOM nodes.
- [Foldable](https://github.com/joshwcomeau/whimsical-mail-client/blob/master/src/components/Foldable/Foldable.js) - A behavioural component that lets you tri-fold its children like a letter.
- [Transport](https://github.com/joshwcomeau/whimsical-mail-client/blob/master/src/components/Transport/Transport.js) - A behavioural component that moves its children between specified DOM nodes, based on a provided status.
- [ComposeEmailContainer](https://github.com/joshwcomeau/whimsical-mail-client/blob/master/src/components/ComposeEmailContainer/ComposeEmailContainer.js) - The container for the "compose email" modal. Uses `Foldable` and `Transport` to do the neat animations.
- [EtchASketchShaker](https://github.com/joshwcomeau/whimsical-mail-client/blob/master/src/components/EtchASketchShaker/EtchASketchShaker.js) - The cute shake-to-clear animation used when clicking "clear".
- [Scoocher](https://github.com/joshwcomeau/whimsical-mail-client/blob/master/src/components/Scoocher/Scoocher.js) - I didn't really mention this in the talk, but there's a fun little underline for the top-left navigation tabs that "scooches" around to indicate the selected tab.
- [NotificationDot](https://github.com/joshwcomeau/whimsical-mail-client/blob/master/src/components/NotificationDot/NotificationDot.js) - Also not mentioned, but there's a cute little indicator dot for tabs with unread messages.

I took inspiration from Tobias Ahlin's fantastic blog post on [Meaningful Motion with Action-Driven Animation](http://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/). Highly-recommended reading.

#### Accessibility

Whimsical touches are great fun, and are valuable to the user experience, but they aren't critical. Making sure your site works for folks with disabilities is a far greater priority.

For learning about accessibility, I'd recommend Google's [Web Fundamentals course](https://developers.google.com/web/fundamentals/accessibility/).

Some additional resources:

- [The A11Y Project](https://a11yproject.com/) - A community-driven effort to make web accessibility easier.
- [`prefers-reduced-motion` media query](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [w3 guide](https://www.w3.org/WAI/fundamentals/accessibility-intro/)

#### Other Cool Things

My talk mentions Houdini Paint, an upcoming CSS feature. [View the demos](https://css-houdini.rocks/), or [learn more about it](https://developers.google.com/web/updates/2018/01/paintapi)
