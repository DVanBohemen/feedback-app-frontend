import { createReducer, on } from '@ngrx/store';
import { courseStore, courseRetrieve } from './course.actions';
import {CourseService} from "./services/course.service";

export const initialState = "Kennissessies";

const _counterReducer = createReducer(
  initialState,
  on(courseStore, (state) => state),
  on(courseRetrieve, (state) => state)
);
//
// export function counterReducer(state, action) {
//   return _counterReducer(state, action);
// }
