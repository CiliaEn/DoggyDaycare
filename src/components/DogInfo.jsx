import './doginfo.css'

const DogInfo = (props) => {

    const dog = props.dog;

    return (
        <div className='dog-info'>
            <img src={dog.img} alt="Picture of dog" />
            <div>
                <h2>{dog.name}, {dog.age}</h2>
                <p>Breed: {dog.breed}</p>
                <p>Sex: {dog.sex}</p>
                <p>Chip Number: {dog.chipNumber}</p>
                <p>Present: {dog.present ? "Yes" : "No"}</p>
                <h3>Owner Information:</h3>
                <p>{dog.owner.name} {dog.owner.lastName}, {dog.owner.phoneNumber}</p>
            </div>
        </div>
    )
}

export default DogInfo