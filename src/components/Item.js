const Item = ({item})=>{

    return (
        <div>
            <p>Some data</p>
            <p>{item.name}</p>
            <p>{item.desc}</p>
            <p>{item.status}</p>
        </div>
    );
}

export default Item;