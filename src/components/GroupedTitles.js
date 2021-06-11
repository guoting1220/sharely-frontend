import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import TitleList from './TitleList';


const GroupedTitles = () => {
  const grouptype = useParams().grouptype;
  const value = useParams().value;

  const titles = useSelector(store => store.titles);
  const groupedTitles = titles.filter(title => title[grouptype] === value);

  let color;

  if (grouptype === "city") color = "success";
  else if (grouptype === "ageGroup") color = "info";
  else if (grouptype === "category") color = "warning";

  return (
    <div className="GroupedTitles container">
      <h5 className="my-4">Posts grouped by <i><b>{grouptype}</b></i> of <i className={`text-${color}`}>{`"${value}"`}</i>: </h5>
      <hr />
      <TitleList titles={groupedTitles} />
    </div>
  )
}

export default GroupedTitles;
