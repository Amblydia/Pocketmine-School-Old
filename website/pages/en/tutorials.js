/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader t-header">
            <h1>Tutorials</h1>
            <hr></hr>
          </header>
          <div className="tutorial-grid">
            <a href="htmap/introduction" className="tutorial-box">
                <div className="how-to">
                    <h5>How To Make a Plugin?</h5>
                    <p>Learn on how to make a pocketmine plugin.</p>
                </div>
            </a>
            <a href="htufa/introduction" className="tutorial-box">
                <div className="how-to">
                    <h5>How to use FormAPI</h5>
                    <p>Ever wanted to create forms?Here is a guide.</p>
                </div>
            </a>
            <a href="" className="tutorial-box">
                <div className="how-to">
                    <h5>Coming Soon</h5>  
                </div>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
