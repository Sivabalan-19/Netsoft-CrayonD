import React from "react";
import "../../styles/Bottom.css";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

function Bottom() {
  return (
    <Box className="bottomcont">
      <Box className="botomxo">
        <Box style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#ffff",
              outline: "none", 

              color: "Black",
              textTransform: "none",
              height: "50%",
              fontWeight: "600",
              border: "2px solid #E4E8EE",
            }}
          >
            Previous
          </Button>
        </Box>

        <Box
          style={{
            display: "flex",
            gap: "10px",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Box
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <Button
              variant="outlined"
              sx={{
              outline: "none", 

                backgroundColor: "#ffff",
                color: "Black",
                fontWeight: "600",
                height: "50%",
                textTransform: "none",
                border: "2px solid #E4E8EE",
              }}
            >
              Cancel
            </Button>
          </Box>
          <Box
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#5078E1",
                fontWeight: "600",
              outline: "none", 

                textTransform: "none",
                height: "50%",
                color: "white",
              }}
            >
              Create Quotation
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Bottom;
