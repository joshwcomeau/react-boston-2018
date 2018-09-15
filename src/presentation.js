import React, { Component } from 'react';
import styled from 'styled-components';
import {
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  Slide,
  Text,
} from 'spectacle';
import { injectGlobal } from 'styled-components';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';
import { Motion, spring } from 'react-motion';

import { COLORS } from './constants';

import askJeevesSrc from './assets/ask-jeeves.gif';
import mcdonaldsSrc from './assets/mcdonalds-full.gif';
import mcdonaldsZoomSrc from './assets/mcdonalds-zoom.gif';
import mcdonaldsNowSrc from './assets/mcdonalds-now.mp4';
import jesseSkiingSrc from './assets/jesse-skiing.jpg';
import doomSrc from './assets/doom.webp';
import webDesignMuseumSrc from './assets/webdesignmuseum.png';
import habboSrc from './assets/habbo.png';
import whimsyDefinitionSrc from './assets/whimsy-definition.png';
import facebookCongratsSrc from './assets/facebook-congrats.gif';
import confettiMockupSrc from './assets/confetti-mockup.png';
import khanConfettiSrc from './assets/confetti.mp4';
import tooMuchAnimationSrc from './assets/too-much-animation-rachel-nabors.jpeg';
import whimsicalFold from './assets/whimsical-fold.mp4';
import transportStorybookSrc from './assets/transport-storybook.mp4';
import transportAreasSrc from './assets/transport-areas.jpg';
import houdiniCurveSrc from './assets/houdini-curve.mp4';
import houdiniCheckboxesSrc from './assets/houdini-checkboxes.mp4';
import houdiniHighlighterSrc from './assets/houdini-highlighter.mp4';
import houdiniRippleSrc from './assets/houdini-ripple.gif';
import caniusePrmSrc from './assets/caniuse-prm.png';
import unsplashChairSrc from './assets/unsplash-chair.mp4';
import unsplashHighFiveSrc from './assets/unsplash-high-five.mp4';
import joshComputerSrc from './assets/josh-cpu.jpg';
import reactEuropeSrc from './assets/react-europe-talk.gif';
import spinnerInstagramSrc from './assets/spinner-instagram.gif';
import spinnerLinkedinSrc from './assets/spinner-linkedin.gif';
import spinnerKhanAcademySrc from './assets/spinner-khanacademy.gif';
import khanSpinnerRotateSrc from './assets/khan-spinner-rotate.gif';
import khanSpinnerScrubSrc from './assets/khan-spinner-scrub.gif';
import khanSpinnerSproutSrc from './assets/khan-spinner-sprout.gif';
import khanSpinnerWobbleSrc from './assets/khan-spinner-wobble.gif';
import performanceMattersSrc from './assets/performance-matters.png';
import guppyIconSrc from './assets/guppy-icon.png';
import guppyScreenshotSrc from './assets/guppy-screenshot.png';
import guppyOriginalInstallSrc from './assets/guppy-before.mp4';
import guppyWhimsicalInstallSrc from './assets/guppy-after.mp4';
import windows98InstallSrc from './assets/windows-98-install.gif';
import windowsXPInstallSrc from './assets/windows-xp-install.gif';
import mapSrc from './assets/map.png';
import serverLoadSrc from './assets/server-load.mp4';
import netscapeNSrc from './assets/netscape-n.gif';

import FullscreenImage from './components/FullscreenImage';
import ConfettiManager from './components/ConfettiManager';
import Canvas from './components/Canvas';
import Confetti from './components/Confetti';
import Caption from './components/Caption';
import FoldConcept from './components/FoldConcept';
import Foldable from './components/Foldable';
import Underlined from './components/Underlined';
import FakeLoadFor from './components/FakeLoadFor';
import Earth from './components/Earth';
import WhimsicalInstaller from './components/WhimsicalInstaller';

import Spacer from './components/Spacer';
import {
  circleShapeFactory,
  triangleShapeFactory,
  rectangleShapeFactory,
  zigZagShapeFactory,
} from './components/Confetti/confetti-shapes';
import { convertHexColorToRgb } from './components/Confetti/Confetti.helpers';
import Title from './slides/Title';
import SectionStart from './slides/SectionStart';
import WishTheInternet from './slides/WishTheInternet';
import Circles from './slides/Circles';

