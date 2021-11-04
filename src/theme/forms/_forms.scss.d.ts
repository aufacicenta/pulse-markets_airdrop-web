export type Styles = {
  active: string;
  "autocomplete-content": string;
  "browser-default": string;
  btn: string;
  caret: string;
  "character-counter": string;
  col: string;
  disabled: string;
  "dropdown-content": string;
  "file-field": string;
  "file-path": string;
  "file-path-wrapper": string;
  "filled-in": string;
  form: string;
  "helper-text": string;
  hiddendiv: string;
  highlight: string;
  inline: string;
  "input-field": string;
  invalid: string;
  "keyboard-focused": string;
  "label-icon": string;
  lever: string;
  "material-icons": string;
  "materialize-textarea": string;
  "mdi-navigation-close": string;
  "nav-wrapper": string;
  optgroup: string;
  "optgroup-option": string;
  prefix: string;
  "range-field": string;
  "select-dropdown": string;
  "select-label": string;
  "select-wrapper": string;
  selected: string;
  switch: string;
  tabbed: string;
  thumb: string;
  valid: string;
  validate: string;
  value: string;
  "with-gap": string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
