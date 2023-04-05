export default function Card (props) {
  return (
    <div className="--grid-card" onClick={()=>props.click(props.number)}>
      This is card # {props.number}
    </div>
  )
}