import React, { useState } from 'react';
import './App.css';

const Post = (props) => {
  const [likeCounter, setLikeCounter] = useState(props.currentlikes);
  const [liked, setLiked] = useState(false);
  const [likeImg, setLikeImg] = useState('/pictures/like.png');
  const [savedImg, setSavedImg] = useState('/pictures/save.png');
  const [saved, setSaved] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      setLikeCounter(likeCounter + 1);
      setLikeImg('/pictures/liked.png');
    } else {
      setLikeCounter(likeCounter - 1);
      setLikeImg('/pictures/like.png');
    }
    setLiked(!liked);
  };

  const handleSavedClick = () => {
    if (!saved) {
      setSavedImg('/pictures/saved.png');
    }
    else {
      setSavedImg('/pictures/save.png');
    }
    setSaved(!saved);
  }


  return (
    <div>
      <div className='user'>
        <img src={props.profilesrc} className='iconImg' />
        <h3 className='username'>{props.username}</h3>
        <h3>...</h3>
      </div>
      <img src={props.postsrc} className='picture' />
      <div className='icons'>
        <div className='firstIcons'>
          <img 
            src={likeImg} 
            className='likepic'
            onClick={handleLikeClick}
          />
          <img src='/pictures/comment.png' className='commentpic' />
          <img src='/pictures/share.png' className='sharepic' />
        </div>
        <img src={savedImg} className='savepic' onClick={handleSavedClick}/>
      </div>
      <p className='likestext'>Liked by <span>{props.otherUser}</span> and {likeCounter - 1} <span>others</span></p>
      <h3 className='caption'> {props.username} <span className='quote'>{props.quote}</span> <span className='hashtags'>{props.tags}</span></h3>
      <p className='viewComm'>View all {props.currentcomm} comments</p>
      <div className='addComm'>
        <img src={props.currentpf} className='smallpf'></img>
        <h3 className='addc'>Add a comment...</h3>
      </div>
      <p className='timePosted'>{props.timeposted} minutes ago</p>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Post currentpf='/pictures/prof1.jpeg' profilesrc='/pictures/prof1.jpeg' username='stevemc6732' postsrc='/pictures/pic.jpeg' otherUser='alexmc458' quote='With my love!' tags='@alexmc458 #beach #sun #water #sand' currentlikes={50} timeposted={38} currentcomm={4} />
      <Post currentpf='/pictures/prof1.jpeg' profilesrc='/pictures/prof2.png' username='alexmc458' postsrc='/pictures/pic2.jpg' otherUser='stevemc6732' quote='The love of my life<3' tags='@stevemc6732 #beach #sunset' currentlikes={97} timeposted={42} currentcomm={12}/>
      <Post currentpf='/pictures/prof1.jpeg' profilesrc='/pictures/prof3.jpeg' username='alexmc458' postsrc='/pictures/pic3.jpg' otherUser='michelleangston' quote='The cutest cat!' tags='#cat #adorable #love #lovecats #catmom #catperson #cute #kittens #kitten #cats' currentlikes={576} timeposted={58} currentcomm={98}/>
    </div>
  );
}

export default App;
