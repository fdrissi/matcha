import {
  PHOTO_SUCCESS,
  INFO_SUCCESS,
  PROFILE_BLOCKED,
  PROFILE_LIKED,
  PROFILE_MATCHED,
  BROWSER_RETURN
} from "../actions/actionTypes";

export const profileInitState = {
  photo: {
    loading: true,
    profile_Image: "",
    cover_Image: "",
    first_Image: "",
    second_Image: "",
    third_Image: "",
    fourth_Image: ""
  },
  info: {
    loading: true,
    liked: false,
    matched: false,
    blocked: false,
    id: "",
    user_first_name: "",
    user_last_name: "",
    user_gender: "",
    user_relationship: "",
    user_birth_day: "",
    user_birth_month: "",
    user_gender_interest: "",
    user_birth_year: "",
    user_tags: "",
    user_city: "",
    user_current_occupancy: "",
    user_biography: "",
    user_set_from_map: null,
    user_online: false,
    user_location: {
      lat: "",
      lng: ""
    }
  },
  browser: {
    result: [],
    sort_by: ""
  }
};

export const profileReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case PHOTO_SUCCESS:
      return { ...state, photo: payload };
    case INFO_SUCCESS:
      return { ...state, info: payload };
    case PROFILE_BLOCKED:
      return { ...state, info: { ...state.info, blocked: payload } };
    case PROFILE_LIKED:
      return { ...state, info: { ...state.info, liked: payload } };
    case PROFILE_MATCHED:
      return { ...state, info: { ...state.info, matched: payload } };
    case BROWSER_RETURN:
      return { ...state, browser: { ...state.browser, result: payload } };
    default:
      return state;
  }
};
