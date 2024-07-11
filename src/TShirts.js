import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Ts from '../src/Assets/Tshirt.jpeg'
import Rating from './Rating';
export default function AccordionUsage() {
  return (
    <div>
      
     
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          T-Shirts
        </AccordionSummary>
        <img src={Ts} alt='Tshirt' width='200px'/>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <Rating />
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>View</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
