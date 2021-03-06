import * as APIUtil from '../util/track_api_util.js';

export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';

export const receiveAllTracks = (tracks) => {

  return({
    type: RECEIVE_ALL_TRACKS,
    tracks
  });
};

export const requestAllTracks = () => dispatch => {

  return(APIUtil.fetchTracks().then(
    tracks => dispatch(receiveAllTracks(tracks))
  ));
};
//-----------------------------------------------------------------
//-----------------------------------------------------------------
export const receiveTrack = ({ track, annotations, comments }) => {
  return({
    type: RECEIVE_TRACK,
    track,
    annotations,
    comments
  });
};

export const receiveErrors = errors => {
  return({
    type: RECEIVE_TRACK_ERRORS,
    errors
  });
};

export const requestTrack = (id) => dispatch => {
  return(APIUtil.fetchTrack(id).then(
    track => dispatch(receiveTrack(track))
  ));
};

export const createTrack = track => dispatch => {
  return(APIUtil.createTrack(track).then(
    track => dispatch(receiveTrack(track))
  )).fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateTrack = track => dispatch => {

  return(APIUtil.updateTrack(track).then(
    track => dispatch(receiveTrack(track))
  )).fail(err => dispatch(receiveErrors(err.responseJSON)));
};


//-----------------------------------------------------------------
//-----------------------------------------------------------------
export const removeTrack = (id) => {
  return({
    type: REMOVE_TRACK,
    trackId: id
  });
};

export const deleteTrack = id => dispatch => {
  return(APIUtil.deleteTrack(id).then(
    () => dispatch(removeTrack(id))
  ));
};
