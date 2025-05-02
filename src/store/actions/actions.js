export const TOGGLE_THEME = 'TOGGLE_THEME';
export const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE';


export function changeTheme() {
  return {
    type: TOGGLE_THEME,
  };
}

export function changeLanguage() {
    return {
      type: TOGGLE_LANGUAGE,
    };
  }