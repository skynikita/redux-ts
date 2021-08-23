import React from "react";
import {useState} from "react";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const RepostoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  const {data, error, loading} = useTypedSelector((state)=>state.repositories);


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    searchRepositories(term)

  }


  // @ts-ignore
  // @ts-ignore
  return( <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={(e)=> setTerm(e.target.value)} />
      <button>Search</button>
    </form>
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading && data?.map((name: string)=> <div key={name}>{name}</div>)}
  </div>
)
}


export default RepostoriesList
