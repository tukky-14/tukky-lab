import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

type Props = {
    title: string;
    children?: React.ReactNode;
};

const Expand = (props: Props) => {
    const { title, children } = props;

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{children}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default Expand;
