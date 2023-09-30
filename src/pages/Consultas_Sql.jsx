import { useState } from "react";
import { useFetchData } from "../Hook/fetch_data";
import { FormQuestionSql, GridForResultOfQuery } from "../component";

const Consultas_Sql = () => {
  const { data, error, loading, setQuery } = useFetchData("");
  return (
    <div className="mt-10">
      <FormQuestionSql fun={setQuery} />
      <div className="mt-4">
        {loading ? <p>Loading ...</p> : <GridForResultOfQuery data={data} />}
      </div>
    </div>
  );
};

export default Consultas_Sql;
