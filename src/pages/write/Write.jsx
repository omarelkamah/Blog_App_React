import './write.scss'

export default function Write() {
  return (
    <>
        <div className="writeContainer">
            <img
                className="writeImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="UplodeImg">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="UplodeImg" className='file' />
                    <input type="text" className="writeInput" placeholder="Title" autoFocus />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Tell your story..."
                        type="text"
                    />
                </div>
                <div className="buttonGroup">
                    <button className='buttonSubmit'> Publish Now</button>
                </div>
            </form>
        </div>
    </>
  )
}
