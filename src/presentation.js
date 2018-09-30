import React, { Component } from 'react';
import styled from 'styled-components';
import { CodePane, Deck, Heading, Slide, Text } from 'spectacle';
import { injectGlobal } from 'styled-components';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';

import { COLORS } from './constants';

import the90sSrc from './assets/90s.jpg';
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
import caniuseWaapiSrc from './assets/caniuse-waapi.png';
import unsplashChairSrc from './assets/unsplash-chair.mp4';
import unsplashHighFiveSrc from './assets/unsplash-high-five.mp4';
import joshComputerSrc from './assets/josh-cpu.jpg';
import reactEuropeSrc from './assets/react-europe-talk.gif';
import spinnerInstagramSrc from './assets/spinner-instagram.gif';
import spinnerLinkedinSrc from './assets/spinner-linkedin.gif';
import spinnerTwitterSrc from './assets/spinner-twitter.gif';
import khanAcademyLogoSrc from './assets/khan-academy-logo.png';
import khanAcademyLoadingSrc from './assets/khan-academy-loading.gif';
import khanSpinnerRotateSrc from './assets/khan-spinner-rotate.gif';
import khanSpinnerScrubSrc from './assets/khan-spinner-scrub.gif';
import khanSpinnerSproutSrc from './assets/khan-spinner-sprout.gif';
import khanSpinnerWobbleSrc from './assets/khan-spinner-wobble.gif';
import khanAcademyHomepageSrc from './assets/khan-homepage.png';
import performanceMattersSrc from './assets/performance-matters.png';
import guppyIconSrc from './assets/guppy-icon.png';
import guppyScreenGrab from './assets/guppy-screen-grab.png';
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
import angry1Src from './assets/angry-1.jpg';
import angry2Src from './assets/angry-2.jpg';
import angry3Src from './assets/angry-3.jpg';
import fintechSearchSrc from './assets/fintech-search.mp4';
import fintechSoftwareSrc from './assets/fintech-software.jpg';
import actuarialSoftwareSrc from './assets/actuarial-software.jpg';
import monolistSrc from './assets/monolist.gif';
import whyNodeProviderSrc from './assets/why-node-provider.gif';
import rftLogoSrc from './assets/rft-logo.gif';
import patreonGrowthSrc from './assets/patreon-growth.png';
import patreonConfettiSrc from './assets/patreon-confetti.png';
import reactSpringSrc from './assets/react-spring.gif';
import reactFlipToolkitSrc from './assets/react-flip-toolkit.gif';
import poseDemoSrc from './assets/pose-demo.gif';
import emailComposeSrc from './assets/email-client-masks/email-compose.jpg';
import emailComposeLeftSrc from './assets/email-client-masks/email-compose-left.jpg';
import emailComposeTopSrc from './assets/email-client-masks/email-compose-top.jpg';
import emailChildSrc from './assets/email-client-masks/email-child-init.jpg';
import emailChildLeftSrc from './assets/email-client-masks/email-child-left.jpg';
import emailChildTopSrc from './assets/email-client-masks/email-child-top.jpg';
import emailChildSizeSrc from './assets/email-client-masks/email-child-size.jpg';
import emailOutboxSrc from './assets/email-client-masks/email-outbox.jpg';
import emailOutboxLeftSrc from './assets/email-client-masks/email-outbox-left.jpg';
import emailOutboxTopSrc from './assets/email-client-masks/email-outbox-top.jpg';
import transportStartSrc from './assets/email-client-masks/transport-start.jpg';
import transportEndSrc from './assets/email-client-masks/transport-end.jpg';
import transportCalcSrc from './assets/email-client-masks/transport-calc.jpg';
import houdiniSrc from './assets/houdini.png';
import dominosSrc from './assets/dominos-1.mp4';
import dominosGrowthSrc from './assets/dominos-growth.png';
import dominosTechSrc from './assets/dominos-tech.png';
import dominosLogoSrc from './assets/dominos-logo.jpg';

import FullscreenImage from './components/FullscreenImage';
import Confetti from './components/Confetti';
import Caption from './components/Caption';
import FoldConcept from './components/FoldConcept';
import Underlined from './components/Underlined';
import FakeLoadFor from './components/FakeLoadFor';
import Earth from './components/Earth';
import WhimsicalInstaller from './components/WhimsicalInstaller';

