import { useMemo, useRef } from "react";
import PropTypes from "prop-types";
import ReactTableUI from "react-table-ui";

export const GridForResultOfQuery = ({ data }) => {
  // Create an instance ref that will hold the reference to React Table instance.
  const tableInstanceRef = useRef(null);
  return (
    <ReactTableUI
      title="Resultados de la Consulta"
      data={data}
      tableInstanceRef={tableInstanceRef}
    />
  );
};

GridForResultOfQuery.propTypes = {
  data: PropTypes.array,
};
