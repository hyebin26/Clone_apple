import logo from "@icons/logo.svg";
import search from "@icons/search.svg";
import bag from "@icons/bag.svg";
import Hambuger from "./hambuger/hambuger";

export const NAVCONTENTS = [
  { id: 0, content: "logo", image: logo, to: "/" },
  { id: 1, content: "스토어", to: "/" },
  { id: 2, content: "Mac", to: "/" },
  { id: 3, content: "iPad", to: "/" },
  { id: 4, content: "iPhone", to: "/" },
  { id: 5, content: "Watch", to: "/" },
  { id: 6, content: "AirPods", to: "/" },
  { id: 7, content: "TV 및 홈", to: "/" },
  { id: 8, content: "Apple 독점 제공", to: "/" },
  { id: 9, content: "액세서리", to: "/" },
  { id: 10, content: "고객지원", to: "/" },
  { id: 11, content: "검색", image: search, to: "/" },
  { id: 12, content: "장바구니", image: bag, to: "/" },
];

export const MEDIAQUERYCONTENTS = [
  { id: 0, content: <Hambuger />, to: "/" },
  { id: 1, content: "logo", image: logo, to: "/" },
  { id: 2, content: "장바구니", image: bag, to: "/" },
];

export const HAMBUGERCONTENT = [
  { id: 0, content: "스토어", to: "/" },
  { id: 1, content: "Mac", to: "/" },
  { id: 2, content: "iPad", to: "/" },
  { id: 3, content: "iPhone", to: "/" },
  { id: 4, content: "Watch", to: "/" },
  { id: 5, content: "AirPods", to: "/" },
  { id: 6, content: "TV 및 홈", to: "/" },
  { id: 7, content: "Apple 독점 제공", to: "/" },
  { id: 8, content: "액세서리", to: "/" },
  { id: 9, content: "고객지원", to: "/" },
];
