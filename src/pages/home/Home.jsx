import './home.scss'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidbar from '../../components/sidbar/Sidbar'

export default function Home() {
  return (
      <>
        <Header />
        <div className="home">
            <Posts />
            <Sidbar />
        </div>
    </>
  )
}
