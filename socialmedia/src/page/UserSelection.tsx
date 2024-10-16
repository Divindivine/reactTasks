import { useQuery } from "@tanstack/react-query";
import React from "react";

const queryFun = async () => {
  const response = await fetch("https://gorest.co.in/public/v2/users");
  return response.json();
};
function UserSelection() {
  // const {isPending, error, data} = useQuery({
  //   queryKey: ['users'],
  //   queryFn: ()=>{
  //     fetch('https://gorest.co.in/public/v2/users').then((res) => res.json())
  //   }
  // })
  const { isPending, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: queryFun,
  });
  console.log(data);
  if (isPending) return <span>loading</span>;
  if (error) return <span>an Error occured:</span>;
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}

export default UserSelection;


