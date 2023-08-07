const Projectcards = (props) => {
    return (
        <div className="Projectcards">
            
            <div className="cards">
                <img src={props.imgs} alt={props.alt} className='cardimg'/>
                <div className="cardname">{props.heading}</div>
            </div>

        </div>
    )
};

export default Projectcards;