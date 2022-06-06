import { Card, Col, Row, Button, Text, Link } from "@nextui-org/react";

export const Header = () => (
    <Card cover css={{ w: "100%", mt: "20px", mb: "10px" }}>
        <Card.Body>

            <Card.Image
                src="https://cutewallpaper.org/21/retro-game-wallpapers/1920x1080-Retro-Gaming-Background-131-Retro-Hd-Wallpapers-.jpg"
                height={250}
                width="100%"
                alt="Retro Games"
            />
        </Card.Body>
        <Card.Footer
            blur
            css={{
                position: "absolute",
                bgBlur: "#ffffff",
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
            }}
        >
            <Row>
                <Col>
                    <Row justify="flex-start">
                        <Text color="white" h2 size={18}>
                            Free Retro Games on Web
                        </Text>
                    </Row >
                </Col>
                <Col>
                    <Row justify="flex-end">
                        <Button flat auto rounded color="secondary">
                            <Text
                                css={{ color: "inherit" }}
                                size={12}
                            >
                                <Link href="#"> Add to Chrome</Link>
                            </Text>
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
