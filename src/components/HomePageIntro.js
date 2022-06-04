import { Card, Grid, Text } from "@nextui-org/react";

export default function HomePageIntro() {
    return (
        <Grid.Container sm={12}>

            <Grid>
                <Card css={{ mw: "100%", mt: "10px", mb: "10px" }} color="primary">
                    <Text h1 color="white">
                        Retro Games
                    </Text>
                    <Text h2 color="white">20+ free retro games on web 🚀</Text>

                </Card>
            </Grid>
        </Grid.Container>
    );
}
