interface SetAttributes {
  attributeName?: string;
  begin?: string;
  to?: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    set: SetAttributes;

  }
}
