import React from "react";
import "../../styles/MainSpace.css";
import { Box } from "@mui/material";

function Quotation() {
  return (
    <Box className="Quotationdiv">
      <Box className="quotatiohead">Quotation Summary</Box>

      <Box className="quotationbox">
        <Box className="quottath">
          <Box style={{ width: "45%" }}>DESCRIPTION</Box>
          <Box style={{ width: "22%" }}>QTY</Box>
          <Box style={{ width: "33%", textAlign: "end" }}>AMOUNT</Box>
        </Box>

        <Box className="amountdiv">
          <Box className="amout">
            <Box className="amountanddis">
              <Box className="amoudiscol">
                <Box className="totalcm">Total Amount</Box>
                <Box className="qtuy">3</Box>
                <Box className="prie">$ 3,600.00</Box>
              </Box>

              <Box className="amoudiscol">
                <Box className="totalcm">Total Discount</Box>
                <Box className="qtuy">10%</Box>
                <Box
                  className="prie"
                  style={{ fontWeight: "normal", color: "#4E5A6B" }}
                >
                  - $ 100.00
                </Box>
              </Box>
            </Box>

            <Box className="refuntax">
              <Box className="amoudiscol">
                <Box className="totalcm">Total Refundable</Box>
                <Box className="qtuy">0%</Box>
                <Box className="prie">$ 0</Box>
              </Box>
             
            </Box>
            <Box className="refuntax">
              <Box className="amoudiscol">
                <Box className="totalcm">Total Tax</Box>
                <Box className="qtuy">3</Box>
                <Box className="prie">$ 648.00</Box>
              </Box>
             
            </Box>
            <Box style={{ height: "59%" }}></Box>
            <Box className="totoal">
              <Box className="amoudiscol">
                <Box className="totalcm" style={{ fontWeight: "600" }}>
                  Total Amount
                </Box>

                <Box className="prie" style={{ fontWeight: "600" }}>
                  $ 3,600.00
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Quotation;
