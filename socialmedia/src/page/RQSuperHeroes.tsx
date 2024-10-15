import { useQuery } from "react-query";
import axios from "axios";
import { superHeroElementType } from "../type/type";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

function RQSuperHeroes() {
  const onSuccess = () => {
    console.log("Perform side effect after data fetching");
  };

  const onError = () => {
    console.log("Perform side effect after enocountering error");
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
    }
  );

  console.log(isLoading, isFetching);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{}</h2>;
  }
  return (
    <>
      <h1>RQ Super Heroes page</h1>
      {data?.data.map((hero: superHeroElementType) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
}

export default RQSuperHeroes;