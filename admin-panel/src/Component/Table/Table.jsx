import "./Table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    {id: 244, name: "Frozen Yoghurt", calories: 159, Fat: 6.0, Carbs: 24, Protein: 4.0},
    {id: 235533, name: "Ice cream sandwich", calories: 237, Fat: 9.0, Carbs: 37, Protein: 4.3},
    {id: 3453, name: "Eclair", calories: 262, Fat: 16.0, Carbs: 24, Protein: 6.0},
    {id: 2456, name: "Cupcake", calories: 305, Fat: 3.7, Carbs: 67, Protein: 4.3},
    {id: 879879, name: "Gingerbread", calories: 356, Fat: 16.0, Carbs: 49, Protein: 3.9},
  ];

const Tables = () => {
  return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell className="tableCell">Dessert (100g serving)</TableCell>
                    <TableCell className="tableCell" align="right">Calories</TableCell>
                    <TableCell className="tableCell" align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell className="tableCell" align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell className="tableCell" align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                    <TableCell className="tableCell" component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell className="tableCell" align="right">{row.calories}</TableCell>
                    <TableCell className="tableCell" align="right">{row.Fat}</TableCell>
                    <TableCell className="tableCell" align="right">{row.Carbs}</TableCell>
                    <TableCell className="tableCell" align="right">{row.Protein}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
  )
}
export default Tables