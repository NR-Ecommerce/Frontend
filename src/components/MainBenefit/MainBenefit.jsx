import './MainBenefit.scss'

const MainBenefit = ({step,title,dec,color,bgcolor,img}) => {
  return (
    <div className='mainBenefit'>
      <img src={img} alt="pic"  className="mainBenefit__pic"/>
      <div style={{backgroundColor:`${bgcolor}`,color:`${color}`}} className="mainBenefit__step">{step}</div>
      <div className="mainBenefit__title">{title}</div>
      <div className="mainBenefit__dec" >{dec}</div>
    </div>
  )
}

export default MainBenefit