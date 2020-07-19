/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Header = () => (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col col-6 header-title">
              <h1>A Website That Teaches You About PocketMine Plugin Development</h1>
              <a href="tutorials" className="btn btn-black">Tutorials</a>
            </div>
            <div className="col col-6">
              <img src="./img/vscode.png" className="vscodeimg"/>
            </div>
          </div>
        </div>
      </div>
    );

    const Section = () => (
    <div className="section">
        <div className="mpts">
            <div className="container" id="goto">
                <div className="text-center"><h2>Tutorials</h2></div>
                <hr></hr>
                <div className="tutorial-grid">
                    <a href="htmap/introduction" className="tutorial-box">
                        <div className="how-to">
                            <h5>How To Make a Plugin?</h5>
                            <hr></hr>
                            <p>Learn on how to make a pocketmine plugin.</p>
                        </div>
                    </a>
                    <a href="htufa/introduction" className="tutorial-box">
                        <div className="how-to">
                            <h5>How to use FormAPI</h5>
                            <hr></hr>
                            <p>Ever wanted to create forms? Here is a guide.</p>
                        </div>
                    </a>
                    <a href="" className="tutorial-box">
                        <div className="how-to">
                            <h5>Coming Soon</h5>  
                        </div>
                    </a>
                </div>
                <div className="col text-center">
                    <a href="tutorials" className="btn btn-black">More Tutorials &gt;</a>
                </div>
            </div>
        </div>
    </div>
    );

    return (
      <div>
          <Header />
          <Section />
      </div>
    );
  }
}

module.exports = Index;
