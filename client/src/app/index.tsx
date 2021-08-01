import { FC } from "react";

import { makeStyles, createStyles, Grid } from "@material-ui/core";
import io from "socket.io-client";

// my custom components
import Roulette from "./roulette";
import Chat from "./chat";
import Misc from "./misc";

// initialize socket.io (web-sockets) awesome thing
const socket = io();

const useStyles = makeStyles(theme => createStyles({
    root: {
        width: "100%",
        height: "100%",

        display: "grid",
        placeItems: "center"
    },
    grid: {
        width: "100%",
        height: "100%",
    },
}));

const App: FC = () => {
    const classes = useStyles();

    return (<>
       {/** enter the casino! */}
        <div className={classes.root}>
            {/** container for everything */}
            <Grid
                className={classes.grid}
                container
                spacing={1}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                {/** Misc. portion */}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Misc socket={socket} />
                </Grid>
                {/** chat portion */}
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Chat socket={socket} />
                </Grid>

                {/** roulette portion */}
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Roulette socket={socket} />
                </Grid>
            </Grid>

        </div> 
    </>);
};
export default App;