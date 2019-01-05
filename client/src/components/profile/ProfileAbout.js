import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import PropTypes from 'prop-types';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    const firstName = profile.user.name.trim().split(' ')[0];
    const gamesList = profile.games.map((game, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-gamepad" /> {game}
      </div>
    ));
    let inGameNames;
    if (profile.ingamenames) {
      inGameNames = (
        <div className="row p-3">
          {isEmpty(
            profile.ingamenames && profile.ingamenames.playstation
          ) ? null : (
            <div className="p-3">
              <i className="fab fa-playstation">
                {profile.ingamenames.playstation}
              </i>
            </div>
          )}
          {isEmpty(profile.ingamenames && profile.ingamenames.xbox) ? null : (
            <div className="p-3">
              <i className="fab fa-xbox"> {profile.ingamenames.xbox} </i>
            </div>
          )}
          {isEmpty(profile.ingamenames && profile.ingamenames.switch) ? null : (
            <div className="p-3">
              <i className="fab fa-nintendo-switch">
                {' '}
                {profile.ingamenames.switch}
              </i>
            </div>
          )}
          {isEmpty(profile.ingamenames && profile.ingamenames.steam) ? null : (
            <div className="p-3">
              <i className="fab fa-steam-square">
                {' '}
                {profile.ingamenames.steam}
              </i>
            </div>
          )}
          {isEmpty(
            profile.ingamenames && profile.ingamenames.discord
          ) ? null : (
            <div className="p-3">
              <i className="fab fa-discord"> {profile.ingamenames.discord}</i>
            </div>
          )}
        </div>
      );
    } else {
      inGameNames = <p className="text-center p-3">No Usernames Listed</p>;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3">
              <h3 className="text-center text-info">{firstName}'s Bio</h3>
              <p className="lead">
                {isEmpty(profile.bio) ? (
                  <span>{firstName} does not have a bio</span>
                ) : (
                  <span>{profile.bio}</span>
                )}
              </p>
              <hr />
              <h3 className="text-center text-info">Games</h3>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  {gamesList}
                </div>
              </div>
              <hr />

              <h3 className="text-center text-info">Usernames</h3>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  {inGameNames}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
