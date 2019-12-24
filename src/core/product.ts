export interface IProduct {
  img: string;
    name: string;
    text: string;
    info: string;
    desc: string;
    ingridients: Iingridient[];
    goal: string;
    eng: string;
}

export interface Iingridient {
  name: string;
  desc: string;
}