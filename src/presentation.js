import React, { Component } from 'react';
import styled from 'styled-components';
import { CodePane, Deck, Heading, Slide, Text } from 'spectacle';
import { injectGlobal } from 'styled-components';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';

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
import spinnerTwitterSrc from './assets/spinner-twitter.gif';
import spinnerKhanAcademySrc from './assets/spinner-khanacademy.gif';
import khanSpinnerRotateSrc from './assets/khan-spinner-rotate.gif';
import khanSpinnerScrubSrc from './assets/khan-spinner-scrub.gif';
import khanSpinnerSproutSrc from './assets/khan-spinner-sprout.gif';
import khanSpinnerWobbleSrc from './assets/khan-spinner-wobble.gif';
import performanceMattersSrc from './assets/performance-matters.png';
import guppyIconSrc from './assets/guppy-icon.png';
import guppyIntroSrc from './assets/guppy-intro.mp4';
import guppyOriginalInstallSrc from './assets/guppy-before-trimmed.mp4';
import guppyWhimsicalInstallSrc from './assets/guppy-after.mp4';
import windows98InstallSrc from './assets/windows-98-install.gif';
import windowsXPInstallSrc from './assets/windows-xp-install.gif';
import mapSrc from './assets/map.png';
import serverLoadSrc from './assets/server-load.mp4';
import netscapeSrc from './assets/netscape.jpg';
import netscapeNSrc from './assets/netscape-n.gif';
import canvasDomSrc from './assets/canvas-dom.png';
import seriousOffice1Src from './assets/serious-office-1.jpg';
import seriousOffice2Src from './assets/serious-office-2.jpg';
import seriousOffice3Src from './assets/serious-office-3.jpg';
import seriousOffice4Src from './assets/office-mean-boss.jpg';
import seriousOffice5Src from './assets/youre-fired.jpg';
import fintechSrc from './assets/fintech-2.jpg';
import monolistSrc from './assets/monolist.gif';

import FullscreenImage from './components/FullscreenImage';
import Confetti from './components/Confetti';
import Caption from './components/Caption';
import FoldConcept from './components/FoldConcept';
import Foldable from './components/Foldable';
import Underlined from './components/Underlined';
import FakeLoadFor from './components/FakeLoadFor';
import Earth from './components/Earth';
import WhimsicalInstaller from './components/WhimsicalInstaller';
import Transport from './components/Transport/TransportCodeSandbox';

import Spacer from './components/Spacer';
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
  spinnerTwitterSrc,
  spinnerKhanAcademySrc,
  khanSpinnerRotateSrc,
  khanSpinnerScrubSrc,
  khanSpinnerSproutSrc,
  khanSpinnerWobbleSrc,
  guppyIconSrc,
  guppyIntroSrc,
  guppyOriginalInstallSrc,
  guppyWhimsicalInstallSrc,
  windows98InstallSrc,
  windowsXPInstallSrc,
  mapSrc,
  netscapeSrc,
  netscapeNSrc,
  serverLoadSrc,
  canvasDomSrc,
  seriousOffice1Src,
  seriousOffice2Src,
  seriousOffice3Src,
  seriousOffice4Src,
  seriousOffice5Src,
  fintechSrc,
  monolistSrc,
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
        {/*
          Single blank slide, so that the second slide has a fade-in effect
        */}
        <Slide />

        <Slide>
          <Transport />
        </Slide>

        <Slide>
          <WishTheInternet />
        </Slide>

        <Slide bgColor="#000000">
          <FullscreenImage src={joshComputerSrc} />
        </Slide>

        <Slide bgColor="secondary">
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
            loop
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
              <FakeLoadFor duration={3000}>Loading Indicators</FakeLoadFor>
            }
          />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={netscapeSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <img src={netscapeNSrc} width={250} style={{ margin: 'auto' }} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
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
          <FullscreenImage src={spinnerLinkedinSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={spinnerTwitterSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={spinnerInstagramSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
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
          <Heading size={6}>This was on my mind, while building Guppy.</Heading>
          <br />
          <br />
          <img src={guppyIconSrc} style={{ width: '200px' }} />
        </Slide>

        <Slide bgColor="secondary">
          <video
            autoPlay
            src={guppyIntroSrc}
            style={{
              width: '100%',
              margin: 'auto',
            }}
          />
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

        <Slide>
          <Centered
            style={{
              height: 600,
            }}
          >
            <Earth size={200} />
          </Centered>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/RotateAroundPlanet.example')}
          ranges={[
            { loc: [0, 1], title: '<RotateAroundPlanet />' },
            { loc: [1, 7] },
            { loc: [8, 12] },

            // Render
            { loc: [42, 43] },
            { loc: [43, 49] },
            { loc: [50, 55] },

            // componentDidMount
            { loc: [13, 14] },
            { loc: [14, 19] },
            { loc: [20, 21] },
            { loc: [21, 25] },
            { loc: [25, 29] },
            { loc: [30, 35] },
            { loc: [36, 40] },

            { loc: [42, 55] },
          ]}
        />

        <Slide bgColor="secondary">
          <Heading textColor="#FFC400" size={3}>
            File Rotation
          </Heading>
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

        <Slide>
          <Heading textColor="secondary" size={3}>
            I know what some of you are thinking...
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <FullscreenImage src={seriousOffice1Src} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={seriousOffice2Src} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={seriousOffice3Src} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={seriousOffice4Src} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={seriousOffice5Src} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={fintechSrc} />
        </Slide>

        {/*



          PART II



        */}

        <Slide bgColor="teal">
          <SectionStart subtitle="Example 2" title="Email Client" />
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
          <SectionStart subtitle="Element 2" title="Moving Nodes Around" />
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

        <Slide>
          <Heading textColor="pink">The world needs more whimsy.</Heading>
        </Slide>

        <Slide>
          <Heading>There's a business case for this, too.</Heading>
        </Slide>

        <Slide>Patreon confetti (GIF or link to article)</Slide>

        <Slide>
          <FullscreenImage src={monolistSrc} />
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
            <a href="https://css-houdini.rocks">https://css-houdini.rocks</a>
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
