export const factoryActions = ({
  singular,
  plural,
  url,
  RECEIVE_MANY,
  RECEIVE_ONE,
  REMOVE_ONE
}) => {
  const recMany = receiveMany(RECEIVE_MANY, plural);
  const recOne = receiveOne(RECEIVE_ONE, singular);
  const remOne = removeOne(REMOVE_ONE);
  const creOne = createOne(url, recOne);
  const fetOne = fetchOne(url, recOne);
  const desOne = destroyOne(url, remOne);
  const Singular = singular.charAt(0).toUpperCase() + singular.slice(1);
  const Plural = plural.charAt(0).toUpperCase() + plural.slice(1);
  return {
    [`create${Singular}`]: creOne,
    [`fetch${Singular}`]: fetOne,
    [`destroy${Singular}`]: desOne,
    [`receive${Plural}`]: recMany,
    [`receive${Singular}`]: recOne,
    [`remove${Singular}`]: remOne,
    RECEIVE_MANY,
    RECEIVE_ONE,
    REMOVE_ONE,
    singular,
    Singular,
    plural,
    Plural
  };
};

export const createOne = (url, next) => (record) => (dispatch) => (
  $.ajax({
    url,
    method: 'POST',
    data: record
  })
    .then(
      (success) => dispatch(next(success)),
      (error) => console.log(error)
    )
);

export const fetchOne = (url, next) => (id) => (dispatch) => (
  $.ajax({
    url: `${url}/${id}`,
    method: 'GET',
  })
    .then(
      (success) => dispatch(next(success)),
      (error) => console.log(error)
    )
);

export const destroyOne = (url, next) => ({ id }) => (dispatch) => (
  $.ajax({
    url: `${url}/${id}`,
    method: 'DELETE'
  })
    .then(
      () => dispatch(next(id)),
      (error) => console.log(error)
    )
);

export const receiveMany = (RECEIVE_MANY, plural) => (records) => ({
  type: RECEIVE_MANY,
  [plural]: records
});

export const receiveOne = (RECEIVE_ONE, singular) => (record) => ({
  type: RECEIVE_ONE,
  [singular]: record
});

export const removeOne = (REMOVE_ONE) => (id) => ({
  type: REMOVE_ONE,
  id
});
