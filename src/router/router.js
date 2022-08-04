import Home from "@/Views/Home";
import Blog from "@/Views/Blog";
import Project from "@/Views/Project";
import Message from "@/Views/Message";
import Aboutme from "@/Views/Aboutme";
import BlogDetail from "@/Views/Blog/Detail";

export default [
  { name: "Home", path: "/", component: Home },
  { name: "Aboutme", path: "/about", component: Aboutme },
  { name: "Blog", path: "/blog", component: Blog },
  { name: "CategoryBlog", path: "/blog/cate/:categoryId", component: Blog },
  { name: "BlogDetail", path: "/blog/:id", component: BlogDetail },
  { name: "Project", path: "/project", component: Project },
  { name: "Message", path: "/message", component: Message },
];
