export interface IUserList {
  currentPage: number;
  pageCount: number;
  total: number;
  data: Datum[];
}

export interface Datum {
  _id: string;
  username: string;
  email: string;
  password: string;
}

