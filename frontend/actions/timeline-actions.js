import { receiveAllData } from 'actions/application-actions';

export const fetchTimeline = (userId, timestamp = null) => (dispatch) => (
  $.ajax({
    method: 'POST',
    url: '/api/timeline',
    data: {
      user_id: userId,
      timestamp
    }
  }).then(
    (data) => dispatch(receiveAllData(data)),
    (error) => console.log(error)
  )
);