require('normalize.css');
require('highlight.js/styles/arta.css');

preloader({
  askJeevesSrc,
  mcdonaldsSrc,
  mcdonaldsZoomSrc,
  mcdonaldsNowSrc,
  webDesignMuseumSrc,
  jesseSkiingSrc,
  doomSrc,
  habboSrc,
  whimsyDefinitionSrc,
  facebookCongratsSrc,
  confettiMockupSrc,
  khanConfettiSrc,
  tooMuchAnimationSrc,
  whimsicalFold,
  transportStorybookSrc,
  transportAreasSrc,
  houdiniCurveSrc,
  houdiniCheckboxesSrc,
  houdiniHighlighterSrc,
  houdiniRippleSrc,
  caniusePrmSrc,
  unsplashChairSrc,
  unsplashHighFiveSrc,
  joshComputerSrc,
  reactEuropeSrc,
  spinnerInstagramSrc,
  spinnerLinkedinSrc,
  spinnerKhanAcademySrc,
  khanSpinnerRotateSrc,
  khanSpinnerScrubSrc,
  khanSpinnerSproutSrc,
  khanSpinnerWobbleSrc,
  guppyIconSrc,
  guppyScreenshotSrc,
  guppyOriginalInstallSrc,
  guppyWhimsicalInstallSrc,
  windows98InstallSrc,
  windowsXPInstallSrc,
  mapSrc,
  netscapeNSrc,
  serverLoadSrc,
});

// HACK: Spectacle applies a `transform: scale(1)` to all slides.
// This means that any children with position: fixed don't actually position
// themselves relative to the viewport, they position themselves relative to
// the 1000x700px slide container.
// This class allows us to override that scale, since none of my slides use
// scale in transitions anyway.
injectGlobal`
  .slideWithoutScale {
    transform: none !important;
  }
`;

