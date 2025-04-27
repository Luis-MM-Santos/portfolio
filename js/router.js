import routes from './routes.js';

async function launchController(controllerName) {
    try {
        const module = await import(`./controller/${controllerName}.js`);
        module.init();
    } catch (error) {
        console.error(error);
    }
}

function setAnchorEventListener() {
    document.body.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (anchor && anchor.href && anchor.host === location.host) {
            e.preventDefault();
            navigate(anchor.pathname);
        }
    });
}

function setCurrentRoute({ path, controller }) {
    routes.currentPath.path = path;
    routes.currentPath.controller = controller;
}

function handlePopState({ state }) {
    const route = state || routes.home;

    //Setting the current route
    setCurrentRoute(route);
    launchController(route.controller);
}

function navigate(path, firstLoad = false) {
    if (path === routes.currentPath.path) {
        return;
    }

    const routeKey = Object.keys(routes).find(key => routes[key].path === path);
    const route = routes[routeKey] || routes.home;

    //Setting the current route
    setCurrentRoute(route);

    firstLoad
        ? history.replaceState(route, '', route.path)
        : history.pushState(route, '', route.path);

    launchController(route.controller);
}

function init() {
    const path = window.location.pathname;

    navigate(path, true);
    addEventListener('popstate', handlePopState);
    setAnchorEventListener();
}

export default { init };
