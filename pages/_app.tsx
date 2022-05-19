import { END } from 'redux-saga';
import wrapper, { SagaStore } from 'src/redux/store'                   
import '../styles/global.css'

 function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

App.getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {
    
    (store as SagaStore).runSaga();

    // 1. Wait for all page actions to dispatch
    const pageProps = {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        namespacesRequired: ['common']
    };

    // 2. Stop the saga if on server
    if (store && ctx.req) {
        store.dispatch(END);
        await (store as SagaStore).sagaTask.toPromise();
    }

    // 3. Return props
    return {
        pageProps
    };
});

export default  wrapper.withRedux(App)