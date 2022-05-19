import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from 'src/redux/store'
//src/Redux/store.ts
import { loadData, startClock, tickClock } from 'src/redux/actions'
import Page from '../components/page'

  const Watch = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
}

/*export const getStaticProps = wrapper.getStaticProps(async (props) => {
  
  store.dispatch(tickClock(false))
  console.log('props:',props)
  if (!props.getState().placeholderData) {
    props.dispatch(loadData())
    props.dispatch(END)
  }
  await props.sagaTask.toPromise()
})*/

export const getServerSideProps = wrapper.getServerSideProps(
(store) =>
    async ({ req, res }) => {
   
      await store.dispatch(tickClock(false));
      
    });






export default Watch
