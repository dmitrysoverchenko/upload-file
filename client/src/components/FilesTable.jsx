import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import { Button } from "@mui/material";
import { TablePaginationActions } from "./TablePaginationActions";

import { getFiles } from "../api/files";
import { deleteFile } from "../api/files";

const FilesTable = () => {
  const [files, setFiles] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - files.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getTableItems = () => {
    getFiles()
      .then((data) => {
        setFiles(data);
      })
      .catch((e) => {
        console.log("error");
      });
  };

  useEffect(() => {
    getTableItems();
  }, []);

  const removeFile = async (id) => {
    await deleteFile(id);
    getTableItems();
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">File name</StyledTableCell>
            <StyledTableCell align="right">Extension</StyledTableCell>
            <StyledTableCell align="right">Upload date</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? files.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : files
          ).map(({ id, filename, extension, upload_date }) => (
            <StyledTableRow key={id}>
              <StyledTableCell component="th" scope="row">
                {id}
              </StyledTableCell>
              <StyledTableCell align="right">{filename}</StyledTableCell>
              <StyledTableCell align="right">{extension}</StyledTableCell>
              <StyledTableCell align="right">
                {new Date(+upload_date).toUTCString().slice(5, 17)}
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <Button
                  onClick={() => {
                    removeFile(id);
                  }}
                >
                  delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
          {emptyRows > 0 && (
            <StyledTableRow style={{ height: 53 * emptyRows }}>
              <StyledTableCell colSpan={6} />
            </StyledTableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20, 25]}
              colSpan={3}
              count={files.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default FilesTable;
