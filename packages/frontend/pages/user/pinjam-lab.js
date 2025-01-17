import { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@material-ui/core";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import SimalabLayout from "@/layouts/default";
import LabCard from "@/components/surfaces/LabCard";
import { LabButton, LabButtonDropdown } from "@/components/inputs/LabButton";
import LabTable from "@/components/data_display/LabTable";
import {
  ListTableColumnDummy,
  ListTableDummy,
  ListTableWidthColumn,
} from "@/utils/dummy/ListTableAdminDashboard";
import CustomTheme from "@/themes/default";

const listDepartemen = ["Biologi", "Kimia", "Biokimia"];

function AdminPinjamLabPage() {
  const [departemenState, setDepartemenState] = useState(0);
  useEffect(() => {
    console.log("Departemen State:", departemenState);
  }, [departemenState]);

  return (
    <>
      <Grid container>
        <Grid item>
          <Typography variant="h3" component="h2">
            Pilih Departemen
          </Typography>
          <Box mt={1.5}>
            {listDepartemen.map((text, index) => {
              return (
                <Box mr={1} component="span">
                  <LabButton
                    key={index}
                    variant={
                      departemenState === index ? "contained" : "outlined"
                    }
                    color="primary"
                    onClick={() => {
                      setDepartemenState(index);
                    }}
                  >
                    {text}
                  </LabButton>
                </Box>
              );
            })}
          </Box>
        </Grid>

        <Grid item style={{ marginLeft: 44 }}>
          <Typography variant="h3" component="h2">
            Pilih lab
          </Typography>
          <Box mt={1.5}>
            <LabButtonDropdown>Silahkan pilih lab</LabButtonDropdown>
          </Box>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Box mt={5} mb={3}>
          <Typography variant="h3" component="h2">
            Jadwal Pemakaian Lab
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            Berikut jadwal pemakaian lab untuk lab biokimia medis
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item style={{ minHeight: 72 }} xs={4}>
            <Calendar />
          </Grid>

          <Grid item xs={8}>
            <LabCard title="Keterangan">
              <Typography>18 Desember 2021</Typography>
              <Grid container alignItems="center" style={{ marginTop: 8 }}>
                <div
                  style={{
                    backgroundColor: CustomTheme.palette.blue.main,
                    width: 14,
                    height: 14,
                    borderRadius: 50,
                    marginRight: 8,
                  }}
                />
                <Typography color="textSecondary">
                  Tidak ada kegiatan
                </Typography>
              </Grid>
            </LabCard>

            <Box my={3}>
              <LabCard title="Status peminjaman anda">
                <LabTable
                  column={ListTableColumnDummy}
                  data={ListTableDummy}
                  widthColumn={ListTableWidthColumn}
                />
              </LabCard>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

AdminPinjamLabPage.title = "Pinjam Lab";
AdminPinjamLabPage.Layout = SimalabLayout;
export default AdminPinjamLabPage;
