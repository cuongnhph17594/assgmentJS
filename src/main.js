import Navigo from 'navigo';
import Header from './components/header';
import AboutPage from './page/about';
import HomePage from './page/home';

const router = new Navigo("/", {linksSelector: "a"});
const render =  (content) => {
   // console.log(content); //{print()}
   document.getElementById("header").innerHTML = Header.print();
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render(AboutPage.print());
    },
    
});

router.resolve();
