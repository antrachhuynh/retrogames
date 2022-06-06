import { Card, Grid, Link, Row, Text } from "@nextui-org/react";
import { useState, useEffect } from "react";


export default function GameList() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://raw.githubusercontent.com/antrachhuynh/retrogames/main/src/data.json`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [])

    return (

        <Grid.Container gap={2} >
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {data && data.map((item, index) => (

                <Grid xs={6} sm={3} key={index}>

                    <Card maxwidth="100%" hoverable clickable>

                        <Card.Body css={{ p: 0 }}>
                            <Link target='_blank' href={item.link}>
                                <Card.Image
                                    objectFit="cover"
                                    src={item.thumb}
                                    width='100%'

                                    alt={item.description}
                                />
                            </Link>
                        </Card.Body>
                        <Card.Footer
                            css={{ textAlign: "center" }}
                        >
                            <Link target='_blank' href={item.link}>
                                <Row


                                    wrap="wrap">
                                    <Text className="game-title" h2>{item.name}</Text>

                                </Row>
                            </Link>
                        </Card.Footer>

                    </Card>

                </Grid>

            ))
            }
        </Grid.Container >
    );
}
