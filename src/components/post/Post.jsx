import './post.scss'

export default function Post() {
  return (
    <div className="post">
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <div className="info">
            <div className="category">
                <span>Music</span>
                <span>Life</span>
            </div>
            <h3 className="title">Lorem ipsum dolor sit amet</h3>
            <span className="date">1 hour ago</span>
        </div>
        <p className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>

    </div>
  )
}
