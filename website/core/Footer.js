/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Tutorials</h5>
            <a href={this.docUrl('htmap/introduction', this.props.language)}>
              How to make a Plugin
            </a>
            <a href={this.docUrl('htufa/introduction', this.props.language)}>
              How to use FormAPI
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://discord.gg/EvUyyS7">Discord</a>
          </div>
          <div>
            <h5>More</h5>
            <a
              className="github-button"
              href="https://github.com/TeamUltraSoft/Pocketmine-School/"
              data-icon="mark-github"
              data-count-href="/TeamUltraSoft/Pocketmine-School/stargazers"
              data-show-count="true"
              data-count-aria-label="stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Github
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
