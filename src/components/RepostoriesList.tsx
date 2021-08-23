import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {actionCreators} from "../state";

const RepostoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    dispatch(actionCreators.searchRepositories(term))


  }


  return <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={(e)=> setTerm(e.target.value)} />
      <button>Search</button>
    </form>

  </div>
}


export default RepostoriesList
