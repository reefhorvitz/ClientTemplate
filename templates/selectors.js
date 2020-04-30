import {createSelector} from 'reselect';

const _get = state => state.get('');

export const get = createSelector(
    _get,
    example => example
);