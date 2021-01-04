import React, {useEffect, useState} from "react";
import {Write} from "../components/Write";
import {Timeline} from "../components/Timeline";
import Fade from "react-reveal";

import styled from "styled-components";
export async function createFeed(name, body){
    const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/',{
        method: 'post',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            owner: name,
            content: body,
        }),
    });
}

export function TimelinePage(props) {
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        const server = async () => {
          const readResult = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/', {
              method:'get',
          });
          const readJson = await readResult.json();
          console.log(readJson);
          const propsData = readJson.map(read => {
              return {
                  name: read.owner,
                  body: read.content,
              }
          });
          setFeeds(propsData);
          console.log(feeds);

        };
        server();
    }, []);
    return <Container>
        <Write
            writeFunc={ createFeed }
        />
        <Fade bottom>
            <Timeline feeds= { feeds }/>
        </Fade>
    </Container>

}
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
