import { Grid ,Paper} from "@material-ui/core";
import React from "react";
const Profile = () => {
  const paperStyle={padding:"20px 30px",width:350,margin:"20px auto"}
    return (
      <>
        
        
          <Grid>
            <Paper style={paperStyle}>
              <Grid align="center">
              <h1>Hello Profiles</h1>
              
              </Grid>
           
            </Paper>
            
          </Grid>
        
      </>
    );
  };
  export default Profile
