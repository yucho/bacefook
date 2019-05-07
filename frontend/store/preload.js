const preloadState = () => {
  if(typeof window.bacefook === 'undefined') return {};

  const { currentUser, images } = window.bacefook;
  const state = { images, session: {} };
  state.session.id = currentUser || null;
  return state;
};

export default preloadState;
