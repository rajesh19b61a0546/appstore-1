import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {appId, appName, imageUrl} = eachItem

  return (
    <div className="con">
      <ul className="con1">
        <img src={imageUrl} className="image" alt={app-item${appId}} />
        <h1 className="heading">{appName}</h1>
      </ul>
    </div>
  )
}
export default AppItem
