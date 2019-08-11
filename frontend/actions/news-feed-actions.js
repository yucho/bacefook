import { receiveAllData } from 'actions/application-actions';

export const fetchNewsFeed = (timestamp = null) => (dispatch) => (
  $.ajax({
    method: 'POST',
    url: '/api/news_feed',
    data: { timestamp }
  }).then(
    (data) => dispatch(receiveAllData(data)),
    (error) => console.log(error)
  )
);
