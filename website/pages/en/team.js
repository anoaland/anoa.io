/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container

class Users extends React.Component {
  render() {
    const developers = [
      {
        link: 'http://www.budiadiono.com',
        name: 'Budi Adiono',
        image:
          'https://s.gravatar.com/avatar/01ba12c11ee33d09e57177cba668feff?s=80',
        title: 'Creator @ Anoa-CLI'
      }
    ]

    const communities = [
      {
        link: 'https://www.instagram.com/hendyogga/',
        name: 'Hendy Yoga',
        image:
          'https://scontent-sin2-2.cdninstagram.com/vp/a52cb05791bd559604d9548834070907/5CA574DA/t51.2885-19/12301414_1191554344207684_1565340345_a.jpg?_nc_cat=104',
        title: 'Anoa-CLI Logo Creator'
      },
      {
        link: 'https://medium.com/@ariaseta',
        name: 'Ariaseta Setia Alam',
        image:
          'https://miro.medium.com/fit/c/240/240/1*ekSIVrFAfCNX3DAcqMpo0g.jpeg',
        title: 'VP Product Development @ Santren Koding'
      }
    ]

    const Teams = props => (
      <div className="showcaseSection">
        <div className="prose">
          <h2>{props.title}</h2>
        </div>
        <div className="logos">
          {props.members.map(user => (
            <a className="team" href={user.link} key={user.link} target="blank">
              <span className="avatar">
                <img src={user.image} alt={user.name} title={user.name} />
              </span>
              <div>
                <strong>{user.name}</strong>
              </div>
              <div>{user.title}</div>
            </a>
          ))}
        </div>
      </div>
    )

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <Teams title="Developers" members={developers} />
          <Teams title="Communities" members={communities} />
        </Container>
      </div>
    )
  }
}

module.exports = Users