const theme = createTheme(
  {
    primary: '#FFFFFF',
    secondary: '#222222',
    purple: COLORS.purple[500],
    deepPurple: COLORS.deepPurple[700],
    pink: COLORS.pink[500],
    indigo: COLORS.indigo[700],
    blue: COLORS.blue[500],
    red: COLORS.red[500],
    green: COLORS.green[700],
    teal: COLORS.teal[700],
    lime: COLORS.lime[700],
  },
  {
    primary: 'Lato',
    secondary: 'Playfair Display',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        progress={null}
        theme={theme}
      >
        <Slide>
          <WishTheInternet />
        </Slide>

        <Slide bgColor="#000000">
          <FullscreenImage src={joshComputerSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={jesseSkiingSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={doomSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={webDesignMuseumSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={mcdonaldsSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={mcdonaldsZoomSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <video
            autoPlay
            src={mcdonaldsNowSrc}
            style={{
              width: '100%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide className="slideWithoutScale">
          <Title />
        </Slide>

        <Slide>
          <img src={reactEuropeSrc} width="100%" />
        </Slide>

        <Slide>
          <FullscreenImage src={whimsyDefinitionSrc} />
        </Slide>

        <Slide>
          <Heading size={2} textFont="secondary" textColor="purple">
            With this <br />
            <span
              style={{
                color: COLORS.pink[500],
              }}
            >
              broad definition
            </span>
            ,<br /> it's easy to find examples.
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <video
            autoPlay
            loop
            src={unsplashChairSrc}
            style={{
              width: '100%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <video
            autoPlay
            src={unsplashHighFiveSrc}
            style={{
              width: '100%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <Heading size={3} textFont="secondary" textColor="pink">
            Let's focus on
            <br />
            <span
              style={{
                color: COLORS.lime[500],
              }}
            >
              interaction
            </span>{' '}
            &{' '}
            <span
              style={{
                color: COLORS.lime[500],
              }}
            >
              animation
            </span>
            .
          </Heading>
        </Slide>

        {/*



          PART I



        */}

        <Slide bgColor="teal">
          <SectionStart
            subtitle="Example 1"
            title={
              <FakeLoadFor duration={4000}>Loading Indicators</FakeLoadFor>
            }
          />
        </Slide>

        <Slide transition={['none']}>
          <video
            autoPlay
            src={serverLoadSrc}
            style={{
              width: '100%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <img src={netscapeNSrc} width={250} style={{ margin: 'auto' }} />
        </Slide>

        <Slide bgColor="secondary">
          <FullscreenImage src={spinnerLinkedinSrc} />
        </Slide>
        <Slide bgColor="secondary">
          <FullscreenImage src={spinnerInstagramSrc} />
        </Slide>
        <Slide bgColor="secondary">
          <FullscreenImage src={spinnerKhanAcademySrc} />
        </Slide>

        <Slide>
          <FullscreenImage src={khanSpinnerRotateSrc} />
        </Slide>
        <Slide>
          <FullscreenImage src={khanSpinnerWobbleSrc} />
        </Slide>
        <Slide>
          <FullscreenImage src={khanSpinnerScrubSrc} />
        </Slide>
        <Slide>
          <FullscreenImage src={khanSpinnerSproutSrc} />
        </Slide>

        <Slide>
          <span style={{ fontSize: 22 }}>Amazing spinners by</span>
          <Heading size={4}>Mary Zhong</Heading>
          <Heading size={4}>Sophie Morie</Heading>
          <Heading size={4}>Ioana Crant</Heading>
        </Slide>

        <Slide>
          <img src={guppyIconSrc} style={{ maxHeight: '50vh' }} />
        </Slide>

        <Slide>
          <FullscreenImage src={guppyScreenshotSrc} />
        </Slide>

        <Slide bgColor="secondary">
          <video
            autoPlay
            src={guppyOriginalInstallSrc}
            style={{
              width: '100%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide>
          <img src={windowsXPInstallSrc} style={{ width: '50%' }} />
        </Slide>

        <Slide bgColor="secondary">
          <video
            autoPlay
            src={guppyWhimsicalInstallSrc}
            style={{
              width: '100%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide>
          <FullscreenImage src={performanceMattersSrc} />
        </Slide>

        <Slide bgColor="secondary">
          <Heading>Perceived Performance Matters!</Heading>
        </Slide>

        <Slide>
          <Centered
            style={{
              height: 600,
            }}
          >
            <Earth size={200} />
          </Centered>
        </Slide>

        <Slide>
          <FullscreenImage src={mapSrc} />
        </Slide>

        <Slide bgColor="secondary">
          <Centered>
            <WhimsicalInstaller
              isRunning
              queueLength={8}
              useTransform
              width={600}
            />
          </Centered>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/FileOriginal.example')}
          ranges={[
            { loc: [0, 1], title: '<File />' },
            { loc: [1, 5] },
            { loc: [6, 7] },
            { loc: [8, 9] },
            { loc: [9, 13] },
            { loc: [15, 16] },

            { loc: [16, 19] },
            { loc: [20, 21] },
            { loc: [22, 26] },
            { loc: [27, 31] },

            { loc: [33, 34] },
            { loc: [34, 35] },
            { loc: [36, 37] },
            { loc: [39, 41] },
            { loc: [41, 44] },
            { loc: [44, 45] },
            { loc: [47, 48] },
          ]}
        />

        <Slide bgColor="secondary">
          <Centered>
            <WhimsicalInstaller isRunning queueLength={1} width={600} />
          </Centered>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/FileFinal.example')}
          ranges={[
            { loc: [0, 1], title: '<File /> v2' },
            { loc: [1, 5] },
            { loc: [6, 7] },
            { loc: [8, 9] },
            { loc: [9, 13] },
            { loc: [14, 19] },

            { loc: [21, 22] },
            { loc: [22, 27] },
            { loc: [31, 32] },
            { loc: [33, 40] },

            { loc: [42, 43] },
            { loc: [43, 46] },
            { loc: [50, 53] },
            { loc: [53, 59] },
            { loc: [60, 61] },
            { loc: [63, 64] },
          ]}
        />

        <Slide bgColor="secondary">
          <Centered>
            <WhimsicalInstaller
              isRunning
              queueLength={8}
              useTransform
              width={600}
            />
          </Centered>
        </Slide>

        {/*



          PART II



        */}
        <Slide bgColor="teal">
          <SectionStart subtitle="Example 2" title="Confetti" />
        </Slide>

        <Slide bgColor="secondary">
          <img src={confettiMockupSrc} style={{ width: '100%' }} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <video
            autoPlay
            loop
            src={khanConfettiSrc}
            style={{ width: '100%' }}
          />
        </Slide>

        <Slide>
          <ConfettiManager />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/Canvas.example')}
          ranges={[
            { loc: [0], title: '<Canvas />' },
            { loc: [3, 9] },
            {
              loc: [7, 8],
              note: 'A render prop, but for Canvas',
            },
            { loc: [36, 46] },
            { loc: [10, 17] },
            { loc: [18, 21] },
            {
              loc: [22, 35],
              note: 'Scaling for HiDPI (retina) displays',
            },
            { loc: [36, 46] },
          ]}
        />

        <Slide>
          <ComponentPlayground
            code={require('./code/CanvasDemo.example')}
            theme="external"
            scope={{ Canvas }}
          />
        </Slide>

        <Slide>
          <ComponentPlayground
            code={require('./code/CanvasAnimation.example')}
            theme="external"
            scope={{ Canvas, Motion, spring }}
          />
        </Slide>

        <Slide>
          <Heading textColor="secondary">Particles</Heading>
          <br />
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: circleShapeFactory({
                  size: 150,
                  fill: convertHexColorToRgb('#63d9ea'),
                }),
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: triangleShapeFactory({
                  size: 150,
                  fill: convertHexColorToRgb('#ed5fa6'),
                }),
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: rectangleShapeFactory({
                  width: 75,
                  height: 150,
                  fill: convertHexColorToRgb('#f4d345'),
                }),
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: zigZagShapeFactory({
                  size: 75,
                  fill: convertHexColorToRgb('#26edd5'),
                }),
              }}
            />
          </div>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/ConfettiShapes.example')}
          ranges={[
            {
              loc: [0],
              title: 'Confetti Shapes',
            },
            { loc: [0, 4] },
            { loc: [4, 16] },
            { loc: [17, 21] },
            { loc: [21, 27] },
            { loc: [27, 40] },

            // createImageElement
            { loc: [42, 43] },
            { loc: [43, 46] },
            { loc: [47, 50] },
            { loc: [50, 51] },
            { loc: [55, 62] },
            { loc: [63, 64] },
            { loc: [65, 66] },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/Confetti.example')}
          ranges={[
            {
              loc: [0],
              title: '<Confetti />',
              note: '✂️ Abridged Version ✂️',
            },
            { loc: [0, 1] },
            { loc: [2, 4] },
            { loc: [5, 14] },
            { loc: [15, 19] },
            { loc: [21, 24] },

            // Render
            { loc: [83, 84] },
            { loc: [84, 89] },
            { loc: [90, 101] },
            { loc: [94, 95] },
            { loc: [95, 99] },

            // generateParticles
            { loc: [37, 38] },
            { loc: [38, 40] },
            { loc: [40, 46] },
            { loc: [47, 53] },

            // Re-render
            { loc: [94, 95] },

            // draw
            { loc: [67, 68] },
            { loc: [68, 69] },
            { loc: [70, 71] },
            { loc: [72, 73] },
            { loc: [73, 76] },
            { loc: [77, 78] },
            { loc: [79, 80] },
            { loc: [79, 80], note: 'How does our animation loop start?' },

            // cDU
            { loc: [25, 36] },

            // tick
            { loc: [55, 56] },
            { loc: [56, 57] },
            { loc: [57, 59] },
            { loc: [60, 64] },
            { loc: [61, 62] },

            // Render
            { loc: [83, 101] },
          ]}
        />

        <Slide
          bgColor="secondary"
          transition={[null]}
          notes={`
            This may seem prohibitively expensive from a performance standpoint. Because we're re-rendering on every frame, we're asking React to do a whole update every 16 milliseconds, eating up precious time.

            The expensive part of a React re-render is the reconciliation process, where it tries to figure out what's changed in the DOM and update the DOM to match its own understanding. In our case, the DOM markup is really simple though!

            (cut to a chrome inspector shot of just the canvas)

            So it's actually really quick for React to say "Nope, nothing changed here, no DOM mutation necessary"

            That said, it's still not free. At Khan Academy, we test on cheap Chromebooks, and this animation works pretty well... but if you really need to eke out every drop of performance, you can sneak around React and manage updates yourself.
          `}
        >
          <Heading textColor="red">This sounds expensive...</Heading>
        </Slide>

        <Slide>TODO: A quick look at Confetti sans React</Slide>

        {/*



          PART III



        */}

        <Slide bgColor="teal">
          <SectionStart subtitle="Example 3" title="Email Client" />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          [Go do a demo Josh!]
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <Heading textFont="secondary" textColor="green" size={5}>
            “Meaningful Motion with
            <br />
            Action-Driven Animation”
          </Heading>
          <Spacer size={50} />
          <Text>
            <a
              style={{
                color: COLORS.blue[500],
              }}
              href="http://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/"
            >
              http://tobiasahlin.com/blog
            </a>
          </Text>
          <br />
          <br />
        </Slide>

        <Slide>
          <Heading textFont="secondary" size={4}>
            Slow-mo fold
          </Heading>
          <Spacer size={40} />
          <video autoPlay loop src={whimsicalFold} width={920} />
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            When I started showing this animation to people, often the first bit of feedback I got was that it would get old fast, and that it'd
            become this annoying waste of time that you just need to sit through.

            And that's a totally fair bit of feedback, but it's also easy to address.
          `}
        >
          <FullscreenImage src={tooMuchAnimationSrc} />
          <Caption>Source: Rachel Nabors, rachelnabors.com</Caption>
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
          notes={`
            A joke isn't funny the 70th time you hear it, but that doesn't mean
            we should abolish jokes entirely!

            You can also just add a user setting to disable animations, which
            is not only helpful for no-nonsense, right-down-to-business
            curmudgeons, but also folks with vestibular disorders.
          `}
        >
          <Heading textFont="secondary" textColor="green" size={3}>
            Write self-disabling animations
          </Heading>

          <br />
          <br />

          <Text textColor="primary">
            Whimsy is supposed to be{' '}
            <em style={{ color: COLORS.yellow[500] }}>unexpected</em>.
          </Text>
        </Slide>

        <Slide bgColor="deepPurple" textColor="primary">
          <SectionStart subtitle="Element 1" title="Folding the DOM" />
        </Slide>

        <Slide>
          <FoldConcept />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="flow"
          code={require('./code/Foldable.example')}
          ranges={[
            {
              loc: [0],
              title: '<Foldable />',
              note: '✂️ Abridged Version ✂️',
            },
            { loc: [0, 1] },
            { loc: [2, 3] },
            { loc: [3, 4] },
            { loc: [4, 5] },
            { loc: [7, 10] },

            { loc: [94, 103] },
            { loc: [97, 98] },
            { loc: [98, 100] },

            { loc: [11, 12] },
            { loc: [23, 24] },
            { loc: [12, 26] },
            { loc: [14, 17] },
            { loc: [17, 22] },

            { loc: [28, 29] },
            { loc: [31, 37] },
            { loc: [38, 46] },
            { loc: [47, 60] },
            { loc: [54, 57] },
            { loc: [61, 74] },
            { loc: [75, 90] },

            { loc: [94, 103] },

            { loc: [105, 222] },
            { loc: [160, 222] },
            { loc: [200, 222] },
          ]}
        />

        <Slide>
          <Heading size={2} textColor="pink" textFont="secondary">
            React is Awesome
          </Heading>
          <br />
          <br />
          <Text>
            This effect is accomplished by CSS, but it's messy.
            <br />
            With React, we can abstract this into a <Foldable /> component with
            a beautiful API.
          </Text>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/FoldableDemo.example')}
          ranges={[
            {
              loc: [0],
              title: '<Foldable> in use',
            },
            { loc: [0, 4] },
            { loc: [5, 8] },
            { loc: [9, 20] },
            { loc: [13, 16] },
            { loc: [16, 19] },
            { loc: [12, 20] },
          ]}
        />

        <Slide bgColor="deepPurple" textColor="primary">
          <SectionStart subtitle="Element 2" title="Node Transporter" />
        </Slide>

        <Slide bgColor="#000000">
          <video autoPlay loop src={transportStorybookSrc} width={920} />
        </Slide>

        <Slide>
          <Heading textColor="secondary">{'<NodeProvider>'}</Heading>
          <p>Capture DOM node and bounding-box information</p>

          <br />

          <Heading textColor="secondary">{'<Transport>'}</Heading>
          <p>Orchestrate motion between DOM nodes</p>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          transition={['none']}
          code={require('./code/NodeProviderProps.example')}
          ranges={[
            {
              loc: [0],
              title: '<NodeProvider> data',
            },
            { loc: [1, 7] },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          transition={['none']}
          code={require('./code/NodeProvider.example')}
          ranges={[
            {
              loc: [0],
              title: '<NodeProvider />',
            },
            // createContext
            { loc: [2, 5] },

            { loc: [6, 7] },

            // State
            { loc: [7, 9] },
            { loc: [9, 17] },

            // render
            { loc: [19, 28] },
            // exports
            { loc: [30, 34] },
          ]}
        />

        <CodeSlide
          transition={['none']}
          bgColor="secondary"
          lang="jsx"
          code={require('./code/NodeProviderConsumption.example')}
          ranges={[
            {
              loc: [0],
              title: 'NodeProvider Usage',
            },
            // App
            { loc: [0, 9] },
            { loc: [3, 6] },

            // InboxHeading
            { loc: [10, 19] },
            { loc: [11, 13] },
            { loc: [13, 16] },

            // SomewhereElse
            { loc: [20, 29] },
          ]}
        />

        <Slide bgColor="secondary">
          <Heading textColor="primary">{'<Transport />'}</Heading>
          <br />
          <br />
          <FullscreenImage src={transportAreasSrc} />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          transition={['none']}
          code={require('./code/TransportConsumption.example')}
          ranges={[
            {
              loc: [0],
              title: '<Transport /> Usage',
            },
            { loc: [0, 1] },
            { loc: [1, 8] },

            { loc: [9, 10] },
            { loc: [12, 16] },

            { loc: [17, 23] },
            { loc: [23, 28] },
            { loc: [28, 35] },
            { loc: [17, 38] },
          ]}
        />

        {/*



        CONCLUSION



        */}

        <Slide bgColor="teal">
          <SectionStart title="Conclusion" />
        </Slide>

        <Slide
          notes={`
            I remember years ago, someone told me that the most interesting
            problems to work on were the ones that no one's solved yet.

            And I remember thinking "Almost everything's already been solved,
            and the stuff that hasn't is super hard and I'll never be good
            enough to solve them"

            There's so much really cool stuff we can build.
          `}
        >
          <Heading textFont="secondary" textColor="purple" size={4}>
            There's
          </Heading>
          <Heading textFont="secondary" textColor="pink" size={1}>
            SO MUCH
          </Heading>
          <Heading textFont="secondary" textColor="purple" size={4}>
            unexplored territory
          </Heading>
        </Slide>

        <Slide>
          <Circles />
        </Slide>

        <Slide>
          <Heading textFont="secondary" textColor="purple" size={4}>
            And the future is
          </Heading>
          <Heading textFont="secondary" textColor="pink" size={1}>
            SO EXCITING
          </Heading>
        </Slide>

        <Slide>
          <video
            autoPlay
            loop
            src={houdiniHighlighterSrc}
            style={{
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <video
            autoPlay
            loop
            src={houdiniCheckboxesSrc}
            style={{
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <img src={houdiniRippleSrc} />
        </Slide>

        <Slide bgColor="secondary">
          <video
            autoPlay
            loop
            src={houdiniCurveSrc}
            style={{
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide>

            <Heading size={4} textColor="secondary">
            <a href="https://css-houdini.rocks"></a>
              https://css-houdini.rocks
          </a>
            </Heading>
          <br />
          <br />
          By <a href="https://twitter.com/iamvdo">@iamvdo</a>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textColor="pink" size={1} textFont="secondary">
            But!!
          </Heading>
          <br />
          <br />
          <Text textColor="primary">
            This stuff is{' '}
            <Underlined
              style={{
                color: COLORS.lime[500],
              }}
            >
              less important
            </Underlined>{' '}
            than{' '}
            <Underlined
              style={{
                color: COLORS.yellow[500],
              }}
            >
              Accessibility
            </Underlined>
            .
          </Text>
          <br />
          <br />
          <Text textColor="primary">
            Before we should try and make our sites delightful, we should strive
            for them to be usable.
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textColor="primary" size={4}>
            If nothing else, we should make sure that our whimsical touches
            aren't harmful for folks with vestibular disorders.
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textFont="inconsolata" textColor="primary" size={3}>
            prefers-reduced-motion
          </Heading>

          <br />
          <br />

          <CodePane
            lang="css"
            source={`
@media (prefers-reduced-motion) {
  /* reduce animation */
}
`}
            theme="external"
            style={{ fontSize: 32 }}
          />
        </Slide>

        <Slide transition={[null]} bgColor="secondary">
          <Heading textFont="inconsolata" textColor="primary" size={3}>
            prefers-reduced-motion
          </Heading>

          <br />
          <br />

          <CodePane
            lang="js"
            source={`
const prefersReducedMotion = window
  .matchMedia('(prefers-reduced-motion)')
  .matches;

if (prefersReducedMotion) {
  /* reduce animation */
}
`}
            theme="external"
            style={{ fontSize: 32 }}
          />
        </Slide>

        <Slide bgColor="#f2e8d6">
          <FullscreenImage src={caniusePrmSrc} />
        </Slide>

        <Slide>
          <Heading size={4} textColor="green">
            At Khan Academy, we have a "disable animations" property on our user
            model. We check that as well as `prefers-reduced-motion`.
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="green" textFont="secondary">
            The Takeaway
          </Heading>
          <Spacer size={40} />

          <Heading textColor="indigo" size={5}>
            Animations and interactions are a key part of the user experience.
          </Heading>
          <Spacer size={20} />
          <Heading textColor="deepPurple" size={5}>
            There are really interesting unsolved problems here.
          </Heading>
          <Spacer size={20} />
          <Heading textColor="pink" size={5}>
            This area is poised to blow up, as new web technologies emerge.
          </Heading>
          <Spacer size={20} />
          <Heading textColor="red" size={5}>
            Come be a part of it, and expand your toolkit!
          </Heading>
        </Slide>

        <Slide>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <Heading
              textColor="pink"
              textFont="secondary"
              style={{ marginTop: -150 }}
            >
              Thanks!
            </Heading>
            <br />
            <br />
            <br />
            <Text textColor="secondary">Slides and code available at</Text>
            <Heading textColor="blue">@joshwcomeau</Heading>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <MakeItFullscreen>
              <Confetti
                makeItRainOn="mount"
                width={window.innerWidth}
                height={window.innerHeight}
                emitDuration={6000}
                numParticles={200}
                minScale={1}
                maxScale={2}
              />
            </MakeItFullscreen>
          </div>
        </Slide>
      </Deck>
    );
  }
}

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Spectacle puts everything in its own transformed layer, and so it's actually
 * quite difficult to make something truly fullscreen.
 * This is a hacky af workaround, I'm doing this hastily since the talk is
 * looming.
 */
class MakeItFullscreen extends Component {
  state = {
    offsetLeft: 0,
    offsetTop: 0,
  };

  componentDidMount() {
    const bb = this.node.getBoundingClientRect();

    this.setState({
      offsetLeft: -bb.left,
      offsetTop: -bb.top,
    });
  }

  render() {
    const { offsetLeft, offsetTop } = this.state;
    return (
      <div
        ref={node => (this.node = node)}
        style={{ position: 'absolute', top: offsetTop, left: offsetLeft }}
      >
        {this.props.children}
      </div>
    );
  }
}
