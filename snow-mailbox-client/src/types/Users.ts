export interface IUsers {
  id?: any | null;
  name: string;
  email: string;
  locale?: string;
  sub?: string;
  nickname?: string;
}

export interface IMailbox {
  id?: any | null;
  name: string;
  user_id?: string;
  mailbox_color?: string;
  mailbox_decorations?: string;
}


export interface ICard {
  id?: any | null;
  card_color: string;
  card_sticker: string;
  card_deco: string;
  card_text: string;
}
