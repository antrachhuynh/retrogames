import { Card, Text, Link, Row } from "@nextui-org/react";

export default function Footer() {
    return (

        <Card css={{ mw: "100%", borderBottomLeftRadius: "0", borderBottomRightRadius: "0", mt: "20px" }} color="primary">
            <Row justify="center" align="center">
                <Text color="white">Copyright Retro Games 2022</Text>
                <Link
                    target="_blank"
                    css={{
                        color: "#19bae0", ml: "5px"
                    }}
                    href="https://github.com/antrachhuynh"
                >
                    GitHub
                </Link>
            </Row>
        </Card>
    );
}
