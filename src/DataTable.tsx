import {
  Box,
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface DataTableProps {
  category: string | null;
}

const API_URL = process.env.REACT_APP_API_BASE_URL;

const DataTable = (props: DataTableProps) => {
  const { category } = props;
  const [frequentData, setFrequentData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          category === "IVF"
            ? `${API_URL}/frequent2`
            : `${API_URL}/frequent`;
        const response = await axios.get(url);
        setFrequentData(response.data); 
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
  
    fetchData();
  }, [category, API_URL]);

  const totalPages = Math.ceil(frequentData.length / rowsPerPage);
  const paginatedData = frequentData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <TableContainer
        sx={{
          height: 480,
          overflow: "auto",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {[
                "New Releases ( 20 )",
                "Range",
                "Unit",
                "Coverage",
                "Actions",
              ].map((header, idx) => (
                <TableCell key={idx}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {header}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body1">
                    <b>{row.title}</b>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "green" }}>
                    {row.cat}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.subset}</Typography>
                  <Typography variant="body2" sx={{ color: "green" }}>
                    {row.freq}
                  </Typography>
                </TableCell>
                <TableCell>{row.unit}</TableCell>
                <TableCell>
                  <Box
                    component="span"
                    sx={{
                      color: "orange",
                      borderRadius: 1,
                      p: 1,
                      m: 0.5,
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {row.datatype}
                  </Box>
                </TableCell>
                <TableCell>
                  {["BookmarkBorder", "AddBox", "PushPin", "MoreVert"].map(
                    (icon, idx) => (
                      <IconButton
                        key={idx}
                        sx={{
                          color: "black",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 255, 0.1)",
                            color: "blue",
                          },
                        }}
                      >
                        {React.createElement(
                          require("@mui/icons-material")[icon]
                        )}
                      </IconButton>
                    )
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="center" my={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </>
  );
};

export default DataTable;
