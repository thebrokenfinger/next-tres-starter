import Head from "next/head";
import { Container, Flex, Heading, Image } from "@tres-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>next-tres-starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container size="3" css={{ my: "$8" }}>
          <Flex direction="column" align="center">
            <Heading as="h1" size="4">
              next-tres-starter
            </Heading>
            <Image
              src="/vercel.svg"
              alt="vercel logo"
              css={{ my: "$4", width: "$8" }}
            />
          </Flex>
        </Container>
      </main>
    </div>
  );
}
