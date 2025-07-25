function Card({handleSelect, cardData}) {

    return <div class="card" onClick={handleSelect}>
        <img class="card-img" src={cardData.data.images.jpg.image_url} alt={cardData.data.name} />
        <p class="card-name">{cardData.data.name}</p>
    </div>
}

export default Card