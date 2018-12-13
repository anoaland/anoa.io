/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')
const CompLibrary = require('../../core/CompLibrary.js')
const Container = CompLibrary.Container

class HomeSplash extends React.Component {
  render() {
    const { siteConfig } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`

    class Button extends React.Component {
      render() {
        return (
          <a
            className="big-button"
            href={this.props.href}
            target={this.props.target}
          >
            {this.props.children}
          </a>
        )
      }
    }

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const Logo = props => (
      <div className="project-logo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    )

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    )

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/anoa.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
        </div>
        <div>
          <Button
            href={docsPart + 'getting-started-installation'}
            target="_self"
          >
            Get Started
          </Button>
          <Button href={siteConfig.repoUrl} target="_blank">
            Github
          </Button>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props

    return (
      <Container padding={['bottom', 'top']}>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </Container>
    )
  }
}

module.exports = Index
