import React from "react";

export default async function UserDetails({ params }: { params: { id: string } }) {
    const {id}= await params
    
  return <div>UserDetails id {id}</div>;
}
//users/2
