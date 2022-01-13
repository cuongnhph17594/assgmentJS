import Navigo from 'navigo';
import Header from './components/header';
import AboutPage from './page/about';
import AddNew from './page/add';
import Dashboard from './page/dashboard';
import edit from './page/edit';
import HomePage from './page/home';
import Loginpage from './page/login';
import LogUp from './page/logup';
import New from './page/new';

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
    "/login": () => {
        render(Loginpage.print());
    },
    "/logup": () => {
        render(LogUp.print());
    },
    "/dashboard": () => {
        render(Dashboard.print());
    },
    "/new": () => {
        render(New.print());
    },
    "/add": () => {
        render(AddNew.print());
    },
    "/admin/new/:id/edit": ({data}) => {
        const {id} = data;
        render(edit.print(id));
    }
});

router.resolve();
