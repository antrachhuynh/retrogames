import { Card, Grid, Link, Row, Text } from "@nextui-org/react";

import JsonData from '../data.json';


export default function GameList() {
    const list = JsonData;
    return (

        <Grid.Container gap={2} >
            {list.map((item, index) => (

                <Grid xs={6} sm={3} key={index}>

                    <Card maxwidth="100%" hoverable clickable>

                        <Card.Body css={{ p: 0 }}>
                            <Link href={item.link}>
                                <Card.Image
                                    objectFit="cover"
                                    src={item.thumb}
                                    width="100%"
                                    height={140}
                                    alt={item.description}
                                />
                            </Link>
                        </Card.Body>
                        <Card.Footer justify="flex-start">
                            <Link href={item.link}>
                                <Row wrap="wrap" justify="space-between">
                                    <Text size="1.2rem" h2>{item.name}</Text>

                                </Row>
                            </Link>
                        </Card.Footer>

                    </Card>

                </Grid>

            ))}
        </Grid.Container>
    );
}
