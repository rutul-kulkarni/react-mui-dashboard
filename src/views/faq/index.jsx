import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const faqList = [
    {
      title: "An Important Question",
      information:
        "The writer has no idea what topic the random paragraph will be about when it appears.",
    },
    {
      title: "Another Important Question",
      information:
        "The writer has no idea what topic the random paragraph will be about when it appears.",
    },
    {
      title: "Your Favorite Question",
      information:
        "The writer has no idea what topic the random paragraph will be about when it appears.",
    },
    {
      title: "Some Random Question",
      information:
        "The writer has no idea what topic the random paragraph will be about when it appears.",
    },
    {
      title: "The Final Question",
      information:
        "The writer has no idea what topic the random paragraph will be about when it appears.",
    },
  ];
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {faqList.map((val) => (
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {val.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{val.information}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
