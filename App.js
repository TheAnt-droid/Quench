import { router } from './router.js';
import TopBar from './components/Navigation/TopBar.js';
import NavBar from './components/Navigation/NavBar.js';

const { createApp } = Vue;

const htmlTemplate = /*html*/`

<div>
    <header>
        <TopBar/>
    </header>
    <main>
        <router-view></router-view>
    </main>
    <nav>
    <NavBar/>
    </nav>
</div>

`

const App = {
    template: htmlTemplate,
    components: {TopBar, NavBar},
};

createApp(App).use(router).mount('#app');
