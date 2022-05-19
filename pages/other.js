import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { wrapper } from 'src/redux/store'
import { startClock, tickClock } from 'src/redux/actions'
import Page from '../components/page'

const Other = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return <Page title="Other Page" linkTo="/watch" NavigateTo="Index Page" />
}

/*export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(false))
})*/

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
      async ({ req, res }) => {
        await store.dispatch(tickClock(false));
      });



export default Other