// Use type safe message keys with `next-intl`
type Messages = typeof import('./src/messages/pt-br.json');
declare interface IntlMessages extends Messages {}