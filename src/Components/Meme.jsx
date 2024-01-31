import React, { memo } from "react";
export default function Meme() {
		const meme ={
			topText:"",
			bottomText:"",
			randomImage:"http://i.imgflip.com/1bij.jpg"
		}
		const [memeImage , setMemeImage] = React.useState(meme);
		const [allMemeImages, setAllMemeImages] = React.useState([])
		React.useEffect(()=>{
			fetch("https://api.imgflip.com/get_memes").then(res => res.json())
			.then(data => setAllMemeImages(data.data.memes))
		},[])
		console.log(allMemeImages)
		function getImage(e){
			e.preventDefault();
		const random = Math.floor(Math.random() * allMemeImages.length);
		const memeUrl = allMemeImages[random].url;
		setMemeImage(prevData=>({...prevData, randomImage:memeUrl}))
		console.log(memeUrl)
	}
	function handleChange(e){
		const {name, value} = e.target
		setMemeImage(prevData=>({...prevData, [name]: value}))
	}
	return (
	<main>
		<div className="meme">
			<form action="" onSubmit={getImage}>
				<div className="one">
					<p>Top Text</p>
					<input type="text" placeholder="Shut up" name="topText" value={memeImage.topText} onChange={handleChange}/>
				</div>
				<div className="two">
					<p>Buttom Text</p>
					<input type="text" placeholder="And Take My Money" name="bottomText" value={memeImage.bottomText} onChange={handleChange}/>
				</div>
				<button>Get a new meme image  🖼</button>
			</form>
		</div>
		<div className="image-content">
			<p>{memeImage.topText}</p>
			<p>{memeImage.bottomText}</p>
		<img src={memeImage.randomImage} alt="The Meme" />
		</div>
	</main>
	);
}
