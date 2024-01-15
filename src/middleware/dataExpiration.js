import { persistor } from '../store';

const expiryMiddleware = (store) => (next) => (action) => {
  if (action.type === 'persist/REHYDRATE') {
    const incoming = action.payload;
    const currentTime = Date.now();

    const isExpired =
      incoming && incoming.expiry && currentTime > incoming.expiry;
    if (isExpired) {
      // Clear expired data
      persistor.purge();
      return next({ ...action, payload: undefined });
    }
  }

  return next(action);
};

export default expiryMiddleware;
