import React, { useEffect, useState } from "react";
import CheckData from "./CheckData";
import { tableHeader, TYPE_COLORS } from "../constant/constant";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { dataLoaderAction } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { isBlanckData } from "../utils/utils";

const TableData = () => {
  const dispatch = useDispatch();
  const [typeData, setTypeData] = useState([]);

  const {
    dataLoading,
    dataSuccess = {},
    dataError,
  } = useSelector((state) => state.dataReducer);

  useEffect(() => {
    dispatch(dataLoaderAction());
  }, [dispatch]);

  useEffect(() => {
    !isBlanckData(dataSuccess, Object) && setTypeData(dataSuccess.items);
  }, [dataSuccess]);

  const checkboxClick = (data) => {
    const filteredData = dataSuccess?.items?.filter((val) => {
      return data.indexOf(val.type) !== -1;
    });
    setTypeData(filteredData);
  };

  if (dataLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "15%",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="success" />
      </Box>
    );
  } else if (dataError) {
    return <div>Error</div>;
  } else {
    return (
      <>
        <CheckData checkboxClick={checkboxClick} />
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 550 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              aria-label="caption table"
            >
              <TableHead>
                <TableRow>
                  {tableHeader.map((data, key) => {
                    return <TableCell key={key}>{data}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {typeData?.map((row) => (
                  <TableRow
                    key={row.index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      style={{ backgroundColor: `${TYPE_COLORS[row.type]}` }}
                      component="th"
                      scope="row"
                    >
                      {row.index}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.email}
                    </TableCell>
                    <TableCell align="left">{row.fullName}</TableCell>
                    <TableCell align="left">{row.wallet1}</TableCell>
                    <TableCell align="left">{row.wallet2}</TableCell>
                    <TableCell align="left">{row.wallet3}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </>
    );
  }
};
export default TableData;
