import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import SearchForm from './SearchForm';
import TitleList from './TitleList';
import NotFound from './NotFound';
import LoadingSpinner from "./LoadingSpinner";
import { fetchTitlesFromAPI } from '../actions/titlesActions';


const AllTitles = () => {
  const titles = useSelector(store => store.titles);
  const [selectedTitles, setSelectedTitles] = useState(titles);
  const [searchTerm, setSearchTerm] = useState("");
  const [infoLoaded, setInfoLoaded] = useState(false);
  const dispatch = useDispatch();

  function search(searchTerm) {
    setSelectedTitles(titles);
    if (searchTerm)
      setSelectedTitles(
        titles => titles.filter(title => title.itemName.includes(searchTerm))
      );
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    const updateTitiles = async () => {
      await dispatch(fetchTitlesFromAPI());
      setInfoLoaded(true);
    };
    setInfoLoaded(false)
    updateTitiles();
  }, [dispatch]);

  const renderedTitles = selectedTitles.length === 0
    ? <NotFound msg="Sorry, no posts found!" />
    : <TitleList titles={selectedTitles} />


  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <div className="AllTitles container">
      <SearchForm searchFor={search} />

      {selectedTitles.length !== titles.length &&
        <div>
          <button
            className="btn btn-info mb-3"
            onClick={() => { setSelectedTitles(titles); }}
          >Back
          </button>
          <h6>Search results for
            <i className="text-primary mx-2">{searchTerm}</i>
          </h6>
        </div>
      }

      {renderedTitles}
    </div>

  )
}

export default AllTitles;
