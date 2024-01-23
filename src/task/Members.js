import React from "react";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const columns = [
  {
    name: "no",
    label: "no",
    options: {
     filter: true,
     sort: true,
    }
   },
 {
  name: "name",
  label: "FIRST NAME",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "description",
  label: "LAST NAME",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "respondant",
  label: "EMAIL",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "date",
  label: "MOBILE NUMBERS",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "comments",
  label: "ADDRESS",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: 'Status',
  label: "ROLE",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: 'actions',
  label: "ACTIONS",
  options: {
    filter: false,
    sort: false,
    customBodyRenderLite: () => (

    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="FileOpen" size="large">
        <FileOpenIcon fontSize="inherit" />
      </IconButton>
      <Button variant="contained" color="success">
        View
      </Button>
    </Stack>
  
    )
  },
  
 },
 
];

const data = [
 { no:"1",name: "Pooja Shetty", description: "Test Corp", respondant: "adv.abc", date: "3/1/202",comments:"hiring is on 3/1/2024",Status:" Inactive" },
 { no:"2",name: "Ram Sharma", description: "Test Desc", respondant: "adv.pqr", date: "27/7/2024",comments:"hiring is on 27/7/2024",Status:"Open " },
 
];

const options = {
  filterType: 'checkbox',
};

const Case = () => {

     
  return (
    <>
<MUIDataTable
  title={"TEAM MEMBERS"} 
  data={data}
  columns={columns}
  options={options}
/> 

    </>
  );
};
  export default Case;