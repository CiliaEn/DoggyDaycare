import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './catalog.css'


const Catalog = (props) => {

    const [dogs, setDogs] = useState([])

    let navigate = useNavigate();

    const handleDogClick = (dog) => {
        props.setDog(dog);
        navigate("/doginfo/")
    }

    useEffect(() => {
        const fetchDogs = async () => {
            let dogData = await getDogs();
            setDogs(dogData.record);
        }
        fetchDogs();
    }, []);

    const getDogs = async () => {
        const url = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126';
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }

    return (
        <section className='catalog' >
            <div className='listOfDogs' >
                {dogs.map((dog, index) => (
                    <div key={index} onClick={() => handleDogClick(dog)} className='dogItem'>
                        <img src={dog.img} alt="Picture of dog" className='dogPicture' />
                        <h2 >{dog.name}, {dog.age}</h2>
                        <p>Owner: {dog.owner.name}  {dog.owner.lastName}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Catalog;