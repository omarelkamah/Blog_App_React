import Sidbar from '../../components/sidbar/Sidbar'
import './settings.scss'

export default function Settings() {
  return (
    <>
        <div className="settingsContainer">
            <h1 className='settingsTitle'>
                Update Your Account
                <span className="deleteAccount">Delete Account</span>
            </h1>
            <div className="settingsWrapper">
                <div className="settingsForm">
                    <form>
                        <div className="settingsProfileImg">
                            <label className='labelImg'>Profile Picture</label>
                            <div className="imgContainer">
                                <img
                                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <label htmlFor="imgFile">
                                    <i className="settingsPPIcon far fa-user-circle"></i>
                                </label>
                                <input type="file" className='file'  id="imgFile" />
                            </div>
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="Aliaa Ahmed" name="name" />
                        <label>Email</label>
                        <input type="email" placeholder="aliaawork010@gmail.com" name="email" />
                        <label>Password</label>
                        <input type="password" placeholder="Password" name="password" />
                        <button className="settingsSubmitButton" type="submit">
                            Update
                        </button>
                    </form>
                </div>
                <Sidbar />
            </div>
        </div>
    </>
  )
}
