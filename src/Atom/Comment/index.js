import UserInfo from "../UserInfo"

let Comment = (props)=>{
    return(
        <div className="Comment">
      <UserInfo></UserInfo>
      <div className="Comment-text">
        Halo, Perkenalkan nama saya Daniel Chandra!!!
      </div>
      <div className="Comment-date">
        Saya lahir pada tanggal 17 Agustus 1945.
      </div>
    </div>
    )
}

export default Comment;