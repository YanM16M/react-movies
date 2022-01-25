import React, { useState, useEffect} from 'react';
import {movies$} from '../movies.js';
import './Home.css';
import Card from '../components/Card'
import Button from '../components/Button';
import ComboBox from '../components/ComboBox'


function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [maxElement, setMaxElement] = useState(8);
    const [movs, setMovies] = useState([]);
    const [filter, setFilter] = useState([]);
    const [arrayMovie, setArrayMovie] = useState([]);

    useEffect(() => {
        movies$.then((resolve) => {
            const arr = [];
            setMovies(resolve);
        }
        ); 
    }, []);

    const getStartLoop = () => {
        return (currentPage - 1) * maxElement;
    }

    const getEndLoop = () => {
        return getStartLoop() + maxElement;
    }

    const PreviousPage = () => {
        setCurrentPage(currentPage - 1);
    }

    const NextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const getMaxPages = () => {
        return movs.length / maxElement;
    }

    const handleDeleteCard = (index) => {
        const arr = movs.filter((item) => item.id != index);
        setMovies(arr);
    }

    const showMovies = () => {
        let array = [];

        if (filter.length === 0) {
            array = [...movs];
        }
        else {
            for (let i = 0; i < movs.length; i++) {
                if (filter.some(e => e.value === movs[i].category)) {
                    array.push(movs[i]);
                }
            }
        }

        return array.slice(getStartLoop(),getEndLoop()).map(movie => (
            <Card info={movie} onDeleteCard={() => handleDeleteCard(movie.id)} key={movie.id}></Card>
        ));
  
    }

    const getCategories = () => {
        const arr = []; const label = [];
        let n = 0;
        for(let i = 0; i < movs.length; i++) {
            if (!label.includes(movs[i].category)) {
                arr.push({id: n, value: movs[i].category, selected: false});
                n++;
            }
            label.push(movs[i].category);
            //if (!arr.some(e => e.category === movs[i].category)) {
                //arr.push({id: i, value: movs[i].category, selected: false});
            //}
        }
        return arr;
    }

    return ( 
        <div className="home__container">
            <div className="filter__container">
                <span>Trier par :</span>
                <div className="combo__container">
                    {
                        getCategories().length > 0 &&
                        <ComboBox onChange={setFilter} list={getCategories()}></ComboBox>
                    }
                </div>
            </div>
            <div className="movies__container">
                {
                    showMovies()
                }
            </div>
            <div className="button-pagination__container">
                {currentPage > 1 && <Button value="Précédent" onClick={() => PreviousPage()}></Button> }
                <span>{currentPage}</span>
                {getMaxPages() > currentPage &&<Button value="Suivant" onClick={() => NextPage()}></Button>}
            </div>
        </div>
     );
}

export default Home;