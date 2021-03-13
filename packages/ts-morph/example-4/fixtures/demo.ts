import { actionCreatorFactory } from 'vuex-typescript-fsa';

const actionCreator = actionCreatorFactory('foo');

export const Bar = actionCreator<null>('bar');
export const Baz = actionCreator<null>('baz');

export const initialState = () => {
  return {
    name: '',
  };
};
