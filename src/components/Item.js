const Item = ({item})=>{

    return (
        <div>
            <p>Some data</p>
            <p>{item.name}</p>
            <p>{item.desc}</p>
            <p style={item.status?{backgroundClip:'green'}:{backgroundClip:'red'}}>{item.status}</p>
        </div>
    );
}

export default Item;