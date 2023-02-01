import { Button, Typography } from "@mui/material";
type fortext = {
  text: string;
};
export const CustomButton = ({ text }: fortext) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{ p: "12px", margin: "10px 0px", borderRadius: "8px" }}
      fullWidth
    >
      <Typography
        fontSize={"16px"}
        fontWeight="700"
        sx={{ textTransform: "capitalize" }}
      >
        {text}
      </Typography>
    </Button>
  );
};
