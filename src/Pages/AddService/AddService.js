import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/service/`, {
      method: "post",
      headers: {
        "content-type": "application/json",
        },
      body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => {
          console.log("data from",data);
      })
  };
  return (
    <div className="w-50 mx-auto">
      <h1>Please add a service</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <input placeholder="Name" className="mb-2" {...register("name")} />
        <textarea
          placeholder="Description"
          className="mb-2"
          {...register("description")}
        />
        <input
          placeholder="Price"
          className="mb-2"
          type={"number"}
          {...register("price")}
        />
        <input
          placeholder="Photo URL"
          className="mb-2"
          type={"url"}
          {...register("img")}
          required
        />
        <input type="submit" value={"Add Service"} />
      </form>
    </div>
  );
};

export default AddService;
