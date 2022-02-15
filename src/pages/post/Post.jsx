import SinglePost from '../../components/singlePost/SinglePost';
import Sidbar from '../../components/sidbar/Sidbar';
import './post.scss';

export default function Post() {
  return (
      <>
        <div className="postPage">
            <SinglePost />
            <Sidbar />
        </div>
    </>
  )
}
