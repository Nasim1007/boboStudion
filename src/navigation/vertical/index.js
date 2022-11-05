import { Mail, Home, Sun } from "react-feather"

export default [
  {
    id: "sevice",
    title: "Услуги и цены",
    icon: <Home size={20} />,
    navLink: "/service"
  },
  {
    id: "prosedur",
    title: "Процедуры о нас",
    icon: <Mail size={20} />,
    navLink: "/second-page"
  },
  {
    id: "news",
    title: "Новости",
    icon: <Sun size={20}/>,
    navLink: "/news"
  }
]
