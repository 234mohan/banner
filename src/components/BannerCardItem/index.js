import './index.css'

 const BannerCardItem = props =>{
    const {bannerCard} = props;
    const {headertext, description,className} = bannerCard;

   return (
    <li className={className}>
      <h1> {headertext}</h1>
      <p> {description}</p>
      <button> Show More </button>  
    </li>
  )
}

export default BannerCardItem