import Spacer from './components/Spacer';
import Title from './slides/Title';
import SectionStart from './slides/SectionStart';
import Circles from './slides/Circles';

require('normalize.css');
require('highlight.js/styles/arta.css');

preloader({
  the90sSrc,
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
  caniuseWaapiSrc,
  unsplashChairSrc,
  unsplashHighFiveSrc,
  joshComputerSrc,
  reactEuropeSrc,
  spinnerInstagramSrc,
  spinnerLinkedinSrc,
  spinnerTwitterSrc,
  khanAcademyLoadingSrc,
  khanSpinnerRotateSrc,
  khanSpinnerScrubSrc,
  khanSpinnerSproutSrc,
  khanSpinnerWobbleSrc,
  khanAcademyHomepageSrc,
  guppyIconSrc,
  guppyScreenGrab,
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
  angry1Src,
  angry2Src,
  angry3Src,
  fintechSearchSrc,
  fintechSoftwareSrc,
  actuarialSoftwareSrc,
  monolistSrc,
  whyNodeProviderSrc,
  rftLogoSrc,
  patreonGrowthSrc,
  patreonConfettiSrc,
  reactSpringSrc,
  reactFlipToolkitSrc,
  poseDemoSrc,
  emailComposeSrc,
  emailComposeLeftSrc,
  emailComposeTopSrc,
  emailChildSrc,
  emailChildLeftSrc,
  emailChildTopSrc,
  emailChildSizeSrc,
  emailOutboxSrc,
  emailOutboxLeftSrc,
  emailOutboxTopSrc,
  transportStartSrc,
  transportEndSrc,
  transportCalcSrc,
  houdiniSrc,
  dominosSrc,
  dominosGrowthSrc,
  dominosTechSrc,
  dominosLogoSrc,
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
        <Slide bgColor="secondary" />

        <Slide bgImage={the90sSrc} />

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
            loop
            src={unsplashHighFiveSrc}
            style={{
              width: '100%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
          notes={`
            There's a ton of opportunity to delight our users because we can interact with them directly.
          `}
        >
          <Heading size={3} textFont="secondary" textColor="pink">
            Let's focus on
            <br />
            <span
              style={{
                color: COLORS.lime[500],
              }}
            >
              animation
            </span>{' '}
            &{' '}
            <span
              style={{
                color: COLORS.lime[500],
              }}
            >
              interaction
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
          <FullscreenImage src={khanAcademyHomepageSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={khanAcademyLoadingSrc} />
        </Slide>
        <Slide>
          <img src={khanAcademyLogoSrc} style={{ maxWidth: '100%' }} />
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
          <img src={guppyScreenGrab} style={{ width: '100%' }} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <video
            autoPlay
            src={guppyIntroSrc}
            style={{
              width: '100%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`SO, what do you do? If you can't improve the performance, how do you improve the experience for the user?`}
        >
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
            { loc: [43, 48] },

            // componentDidMount
            { loc: [13, 14] },
            { loc: [14, 19] },
            { loc: [20, 21] },
            { loc: [21, 24] },
            { loc: [24, 28] },
            { loc: [30, 35] },
            { loc: [36, 40] },

            { loc: [42, 49] },
          ]}
        />

        <Slide bgColor="#f2e8d6">
          <FullscreenImage src={caniuseWaapiSrc} />
        </Slide>

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
            { loc: [0, 1], title: '<Projectile />' },
            { loc: [1, 6] },
            { loc: [7, 8] },
            { loc: [9, 10] },
            { loc: [10, 14] },

            { loc: [16, 17] },
            { loc: [17, 20] },
            { loc: [21, 22] },
            { loc: [23, 27] },
            { loc: [28, 32] },

            { loc: [34, 35] },
            { loc: [35, 36] },
            { loc: [37, 38] },
            { loc: [40, 42] },
            { loc: [42, 45] },
            { loc: [45, 46] },
            { loc: [48, 49] },
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
            { loc: [0, 1], title: '<Projectile /> v2' },
            { loc: [1, 6] },
            { loc: [7, 8] },
            { loc: [9, 10] },
            { loc: [10, 14] },
            { loc: [15, 20] },

            { loc: [22, 23] },
            { loc: [23, 28] },
            { loc: [31, 33] },
            { loc: [34, 41] },

            { loc: [43, 44] },
            { loc: [44, 47] },
            { loc: [51, 54] },
            { loc: [54, 60] },
            { loc: [61, 62] },
            { loc: [64, 65] },
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

        <Slide />

        <Slide>
          <Heading textColor="secondary" size={3}>
            Is this relevant tho?
          </Heading>
        </Slide>

        <Slide>
          <h1 style={{ fontSize: '120px' }}>✋</h1>
        </Slide>

        <Slide transition={['none']}>
          <Heading textColor="secondary" size={3}>
            For side-projects?
          </Heading>
          <Heading textColor="purple" size={1}>
            Definitely!
          </Heading>
        </Slide>

        <Slide transition={['none']}>
          <Heading textColor="secondary" size={3}>
            At your day-job?
          </Heading>
          <Heading textColor="pink" size={1}>
            Hm, sorta.
          </Heading>
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

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/local-storage.example')}
          ranges={[
            {
              loc: [0, 2],
            },
            { loc: [3, 4] },
            { loc: [4, 5] },
            { loc: [5, 6] },
            { loc: [6, 7] },
          ]}
        />

        <Slide bgColor="secondary" transition={['none']}>
          <Heading textColor="primary" size={3}>
            Whimsy is supposed to be{' '}
            <em style={{ color: COLORS.yellow[500] }}>unexpected</em>.
          </Heading>
        </Slide>

        <Slide bgColor="deepPurple" textColor="primary">
          <SectionStart subtitle="Element 1" title="Folding the DOM" />
        </Slide>

        <Slide>
          <FoldConcept />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="js"
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

            { loc: [74, 83] },
            { loc: [77, 78] },
            { loc: [78, 80] },

            { loc: [11, 12] },
            { loc: [23, 24] },
            { loc: [12, 26] },
            { loc: [14, 17] },
            { loc: [17, 22] },

            { loc: [28, 29] },
            { loc: [31, 37] },
            { loc: [38, 46] },
            { loc: [47, 54] },
            { loc: [50, 51] },
            { loc: [55, 62] },
            { loc: [58, 59] },
            { loc: [63, 70] },
            { loc: [66, 67] },

            { loc: [74, 83] },

            { loc: [85, 97] },
            { loc: [98, 110] },

            { loc: [111, 131] },
            { loc: [132, 157] },
            { loc: [158, 180] },
            { loc: [180, 200] },
          ]}
        />

        <Slide>
          <Heading size={2} textColor="pink" textFont="secondary">
            Yay components!
          </Heading>
          <br />
          <br />
          <Text>
            Make a really nice API that encapsulates
            <br />a bunch of tricky CSS.
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
          <SectionStart title="Moving Nodes Around" />
        </Slide>

        <Slide bgColor="#000000">
          <video autoPlay loop src={transportStorybookSrc} width={920} />
        </Slide>

        <Slide>
          <Heading textColor="secondary">{'<NodeContext>'}</Heading>
          <p>Capture references to the DOM nodes on the screen</p>

          <br />

          <Heading textColor="secondary">{'<Transport>'}</Heading>
          <p>Orchestrate motion between DOM nodes</p>
        </Slide>

        <Slide>
          <Heading textColor="secondary">{'<NodeContext>'}</Heading>
          <p>Capture references to the DOM nodes on the screen</p>

          <br />
          <Heading textColor="secondary" style={{ opacity: 0.15 }}>
            {'<Transport>'}
          </Heading>
          <p style={{ opacity: 0.15 }}>Orchestrate motion between DOM nodes</p>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={4} textColor="primary">
            We need these nodes:
          </Heading>
          <br />
          <br />

          <img src={whyNodeProviderSrc} style={{ width: '100%' }} />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          transition={['none']}
          code={`document.querySelector('.compose-btn')`}
          ranges={[
            {
              loc: [0, 1],
              title: 'The traditional way',
            },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          transition={['none']}
          code={require('./code/ClientRect.example')}
          ranges={[{ loc: [0, 2] }, { loc: [3, 5] }]}
        />

        {/* <CodeSlide
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
            { loc: [30, 32] },
          ]}
        /> */}

        <CodeSlide
          transition={['none']}
          bgColor="secondary"
          lang="jsx"
          code={require('./code/NodeProviderConsumption.example')}
          ranges={[
            {
              loc: [0],
              title: 'NodeContext Usage',
            },
            // Imports
            { loc: [0, 4] },

            // App
            { loc: [5, 14] },
            { loc: [8, 11] },

            // InboxHeading
            { loc: [15, 24] },
            { loc: [16, 18] },
            { loc: [18, 21] },

            // SomewhereElse
            { loc: [25, 34] },
          ]}
        />

        <CodeSlide
          transition={['none']}
          bgColor="secondary"
          lang="jsx"
          code={require('./code/NodeProvider.example')}
          ranges={[
            {
              loc: [0],
              title: 'NodeContext',
            },
            // Context
            { loc: [2, 5] },

            // App
            { loc: [6, 7] },
            { loc: [7, 8] },
            { loc: [8, 9] },
            { loc: [9, 16] },

            // InboxHeading
            { loc: [30, 32] },
          ]}
        />

        <Slide>
          <Heading textColor="secondary" style={{ opacity: 0.15 }}>
            {'<NodeContext>'}
          </Heading>
          <p style={{ opacity: 0.15 }}>
            Capture references to the DOM nodes on the screen
          </p>

          <br />

          <Heading textColor="secondary">{'<Transport>'}</Heading>
          <p>Orchestrate motion between DOM nodes</p>
        </Slide>

        <CodeSlide
          transition={['none']}
          bgColor="secondary"
          lang="jsx"
          code={require('./code/TransportAPI.example')}
          ranges={[
            {
              loc: [0],
              title: 'My ideal API',
            },
            { loc: [0, 7] },
            { loc: [0, 1] },
            { loc: [1, 3] },
            { loc: [3, 4] },
            { loc: [5, 6] },
          ]}
        />

        <Slide bgColor="secondary">
          <FullscreenImage src={emailComposeSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={emailComposeLeftSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={emailComposeTopSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={emailChildSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={emailChildLeftSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={emailChildTopSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={emailChildSizeSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={emailOutboxSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={emailOutboxLeftSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={emailOutboxTopSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={transportStartSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={transportEndSrc} />
        </Slide>
        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={transportCalcSrc} />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          transition={['none']}
          code={require('./code/TransportConsumption.example')}
          ranges={[
            {
              loc: [0],
              title: 'Putting it all together',
            },
            { loc: [0, 1] },
            { loc: [1, 8] },

            { loc: [9, 10] },
            { loc: [12, 13] },
            { loc: [13, 18] },
            { loc: [18, 27] },
            { loc: [21, 26] },
            { loc: [27, 34] },
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
          <Heading textColor="secondary" size={6}>
            There's a business case for this, too.
          </Heading>
        </Slide>

        <Slide>
          <img src={patreonGrowthSrc} />

          <br />
          <br />
          <a
            href="https://brianbalfour.com/essays/patreon-onboarding-growth"
            style={{ fontSize: 16, color: '#777' }}
          >
            brianbalfour.com/essays/patreon-onboarding-growth
          </a>
        </Slide>

        <Slide>
          <FullscreenImage src={patreonConfettiSrc} />
        </Slide>

        <Slide>
          <video
            autoPlay
            loop
            src={khanConfettiSrc}
            style={{
              width: '100%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide>
          <img src={dominosLogoSrc} width={450} />
        </Slide>

        <Slide bgColor="secondary">
          <video
            autoPlay
            src={dominosSrc}
            style={{
              width: '100%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide>
          <FullscreenImage src={dominosGrowthSrc} />
        </Slide>
        <Slide>
          <FullscreenImage src={dominosTechSrc} />
        </Slide>

        <Slide />

        <Slide>
          <Heading textFont="secondary" textColor="purple" size={4}>
            There's an
          </Heading>
          <Heading textFont="secondary" textColor="pink" size={1}>
            incredible ecosystem
          </Heading>
          <Heading textFont="secondary" textColor="purple" size={4}>
            of tools
          </Heading>
        </Slide>

        <Slide>
          <Heading size={4} textColor="secondary">
            React Spring
          </Heading>
        </Slide>

        <Slide>
          <FullscreenImage src={reactSpringSrc} />
        </Slide>

        <Slide>
          <svg
            width="450"
            viewBox="0 0 613 192"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="8.5%"
                y1="0%"
                x2="8.5%"
                y2="81.7%"
                id="posepurple"
              >
                <stop stop-color="#ED00BB" offset="0%" />
                <stop stop-color="#A100F6" offset="100%" />
              </linearGradient>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="posered">
                <stop stop-color="#FF1C68" offset="0%" />
                <stop stop-color="#DB0068" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path
                fill="url(#posepurple)"
                transform="translate(0 -1)"
                d="M17.2 33.1h61.6c32 0 48.8 21.2 48.8 47.6 0 30.2-21.9 57.5-59.8 57.5H44L38.8 190H.8L17.2 33.1zm56.5 35.7H51.4l-3.9 35.6h21.6c13 0 20.5-8.5 20.5-19.7 0-8-5-16-15.9-16zm140.5-38c42.5 0 74.7 31.3 74.7 72.3a89.4 89.4 0 0 1-90.1 89.2c-42.1 0-74.3-31.5-74.3-72.2 0-49.5 40-89.3 89.7-89.3zm-3 36.4c-25.8 0-48.3 22-48.3 49.2a38.7 38.7 0 0 0 38.9 39.6c25.3 0 48.7-22.1 48.7-49.3a39 39 0 0 0-39.3-39.5zm187.3-26.7l-4.1 37.3S375 66.5 350.2 66.5c-9 0-18.6 3.4-18.6 11.3 0 17.4 68.8 13.5 68.8 62.3 0 29.2-21.6 52.2-66.3 52.2-30.1 0-51.7-12.2-51.7-12.2l4.1-38.4s23.7 14.7 48.6 14.7c12.6 0 24.8-3.4 24.8-13.3 0-19.6-67-14.7-67-62.8 0-32.4 30-49.5 60.8-49.5a100 100 0 0 1 44.8 9.7zm121.2 113.8h-77l2.8-26h64.4l3.6-34.9h-64.4l2.6-24.6h75.6L531 33H417.4L401 190h115l3.6-35.7z"
              />
              <g transform="translate(549 -1)" fill="url(#posered)">
                <path d="M31.6 1.7A31.9 31.9 0 0 0 0 34 31.9 31.9 0 0 0 31.6 66C48.2 66 61.7 53 63 36.5a23.2 23.2 0 0 1-12.4 3.4h-8.9l-2 19.6h-14l5.9-57.8z" />
                <path d="M52.8 13.5c4 0 5.9 3 5.9 6 0 4.3-2.8 7.6-7.6 7.6h-8l1.4-13.6h8.3z" />
              </g>
            </g>
          </svg>
        </Slide>

        <Slide>
          <FullscreenImage src={poseDemoSrc} />
        </Slide>

        <Slide>
          <img src={rftLogoSrc} style={{ width: 450 }} />
        </Slide>

        <Slide bgColor="secondary">
          <FullscreenImage src={reactFlipToolkitSrc} />
        </Slide>

        <Slide>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <img src={rftLogoSrc} style={{ height: 100 }} />
              <br />
              <br />
              <a href="https://codesandbox.io/s/k5kvk4l95">
                codesandbox.io/s/k5kvk4l95
              </a>
              <br />
              <br />
              <Text style={{ fontSize: 20 }}>Thanks to Alex Holachek</Text>
            </div>
            <div style={{ flex: 1 }}>
              <svg
                height={100}
                viewBox="0 0 613 192"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    x1="8.5%"
                    y1="0%"
                    x2="8.5%"
                    y2="81.7%"
                    id="posepurple"
                  >
                    <stop stop-color="#ED00BB" offset="0%" />
                    <stop stop-color="#A100F6" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="posered"
                  >
                    <stop stop-color="#FF1C68" offset="0%" />
                    <stop stop-color="#DB0068" offset="100%" />
                  </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="url(#posepurple)"
                    transform="translate(0 -1)"
                    d="M17.2 33.1h61.6c32 0 48.8 21.2 48.8 47.6 0 30.2-21.9 57.5-59.8 57.5H44L38.8 190H.8L17.2 33.1zm56.5 35.7H51.4l-3.9 35.6h21.6c13 0 20.5-8.5 20.5-19.7 0-8-5-16-15.9-16zm140.5-38c42.5 0 74.7 31.3 74.7 72.3a89.4 89.4 0 0 1-90.1 89.2c-42.1 0-74.3-31.5-74.3-72.2 0-49.5 40-89.3 89.7-89.3zm-3 36.4c-25.8 0-48.3 22-48.3 49.2a38.7 38.7 0 0 0 38.9 39.6c25.3 0 48.7-22.1 48.7-49.3a39 39 0 0 0-39.3-39.5zm187.3-26.7l-4.1 37.3S375 66.5 350.2 66.5c-9 0-18.6 3.4-18.6 11.3 0 17.4 68.8 13.5 68.8 62.3 0 29.2-21.6 52.2-66.3 52.2-30.1 0-51.7-12.2-51.7-12.2l4.1-38.4s23.7 14.7 48.6 14.7c12.6 0 24.8-3.4 24.8-13.3 0-19.6-67-14.7-67-62.8 0-32.4 30-49.5 60.8-49.5a100 100 0 0 1 44.8 9.7zm121.2 113.8h-77l2.8-26h64.4l3.6-34.9h-64.4l2.6-24.6h75.6L531 33H417.4L401 190h115l3.6-35.7z"
                  />
                  <g transform="translate(549 -1)" fill="url(#posered)">
                    <path d="M31.6 1.7A31.9 31.9 0 0 0 0 34 31.9 31.9 0 0 0 31.6 66C48.2 66 61.7 53 63 36.5a23.2 23.2 0 0 1-12.4 3.4h-8.9l-2 19.6h-14l5.9-57.8z" />
                    <path d="M52.8 13.5c4 0 5.9 3 5.9 6 0 4.3-2.8 7.6-7.6 7.6h-8l1.4-13.6h8.3z" />
                  </g>
                </g>
              </svg>
              <br />
              <br />
              <a href="https://codesandbox.io/s/81219qyo02">
                codesandbox.io/s/81219qyo02
              </a>

              <br />
              <br />
              <Text style={{ fontSize: 20 }}>
                Thanks to{' '}
                <a href="https://twitter.com/AndaristRake">Mateusz Burzyński</a>
              </Text>
            </div>
          </div>
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

        <Slide bgColor="#fdd835">
          <FullscreenImage src={houdiniSrc} />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          transition={['none']}
          code={require('./code/HoudiniPaintWorklet.example')}
          ranges={[
            {
              loc: [0],
              title: 'Houdini Paint',
            },
            { loc: [0, 1] },
            { loc: [1, 2] },
            { loc: [2, 3] },
            { loc: [3, 4] },
            { loc: [4, 5] },
            { loc: [6, 7] },
            { loc: [10, 11] },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          lang="html"
          transition={['none']}
          code={require('./code/HoudiniPaintUsage.example')}
          ranges={[
            {
              loc: [0],
              title: 'Houdini Paint Usage',
            },
            { loc: [3, 6] },
            { loc: [9, 12] },
          ]}
        />

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
          <Heading textColor="primary" size={3}>
            Skipping animations on request.
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
          <Heading size={4}>
            At Khan Academy, we have a{' '}
            <span style={{ color: COLORS.green[700], fontFamily: 'monospace' }}>
              disable-animations
            </span>{' '}
            property on our user model. We check that as well as{' '}
            <span style={{ color: COLORS.green[700], fontFamily: 'monospace' }}>
              prefers-reduced-motion
            </span>
            .
          </Heading>
        </Slide>

        <Slide />

        <Slide>
          <Heading textColor="purple" size={5}>
            It's getting easier than ever to create
          </Heading>

          <Heading textColor="pink" size={3}>
            delightful experiences.
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={5}>
            There's an ecosystem of
          </Heading>

          <Heading textColor="pink" size={3}>
            amazing tools.
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={5}>
            The platform is getting
          </Heading>

          <Heading textColor="pink" size={3}>
            so powerful.
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={5}>
            We're just at the beginning.
          </Heading>

          <Heading textColor="pink" size={3}>
            Come help build stuff!
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
